"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CarouselImage {
  src: string
  alt: string
  title: string
  description: string
}

const carouselImages: CarouselImage[] = [
  {
    src: "/sri-lankan-farmers-harvesting-rice-in-golden-paddy.jpg",
    alt: "Farmers harvesting rice in golden paddy fields",
    title: "Empowering Rural Communities",
    description:
      "Supporting farmer families through sustainable agricultural practices and community development programs",
  },
  {
    src: "/women-farmers-in-sri-lanka-processing-organic-spic.jpg",
    alt: "Women processing organic spices and herbs",
    title: "Women's Empowerment",
    description: "Creating opportunities for women in agriculture through value-added processing and entrepreneurship",
  },
  {
    src: "/modern-agricultural-training-session-with-sri-lank.jpg",
    alt: "Agricultural training and education session",
    title: "Knowledge & Training",
    description:
      "Providing modern agricultural training and education to enhance farming productivity and sustainability",
  },
  {
    src: "/sri-lankan-village-savings-group-meeting-with-farm.jpg",
    alt: "Village savings and lending circle meeting",
    title: "Financial Empowerment",
    description: "Building financial literacy through savings circles and micro-lending programs for rural development",
  },
  {
    src: "/organic-vegetable-garden-with-diverse-crops-grown-.jpg",
    alt: "Diverse organic vegetable cultivation",
    title: "Organic Agriculture",
    description: "Promoting organic farming methods for healthier produce and sustainable environmental practices",
  },
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 800)
  }

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isPlaying) {
      interval = setInterval(nextSlide, 5000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying])

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Images with enhanced animations */}
      <div className="relative w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-in-out transform",
              index === currentIndex
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0"
            )}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-in-out"
              style={{
                imageRendering: "auto",
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Text content */}
            <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 transition-all duration-700 ease-out hidden sm:block",
                  index === currentIndex
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                )}
            >
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-5 md:p-6 border border-white/10 shadow-2xl w-[60vw] mx-auto flex flex-col items-center justify-center">
                <h3
                  className={cn(
                    "text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-balance text-white text-center transition-all duration-700 delay-200",
                    index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  )}
                  style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.9)" }}
                >
                  {image.title}
                </h3>
                <p
                  className={cn(
                    "text-lg md:text-xl text-white/95 max-w-2xl text-pretty text-center transition-all duration-700 delay-300 leading-relaxed",
                    index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  )}
                  style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
                >
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Modern style */}
      <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl opacity-0 group-hover:opacity-100"
          onClick={prevSlide}
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl opacity-0 group-hover:opacity-100"
          onClick={nextSlide}
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Progress indicator */}
      <div className="absolute top-4 left-4 z-20 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 text-sm text-white/90 flex items-center gap-2">
        <span className="font-medium">
          {currentIndex + 1} / {carouselImages.length}
        </span>
      </div>

      {/* Autoplay control */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 shadow-xl"
        onClick={toggleAutoplay}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>

      {/* Enhanced Dots Indicator - Modern style */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "transition-all duration-500 rounded-full shadow-lg bg-white/60 hover:bg-white/80",
              index === currentIndex
                ? "w-8 h-2 bg-white ring-1 ring-white/50"
                : "w-2 h-2 hover:scale-125"
            )}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar for autoplay */}
      {isPlaying && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 z-30">
          <div
            className="h-full bg-white transition-all duration-5000 ease-linear"
            key={currentIndex}
            style={{ width: "100%" }}
            onAnimationEnd={nextSlide}
          />
        </div>
      )}
    </div>
  )
}