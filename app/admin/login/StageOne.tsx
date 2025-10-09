import React from 'react'
import Image from 'next/image'

export default function StageOne({ attributes, numberSelected }: { attributes: any; numberSelected: (num: { ownerName: string; number: string; id: number }) => void }) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
      <div className="text-center mb-8">
        <Image src="/logo.png" alt="Logo" width={120} height={120} className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Select the verification mobile number to receive OTP</p>
      </div>

      {attributes &&
        attributes.numbers.map((num: { ownerName: string; number: string; id: number }, index: number) => {
          return (
            <div className="group cursor-pointer m-4 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-[#782A3A] hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]" key={index} onClick={() => numberSelected(num)}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {/* Phone Icon */}
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#782A3A] to-[#5c1f2d] rounded-full group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>

                  {/* Number and Owner Info */}
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 font-medium">XXX XXX</span>
                      <span className="font-bold text-gray-900">{num.number.slice(-4)}</span>
                      <div className="px-2 py-1 bg-green-50 border border-green-200 rounded-full">
                        <span className="text-xs font-semibold text-green-700">SMS</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{num.ownerName}</p>
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
        })}
    </div>
  )
}
