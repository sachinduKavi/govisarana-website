// Normalize mobile number to format: +94 XX XXX XXXX
export function mobileNumberDisplayFormat(mNumber: string): string {
  let normalized: string

  // Case: 94XXXXXXXXX (11 digits, without +)
  if (mNumber.slice(0, 2) === '94' && mNumber.length === 11) {
    normalized = mNumber
  }
  // Case: +94XXXXXXXXX (with +)
  else if (mNumber.slice(0, 3) === '+94' && mNumber.length === 12) {
    normalized = mNumber.slice(1) // remove +
  }
  // Case: 0XXXXXXXXX (10 digits starting with 0)
  else if (mNumber.charAt(0) === '0' && mNumber.length === 10) {
    normalized = '94' + mNumber.slice(1)
  }
  // Case: 7XXXXXXXX (9 digits starting with 7)
  else if (mNumber.charAt(0) === '7' && mNumber.length === 9) {
    normalized = '94' + mNumber
  } else {
    console.log('Invalid mobile number')
    return ''
  }

  // Format into +94 XX XXX XXXX
  return `+${normalized.slice(0, 2)} ${normalized.slice(
    2,
    4
  )} ${normalized.slice(4, 7)} ${normalized.slice(7)}`
}
