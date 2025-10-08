export interface NumberEntry {
  number: string
  ownerName: string
  id: number
}

export interface OtpPayload {
  otp_mobile: string
  numbers: NumberEntry[]
}
