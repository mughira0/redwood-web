"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/massage-7.jpg",
    alt: "Spa reception area",
  },
  {
    src: "/images/massage-8.jpg",

    alt: "Treatment room",
  },
  {
    src: "/images/massage-9.jpg",

    alt: "Relaxation lounge",
  },
  {
    src: "/images/massage-2.jpg",
    alt: "Product display",
  },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = galleryImages.length - 1;
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((current) => (current === maxIndex ? 0 : current + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((current) => (current === 0 ? maxIndex : current - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative overflow-hidden rounded-lg h-[400px]">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}

        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5 text-amber-800" />
          <span className="sr-only">Previous</span>
        </button>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5 text-amber-800" />
          <span className="sr-only">Next</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {galleryImages.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className="relative h-[190px] overflow-hidden rounded-lg cursor-pointer"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
              onClick={() => setCurrentIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
