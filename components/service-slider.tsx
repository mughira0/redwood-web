"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    name: "Sensitive Care",
    category: "Essential Package",
    description:
      "Gentle treatment for sensitive scalps, using mild, natural ingredients to soothe and nourish.",
    image: "/images/massage-3.jpg",
  },
  {
    name: "Detox Care",
    category: "Essential Package",
    description:
      "Deep cleansing treatment that removes buildup and impurities from the scalp and hair.",
    image: "/images/massage-4.jpg",
  },
  {
    name: "Root Rejuvenate",
    category: "Premium Package",
    description:
      "Advanced treatment targeting the hair follicles to stimulate growth and strengthen roots.",
    image: "/images/massage-5.jpg",
  },
  {
    name: "Pure Crown",
    category: "Premium Package",
    description:
      "Comprehensive scalp treatment that balances oils and restores natural pH levels.",
    image: "/images/massage-1.jpg",
  },
  {
    name: "Exclusive Retreat",
    category: "Special Occasion",
    description:
      "Luxurious, extended treatment session with personalized care for special events.",
    image: "/images/massage-2.jpg",
  },
];

export default function ServiceSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = services.length - 1;
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const visibleItems = 3;
  const totalSlides = Math.ceil(services.length / visibleItems);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((current) => {
      const nextIndex = current + visibleItems;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((current) => {
      const prevIndex = current - visibleItems;
      return prevIndex < 0
        ? Math.max(0, services.length - visibleItems)
        : prevIndex;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(nextSlide, 5000);
  };

  const handleManualNavigation = (direction: "next" | "prev") => {
    resetAutoPlay();
    if (direction === "next") {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  // Calculate visible services based on current index
  const visibleServices = services.slice(
    currentIndex,
    currentIndex + visibleItems
  );
  // If we don't have enough items to fill the slider, add from the beginning
  if (visibleServices.length < visibleItems) {
    visibleServices.push(
      ...services.slice(0, visibleItems - visibleServices.length)
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(0%)` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {visibleServices.map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-64 overflow-hidden mb-4">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-serif">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-amber-800 text-sm uppercase tracking-wider">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-serif mt-1 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 -ml-4"
        onClick={() => handleManualNavigation("prev")}
      >
        <ChevronLeft className="h-6 w-6 text-amber-800" />
        <span className="sr-only">Previous</span>
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 -mr-4"
        onClick={() => handleManualNavigation("next")}
      >
        <ChevronRight className="h-6 w-6 text-amber-800" />
        <span className="sr-only">Next</span>
      </button>

      <div className="flex justify-center mt-8 gap-2">
        {[...Array(totalSlides)].map((_, index) => {
          const slideIndex = index * visibleItems;
          const isActive =
            currentIndex === slideIndex ||
            (currentIndex > maxIndex - visibleItems &&
              index === 0 &&
              currentIndex ===
                maxIndex - (maxIndex % visibleItems) + visibleItems);

          return (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                isActive ? "bg-amber-800" : "bg-amber-200"
              }`}
              onClick={() => {
                resetAutoPlay();
                setCurrentIndex(slideIndex);
              }}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
