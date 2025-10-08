import { checkPasscodeReqest } from '@/http/system-request'

export class SystemService {
  static async checkPasscode(passcode: string) {
    const response = await checkPasscodeReqest(passcode)
    console.log(response)
  }
}
