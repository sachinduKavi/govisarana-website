'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { checkPasscode } from '@/model/System'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { AppDispatch, RootState } from '@/lib/redux/store'
import { OtpPayload } from '@/type/payloads'

export default function Login() {
  const [password, setPassword] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [stage, setStage] = useState<number>(0)
  const dispatch: AppDispatch = useAppDispatch()
  const attributeData = useAppSelector(
    (state: RootState) => state.attributeSlice
  )
  const attributes =
    attributeData && attributeData.length > 0 ? JSON.parse(attributeData) : null

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Handle login logic here
    if (await checkPasscode(password, dispatch)) {
      setStage(1)
    }
  }

  const numberSelected = (num: OtpPayload['numbers'][number]) => {
    console.log('Selected number:', num)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      {stage === 1 && (
        <div className="p-8 bg-white rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600 mt-2">
              Select the verification mobile number to receive OTP
            </p>
          </div>

          {attributes &&
            attributes.numbers.map(
              (
                num: { ownerName: string; number: string; id: number },
                index: number
              ) => {
                return (
                  <div
                    className="group cursor-pointer m-4 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-[#782A3A] hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                    key={index}
                    onClick={() => numberSelected(num)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {/* Phone Icon */}
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#782A3A] to-[#5c1f2d] rounded-full group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>

                        {/* Number and Owner Info */}
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500 font-medium">
                              XXX XXX
                            </span>
                            <span className="font-bold text-gray-900">
                              {num.number.slice(-4)}
                            </span>
                            <div className="px-2 py-1 bg-green-50 border border-green-200 rounded-full">
                              <span className="text-xs font-semibold text-green-700">
                                SMS
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {num.ownerName}
                          </p>
                        </div>
                      </div>

                      {/* Selection Indicator */}
                      <div className="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-[#782A3A] transition-colors duration-300">
                        <div className="w-3 h-3 bg-[#782A3A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Hover effect line */}
                    <div className="mt-3 h-0.5 bg-gradient-to-r from-transparent via-[#782A3A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )
              }
            )}
        </div>
      )}

      {stage === 0 && (
        <div className="p-8 bg-white rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600 mt-2">
              Enter your secret pin to continue
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="password"
              >
                Secret Pin
              </label>
              <div
                className={`relative transition-all duration-200 ${
                  isFocused ? 'transform scale-[1.02]' : ''
                }`}
              >
                <input
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 ${
                    isFocused
                      ? 'border-[#782A3A] ring-[#782A3A]/20 bg-white'
                      : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                  }`}
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter your secure pin"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <button
              className="w-full bg-[#782A3A] text-white py-3.5 rounded-xl font-semibold shadow-lg hover:bg-[#5c1f2d] transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#782A3A]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              type="submit"
              disabled={!password}
            >
              <span className="flex items-center justify-center">
                Login
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Forgot your pin?{' '}
              <a
                href="#"
                className="text-[#782A3A] font-semibold hover:text-[#5c1f2d] transition-colors duration-200"
              >
                Contact support
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
