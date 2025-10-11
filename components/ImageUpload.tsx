'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface ImageUploadProps {
  url: string
  trigger: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ImageUpload(props: ImageUploadProps) {
  const [image, setImage] = useState<string | null>(null)
  const [imageData, setImageData] = useState<{ alt: string; eventDate: string }>({
    alt: '',
    eventDate: new Date().toISOString().split('T')[0], // Default to today's date
  })
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [uploadMessage, setUploadMessage] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const UPLOAD_URL = props.url
  const PRIMARY_COLOR = '#172030'

  // Auto-reset after successful upload
  useEffect(() => {
    if (uploadStatus === 'success') {
      const timer = setTimeout(() => {
        setImage(null)
        setSelectedFile(null)
        setImageData({ alt: '', eventDate: new Date().toISOString().split('T')[0] })
        setUploadStatus('idle')
        setUploadMessage('')
        props.trigger((prev: boolean) => !prev)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      }, 3000) // Reset after 3 seconds

      return () => clearTimeout(timer)
    }
  }, [uploadStatus])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    const file = files[0]
    if (file && file.type.startsWith('image/')) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setUploadStatus('error')
        setUploadMessage('File size too large. Maximum size is 5MB.')
        return
      }

      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          setImage(e.target.result)
        }
      }
      reader.readAsDataURL(file)
      setUploadStatus('idle')
      setUploadMessage('')
    } else {
      setUploadStatus('error')
      setUploadMessage('Please select a valid image file.')
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)

    const file = event.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setUploadStatus('error')
        setUploadMessage('File size too large. Maximum size is 5MB.')
        return
      }

      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string') {
          setImage(e.target.result)
        }
      }
      reader.readAsDataURL(file)
      setUploadStatus('idle')
      setUploadMessage('')
    } else {
      setUploadStatus('error')
      setUploadMessage('Please drop a valid image file.')
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const removeImage = () => {
    setImage(null)
    setSelectedFile(null)
    setImageData({ alt: '', eventDate: new Date().toISOString().split('T')[0] })
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    setUploadStatus('idle')
    setUploadMessage('')
  }

  const handleInputChange = (field: keyof typeof imageData, value: string) => {
    setImageData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Prevent click propagation for input fields
  const handleInputClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const uploadImage = async () => {
    if (!selectedFile) return

    // Validate inputs
    if (!imageData.alt.trim()) {
      setUploadStatus('error')
      setUploadMessage('Please enter a description for the image.')
      return
    }

    if (!imageData.eventDate) {
      setUploadStatus('error')
      setUploadMessage('Please select an event date.')
      return
    }

    setIsUploading(true)
    setUploadStatus('idle')
    setUploadMessage('')

    try {
      // Create FormData to send the file and metadata
      const formData = new FormData()
      formData.append('image', selectedFile)
      formData.append('alt', imageData.alt)
      formData.append('eventDate', new Date(imageData.eventDate).toISOString())

      // Send the request to your API endpoint
      const response = await fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData,
        credentials: 'include',
        headers: {
          Authorization: 'Bearer 2264b5e4aa907f47f315156479f0fa0ca07f55421d820b8e829f49d7c740e3f7',
        },
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Upload failed: ${response.status} ${response.statusText} - ${errorText}`)
      }

      const result = await response.json()

      setUploadStatus('success')
      setUploadMessage('Image uploaded successfully! Ready for next upload in 3 seconds...')
      console.log('Upload result:', result)
    } catch (error) {
      console.error('Upload error:', error)
      setUploadStatus('error')
      if (error instanceof Error) {
        setUploadMessage(`Failed to upload image: ${error.message}`)
      } else {
        setUploadMessage('Failed to upload image. Please try again.')
      }
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div
        className={`
          border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300
          ${isDragging ? `border-[#172030] bg-[#172030]/10` : image ? (uploadStatus === 'error' ? 'border-red-500 bg-red-50' : uploadStatus === 'success' ? 'border-green-500 bg-green-50' : `border-[#172030] bg-[#172030]/5`) : 'border-gray-300 bg-gray-50 hover:border-[#172030] hover:bg-[#172030]/5'}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={!image ? handleClick : undefined} // Only set onClick when no image is selected
      >
        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

        {image ? (
          <div className="space-y-4">
            <div className="relative mx-auto w-48 h-48">
              <Image src={image} alt="Uploaded preview" fill className="object-contain rounded-lg" sizes="192px" />
            </div>

            {/* Input Fields for Alt and Event Date */}
            <div className="space-y-4 max-w-md mx-auto">
              <div>
                <label htmlFor="alt" className="block text-sm font-medium text-gray-700 text-left mb-1">
                  Image Description *
                </label>
                <input
                  id="alt"
                  type="text"
                  value={imageData.alt}
                  onChange={(e) => handleInputChange('alt', e.target.value)}
                  onClick={handleInputClick} // Prevent click propagation
                  placeholder="Enter a description for this image..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#172030] focus:border-transparent"
                  disabled={isUploading || uploadStatus === 'success'}
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 text-left mb-1">
                  Event Date *
                </label>
                <input
                  id="eventDate"
                  type="date"
                  value={imageData.eventDate}
                  onChange={(e) => handleInputChange('eventDate', e.target.value)}
                  onClick={handleInputClick} // Prevent click propagation
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#172030] focus:border-transparent"
                  disabled={isUploading || uploadStatus === 'success'}
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className={`font-medium ${uploadStatus === 'success' ? 'text-green-600' : uploadStatus === 'error' ? 'text-red-600' : 'text-[#172030]'}`}>{uploadStatus === 'success' ? 'Image uploaded successfully!' : uploadStatus === 'error' ? 'Upload failed' : 'Image ready for upload!'}</p>

              {/* Upload Status Message */}
              {uploadMessage && <div className={`text-sm ${uploadStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>{uploadMessage}</div>}

              {/* Countdown for auto-reset */}
              {uploadStatus === 'success' && <div className="text-sm text-gray-500">Resetting in 3 seconds...</div>}
            </div>

            <div className="flex gap-3 justify-center flex-wrap">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation() // Prevent triggering file input
                  removeImage()
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50"
                disabled={isUploading || uploadStatus === 'success'}
              >
                Remove Image
              </button>

              {uploadStatus !== 'success' && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation() // Prevent triggering file input
                    uploadImage()
                  }}
                  disabled={isUploading || !selectedFile}
                  className="px-4 py-2 bg-[#172030] text-white rounded-lg hover:bg-[#172030]/90 transition-colors disabled:opacity-50 flex items-center gap-2"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  {isUploading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </>
                  ) : (
                    'Upload Image'
                  )}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Upload your image</h3>
              <p className="text-gray-500 text-sm">Drag and drop your image here, or click to browse</p>
            </div>
            <div className="text-xs text-gray-400 space-y-1">
              <p>Supports: JPG, PNG, GIF, WEBP</p>
              <p>Max size: 5MB</p>
            </div>

            {/* Error message when no image but there's an error */}
            {uploadStatus === 'error' && uploadMessage && <div className="text-red-600 text-sm font-medium mt-2">{uploadMessage}</div>}
          </div>
        )}
      </div>

      {!image && (
        <div className="mt-4 text-center">
          <button type="button" onClick={handleClick} className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-colors font-medium" style={{ backgroundColor: PRIMARY_COLOR }}>
            Browse Files
          </button>
        </div>
      )}
    </div>
  )
}
