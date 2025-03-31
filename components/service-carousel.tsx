"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const services = [
  {
    category: "Essential Package",
    items: [
      {
        name: "Sensitive Care",
        description: "Gentle treatment for sensitive scalps, using mild, natural ingredients to soothe and nourish.",
      },
      {
        name: "Detox Care",
        description: "Deep cleansing treatment that removes buildup and impurities from the scalp and hair.",
      },
      {
        name: "Destress Care",
        description: "Relaxing scalp massage and treatment to reduce stress and promote healthy hair growth.",
      },
    ],
  },
  {
    category: "Premium Package",
    items: [
      {
        name: "Root Rejuvenate",
        description: "Advanced treatment targeting the hair follicles to stimulate growth and strengthen roots.",
      },
      {
        name: "Pure Crown",
        description: "Comprehensive scalp treatment that balances oils and restores natural pH levels.",
      },
      {
        name: "Full Blossom",
        description: "Complete hair and scalp therapy for maximum vitality and shine.",
      },
    ],
  },
  {
    category: "Special Occasion Package",
    items: [
      {
        name: "Exclusive Retreat",
        description: "Luxurious, extended treatment session with personalized care for special events.",
      },
      {
        name: "Luxury Group",
        description: "Group packages for special occasions, perfect for bridal parties or celebrations.",
      },
    ],
  },
]

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = services.length - 1
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((current) => (current === maxIndex ? 0 : current + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((current) => (current === 0 ? maxIndex : current - 1))
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  return (
    <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ width: `${services.length * 100}%` }}
      >
        {services.map((serviceCategory, index) => (
          <div key={index} className="w-full px-4" style={{ flex: `0 0 ${100 / services.length}%` }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-light">{serviceCategory.category}</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {serviceCategory.items.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="overflow-hidden border-emerald-100 hover:border-emerald-300 transition-colors"
                >
                  <CardContent className="p-6">
                    <h4 className="text-xl font-medium mb-2">{service.name}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
              {serviceCategory.items.length < 3 &&
                [...Array(3 - serviceCategory.items.length)].map((_, i) => (
                  <div key={i} className="hidden lg:block"></div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-emerald-100 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-emerald-100 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>

      <div className="flex justify-center mt-6 gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-emerald-700" : "bg-emerald-200"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

