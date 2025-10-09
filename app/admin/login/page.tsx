'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { checkPasscode, otpSend } from '@/model/System'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { AppDispatch, RootState } from '@/lib/redux/store'
import { OtpPayload } from '@/type/payloads'
import StageZero from './StageZero'
import StageOne from './StageOne'
import StageTwo from './StageTwo'

export default function Login() {
  const [isFocused, setIsFocused] = useState(false)
  const [stage, setStage] = useState<number>(0)
  const [selectedNumber, setSelectedNumber] = useState<OtpPayload['numbers'][0] | null>(null)
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''))
  const [otpError, setOtpError] = useState<string>('')
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const dispatch: AppDispatch = useAppDispatch()
  const attributeData = useAppSelector((state: RootState) => state.attributeSlice)
  const attributes = attributeData && attributeData.length > 0 ? JSON.parse(attributeData) : null

  const handleSubmit = async (e: { preventDefault: () => void }, password: string) => {
    e.preventDefault()
    if (await checkPasscode(password, dispatch)) {
      setStage(1)
    }
  }

  const numberSelected = async (numberDetails: { ownerName: string; number: string; id: number }) => {
    console.log('Selected number:', numberDetails)
    if (await otpSend(numberDetails.id)) {
      setSelectedNumber(numberDetails)
      setStage(2)
    }
  }

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

  const handleVerify = () => {
    const otpString = otp.join('')
    if (otpString.length !== 6) {
      setOtpError('Please enter a 6-digit code')
      return
    }

    // Add your OTP verification logic here
    console.log('Verifying OTP:', otpString)
    // verifyOtp(otpString, selectedNumber?.id)
  }

  const handleResendOtp = async () => {
    if (selectedNumber) {
      if (await otpSend(selectedNumber.id)) {
        setOtp(new Array(6).fill(''))
        setOtpError('')
        inputRefs.current[0]?.focus()
        // You might want to show a success message here
        console.log('OTP resent successfully')
      }
    }
  }

  const handleBack = () => {
    if (stage === 2) {
      setStage(1)
      setSelectedNumber(null)
      setOtp(new Array(6).fill(''))
      setOtpError('')
    } else if (stage === 1) {
      setStage(0)
    }
  }

  // Clear inputs when stage changes
  useEffect(() => {
    if (stage === 2) {
      setOtp(new Array(6).fill(''))
      setOtpError('')
      setTimeout(() => {
        inputRefs.current[0]?.focus()
      }, 100)
    }
  }, [stage])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      {stage === 2 && <StageTwo selectedNumber={selectedNumber} handleBack={handleBack} />}

      {stage === 1 && <StageOne attributes={attributes} numberSelected={numberSelected} />}

      {stage === 0 && <StageZero handleSubmit={handleSubmit} />}
    </div>
  )
}
