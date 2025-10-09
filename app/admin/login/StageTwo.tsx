'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { otpSend, verifyOtp } from '@/model/System'
import { redirect } from 'next/navigation'

export default function StageTwo({ selectedNumber, handleBack }: { selectedNumber: { ownerName: string; number: string; id: number } | null; handleBack: () => void }) {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''))
  const [otpError, setOtpError] = useState<string>('')
  const [timeLeft, setTimeLeft] = useState<number>(300) // 5 minutes in seconds
  const [canResend, setCanResend] = useState<boolean>(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true)
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return

    const newOtp = [...otp]
    newOtp[index] = element.value
    setOtp(newOtp)
    setOtpError('')

    // Focus next input
    if (element.value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    if (pastedData.length === 6 && !isNaN(Number(pastedData))) {
      const pastedArray = pastedData.split('')
      setOtp(pastedArray)
      pastedArray.forEach((value, index) => {
        if (inputRefs.current[index]) {
          inputRefs.current[index]!.value = value
        }
      })
      inputRefs.current[5]?.focus()
    }
  }

  const handleVerify = async () => {
    const otpString = otp.join('')
    if (otpString.length !== 6) {
      setOtpError('Please enter a 6-digit code')
      return
    }
    // Otp verification logic
    if (await verifyOtp(otpString, selectedNumber!.id)) {
      redirect('/admin/dashboard')
    }
  }

  const handleResendOtp = async () => {
    if (selectedNumber && canResend) {
      if (await otpSend(selectedNumber.id)) {
        setOtp(new Array(6).fill(''))
        setOtpError('')
        setTimeLeft(300) // Reset to 5 minutes
        setCanResend(false)
        inputRefs.current[0]?.focus()
        console.log('OTP resent successfully')
      }
    }
  }

  // Format time to MM:SS
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl w-full max-w-md border border-gray-100 relative">
      {/* Back Button */}
      <button onClick={handleBack} className="absolute top-4 left-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#782A3A]/30" aria-label="Go back">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="text-center mb-8">
        <Image src="/logo.png" alt="Logo" width={120} height={120} className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900">Enter Verification Code</h2>
        <p className="text-gray-600 mt-2">We've sent a 6-digit code to XXX XXX {selectedNumber?.number.slice(-4)}</p>
      </div>

      {/* OTP Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3 text-center">Enter 6-digit code</label>
        <div className="flex justify-center space-x-2 mb-4">
          {otp.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:border-[#782A3A] focus:ring-2 focus:ring-[#782A3A]/20 transition-all duration-200"
              ref={(el) => {
                inputRefs.current[index] = el
              }}
              onChange={(e) => handleOtpChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={index === 0 ? handlePaste : undefined}
              value={otp[index]}
            />
          ))}
        </div>
        {otpError && <p className="text-red-500 text-sm text-center mt-2">{otpError}</p>}
      </div>

      {/* Verify Button */}
      <div className="mb-4">
        <button className="w-full bg-[#782A3A] text-white py-3.5 rounded-xl font-semibold shadow-lg hover:bg-[#5c1f2d] transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#782A3A]/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" onClick={handleVerify}>
          Verify Code
        </button>
      </div>

      {/* Resend OTP Section */}
      <div className="text-center">
        <p className="text-gray-600 text-sm mb-3">Didn't receive the code?</p>
        {!canResend ? (
          <div className="flex items-center justify-center space-x-2">
            <p className="text-gray-500 text-sm">Resend OTP in</p>
            <span className="text-[#782A3A] font-medium text-sm">{formatTime(timeLeft)}</span>
          </div>
        ) : (
          <button className="text-[#782A3A] text-sm font-medium hover:text-[#5c1f2d] underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#782A3A]/30 rounded px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:no-underline" onClick={handleResendOtp} type="button">
            Resend OTP
          </button>
        )}
      </div>
    </div>
  )
}
