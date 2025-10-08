// __test__/passcode.test.ts
import { describe, it, expect, jest } from '@jest/globals'

// --- MOCK UI COMPONENTS ---
jest.mock('@/components/Loading', () => ({
  default: {
    setLoading: jest.fn(() => console.log('Loading.setLoading called')),
  },
}))

jest.mock('@/components/toast', () => ({
  successToast: jest.fn(),
  errorToast: jest.fn(),
  connecctionError: jest.fn(),
  generalError: jest.fn(),
}))

// --- MOCK HTTP REQUEST ---
jest.mock('@/http/system-request', () => ({
  checkPasscodeReqest: jest.fn(async (passcode: string) => {
    if (passcode === '70793891') {
      return { status: 200, data: { proceed: true, content: 'Valid passcode' } }
    }
    return { status: 200, data: { proceed: false } }
  }),
}))

// --- IMPORT SYSTEM UNDER TEST AFTER MOCKS ---
import { checkPasscode } from '@/model/System'

describe('checkPasscode()', () => {
  it.each([
    ['1234', false],
    ['0000', false],
    ['abcd', false],
    ['70793891', true],
  ])('returns %s → %s', async (input, expected) => {
    const result = await checkPasscode(input)
    expect(result).toBe(expected)
  })
})
