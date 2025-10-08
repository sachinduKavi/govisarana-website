import Loading from '@/components/Loading'
import { errorToast, successToast } from '@/components/toast'
import { connecctionError, generalError } from '@/components/toast'
import { checkPasscodeReqest } from '@/http/system-request'
import { setAttribute } from '@/lib/redux/attributes/attribute-slice'
import { AppDispatch } from '@/lib/redux/store'

export async function checkPasscode(
  passcode: string,
  dispatch: AppDispatch
): Promise<boolean> {
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
