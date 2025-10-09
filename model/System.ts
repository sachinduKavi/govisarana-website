import Loading from '@/components/Loading'
import { errorToast, successToast } from '@/components/toast'
import { connecctionError, generalError } from '@/components/toast'
import { checkPasscodeReqest, sendOtpRequest, verifyOTPRequest } from '@/http/system-request'
import { setAttribute } from '@/lib/redux/attributes/attribute-slice'
import { setPublicKey } from '@/lib/redux/keys/public-key'
import { AppDispatch } from '@/lib/redux/store'

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
      return true
    } else if (response.status !== 200) {
      if (response.data.message === 'Invalid mobileId') {
        errorToast('Session expired. Please login again.')
      } else connecctionError()
    }
  } catch (e: any) {
    console.error('Error verifying OTP:', e)
    generalError()
  } finally {
    Loading.setLoading(false)
  }
  return false
}
