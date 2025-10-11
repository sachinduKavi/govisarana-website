import Loading from '@/components/Loading'
import { errorToast, successToast } from '@/components/toast'
import { connecctionError, generalError } from '@/components/toast'
import { checkPasscodeReqest, fetchAllUsersRequest, sendOtpRequest, verifyOTPRequest } from '@/http/system-request'
import { setAttribute } from '@/lib/redux/attributes/attribute-slice'
import { setPublicKey } from '@/lib/redux/keys/public-key'
import { AppDispatch } from '@/lib/redux/store'
import cookie from 'js-cookie'

export async function checkPasscode(passcode: string, dispatch: AppDispatch): Promise<boolean> {
  try {
    Loading.setLoading(true)
    const response = await checkPasscodeReqest(passcode)
    if (response.status === 200 && response.data.proceed) {
      successToast('Passcode accepted.')
      dispatch(setAttribute(response.data.content))
      return true
    } else if (response.status !== 200) {
      connecctionError()
    } else {
      errorToast('Invalid passcode. Please try again.')
    }
  } catch (e: any) {
    console.error('Error checking passcode:', e)
    generalError()
  } finally {
    Loading.setLoading(false)
  }
  return false
}

export async function otpSend(mobileId: number): Promise<boolean> {
  try {
    Loading.setLoading(true)
    const response = await sendOtpRequest(mobileId)
    if (response.status === 200 && response.data.proceed) {
      successToast('OTP sent successfully.')
      return true
    } else if (response.status !== 200) {
      connecctionError()
    } else {
      generalError()
    }
  } catch (e: any) {
    console.error('Error sending OTP:', e)
    generalError()
  } finally {
    Loading.setLoading(false)
  }
  return false
}

export async function verifyOtp(otp: string, mobileId: number, dispatch: AppDispatch): Promise<boolean> {
  try {
    Loading.setLoading(true)
    const response = await verifyOTPRequest(otp, mobileId)
    if (response.status === 200 && response.data.proceed) {
      successToast('OTP verified successfully.')
      dispatch(setPublicKey(response.data.content.publicKey))
      cookie.set('jsonwebtoken', response.data.content.token, { expires: 1, sameSite: 'Lax' })
      return true
    } else if (response.status !== 200) {
      if (response.data.message === 'Invalid mobileId') {
        errorToast('Session expired. Please login again.')
      } else connecctionError()
    } else errorToast('Invalid OTP. Please try again.')
  } catch (e: any) {
    console.error('Error verifying OTP:', e)
    generalError()
  } finally {
    Loading.setLoading(false)
  }
  return false
}

export async function loadUserDetails(): Promise<Object | false> {
  try {
    Loading.setLoading(true)
    const response = await fetchAllUsersRequest()
    if (response.status === 200 && response.data.proceed) {
      return response.data.content
    }
  } catch (e: any) {
    console.error('Error fetching user details:', e)
  } finally {
    Loading.setLoading(false)
  }

  return false
}
