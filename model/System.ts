import Loading from '@/components/Loading'
import { errorToast, successToast } from '@/components/toast'
import { connecctionError, generalError } from '@/components/toast'
import { checkPasscodeReqest } from '@/http/system-request'

export async function checkPasscode(passcode: string) {
  console.log('Checking passcode:', passcode)
  try {
    Loading.setLoading(true)
    const response = await checkPasscodeReqest(passcode)
    console.log(response)
    if (response.status === 200 && response.data.proceed) {
      successToast('Passcode accepted. Redirecting...')
    } else {
      if (response.status !== 200) {
        connecctionError()
        return
      }
      errorToast('Invalid passcode. Please try again.')
    }
  } catch (e: any) {
    console.error('Error checking passcode:', e)
    generalError()
  } finally {
    Loading.setLoading(false)
  }
}
