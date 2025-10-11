'use client'

import ImageUpload from '@/components/ImageUpload'
import { baseURL } from '@/http/config'
import { getImageDetails, permanentDeleteImage } from '@/model/Storage'
import { GalleryImage } from '@/type/storage/gallery-image'
import React, { useEffect, useState } from 'react'

export default function Gallery() {
  const [imageList, setImageList] = useState<GalleryImage[]>([])
  const [isDeleting, setIsDeleting] = useState<number | null>(null)
  const [refresh, setRefresh] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const loadImages = async () => {
    const res = await getImageDetails()
    if (res) {
      setImageList(res)
    }
  }

  const handleDeleteImage = async (imageId: number) => {
    if (window.confirm('Are you sure you want to delete this image? This action cannot be undone.')) {
      setIsDeleting(imageId)
      await permanentDeleteImage(imageId)
      setRefresh((pre) => !pre)
      setIsDeleting(null)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  useEffect(() => {
    loadImages()
  }, [refresh])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent mb-4">Gallery Management</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Upload and manage your gallery images with ease. Showcase your memories in a beautiful, organized way.</p>
        </div>

        {/* Upload Section */}
        <div className="mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add New Image</h2>
            <ImageUpload url={`${baseURL}/storage/upload-to-gallery`} trigger={setRefresh} />
          </div>
        </div>

        {/* Images Grid */}
        {imageList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {imageList.map((img) => (
              <div key={img.id} className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden hover:scale-105">
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <img src={img.src} alt={img.alt || `Gallery Image ${img.id}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                  {/* Action buttons */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={() => setSelectedImage(img)} className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200" title="View image">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>

                    <button onClick={() => handleDeleteImage(img.id)} disabled={isDeleting === img.id} className="p-2 bg-red-500/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-red-600 transition-colors duration-200 disabled:opacity-50" title="Delete image">
                      {isDeleting === img.id ? (
                        <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Image ID badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full">#{img.id}</span>
                  </div>
                </div>

                {/* Image Details */}
                <div className="p-5">
                  {/* Alt Text */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Description</h3>
                    <p className="text-gray-800 line-clamp-2 leading-relaxed">{img.alt || 'No description provided'}</p>
                  </div>

                  {/* Event Date */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wide">Event Date</h3>
                      <p className="text-sm font-semibold text-blue-600">{formatDate(img.eventDate.toString())}</p>
                    </div>

                    {/* Calendar icon */}
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Your gallery is empty</h3>
              <p className="text-gray-600 mb-8">Start building your collection by uploading your first image. Showcase your favorite moments and memories.</p>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="relative">
                <img src={selectedImage.src} alt={selectedImage.alt || 'Gallery image'} className="w-full h-auto max-h-[70vh] object-contain" />
                <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Image Details</h3>
                <p className="text-gray-600 mb-4">{selectedImage.alt || 'No description'}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Event Date: {formatDate(selectedImage.eventDate.toString())}</span>
                  <span>ID: #{selectedImage.id}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
