import domain from './config'

export const checkPasscodeReqest = (passcode: string) => {
  return domain.post('web/check-passcode', { passcode })
}

export const sendOtpRequest = (mobileId: number) => {
  return domain.get(`web/send-otp/${mobileId}`)
}
