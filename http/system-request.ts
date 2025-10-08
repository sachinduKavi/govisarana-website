import domain from './config'

export const checkPasscodeReqest = (passcode: string) => {
  return domain.post('web/check-passcode', { passcode })
}
