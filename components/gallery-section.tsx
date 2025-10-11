'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/button'
import { Eye } from 'lucide-react'
import { getImageDetails } from '@/model/Storage'
import { GalleryImage } from '@/type/storage/gallery-image'

const GallerySection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [eventImages, setEventImages] = useState<GalleryImage[]>([])

  const loadEventImages = async () => {
    const res = await getImageDetails()
    if (res) {
      setEventImages(res)
    }
  }

  useEffect(() => {
    loadEventImages()
  }, [])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isGalleryOpen || selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isGalleryOpen, selectedImage])

  const openGallery = () => {
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    setSelectedImage(null)
  }

  const openImage = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="gallery"
      className="relative py-16 bg-gray-900 mb-10"
      style={{
        backgroundImage: `url('farmer-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="flex flex-col md:flex-row items-center" initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={containerVariants}>
          {/* Left side */}
          <motion.div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-white mb-6">Event Gallery</h2>
            <motion.div className="mb-6 overflow-hidden rounded-lg shadow-lg relative h-80" whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              {eventImages[0] ? <Image src={eventImages[0].src} alt="Event highlight" fill className="object-cover transition-transform duration-300 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" /> : <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-200">No image</div>}
            </motion.div>
            <p className="text-gray-200 mb-6">Relive the memorable moments from our event. Browse through our collection of photos capturing the energy and excitement.</p>

            <Button type="button" onClick={openGallery} size="lg" className="p-6 !px-20 font-bold w-fit cursor-pointer">
              <Eye className="mr-2" />
              View Event Gallery
            </Button>
          </motion.div>

          {/* Right side */}
          <motion.div className="w-full md:w-1/2 grid grid-cols-2 gap-4" variants={containerVariants}>
            {eventImages.slice(0, 4).map((image, index) => (
              <motion.div key={image.id} className="overflow-hidden rounded-lg shadow-md relative h-48" variants={itemVariants} custom={index} whileHover={{ scale: 1.05 }}>
                <Image src={image.src} alt={image.alt ?? ''} fill className="object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" sizes="(max-width: 768px) 50vw, 25vw" onClick={() => openImage(image)} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Full gallery modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div className="fixed inset-0 z-50 bg-black bg-opacity-90 overflow-y-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="container mx-auto px-4 py-16 relative">
              <motion.button onClick={closeGallery} className="fixed top-4 right-4 text-white hover:text-gray-300 z-50 bg-gray-800 rounded-full p-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <h2 className="text-3xl font-bold text-white mb-8 text-center">Event Gallery</h2>

              <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                {eventImages.map((image) => (
                  <motion.div key={image.id} className="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer h-64" whileHover={{ scale: 1.02 }} onClick={() => openImage(image)} layoutId={`image-${image.id}`}>
                    <Image src={image.src} alt={image.alt ?? ''} fill className="object-cover transform group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm">{image.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Single image modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)}>
            <motion.button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 bg-gray-800 rounded-full p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div className="relative max-w-4xl w-full h-full flex items-center justify-center" layoutId={`image-${selectedImage.id}`} onClick={(e) => e.stopPropagation()}>
              <div className="relative w-full h-full max-h-[80vh]">
                <Image src={selectedImage.src} alt={selectedImage.alt ?? ''} fill className="object-contain" sizes="(max-width: 768px) 100vw, 80vw" />
              </div>
              <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/70 px-4 py-2 rounded-lg">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GallerySection
