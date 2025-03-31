"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Spa reception area",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Treatment room",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Relaxation lounge",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Product display",
  },
]

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = galleryImages.length - 1
  const [isAnimating, setIsAnimating] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((current) => (current === maxIndex ? 0 : current + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((current) => (current === 0 ? maxIndex : current - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, 5000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [])

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    autoPlayRef.current = setInterval(nextSlide, 5000)
  }

  const handleManualNavigation = (direction: "next" | "prev") => {
    resetAutoPlay()
    if (direction === "next") {
      nextSlide()
    } else {
      prevSlide()
    }
  }

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-emerald-100 z-20"
        onClick={() => handleManualNavigation("prev")}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-emerald-100 z-20"
        onClick={() => handleManualNavigation("next")}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => {
              resetAutoPlay()
              setCurrentIndex(index)
            }}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

