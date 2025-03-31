"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "WHERE BEAUTY BEGINS AT THE ROOTS",
    subtitle: "Welcome to Redwood K-Wellness",
    description:
      "Discover our natural, science-backed approaches for healthy hair and scalp wellness.",
    image: "/images/massage-1.jpg",
    cta: {
      text: "Book an Appointment",
      link: "#book",
    },
  },
  {
    id: 2,
    title: "PREMIUM SCALP TREATMENTS",
    subtitle: "Expert Hair Care",
    description:
      "Our founders have traveled the world, studying ancient and modern hair care techniques to bring you the most effective treatments.",
    image: "/images/massage-2.jpg",
    cta: {
      text: "Explore Services",
      link: "#services",
    },
  },
  {
    id: 3,
    title: "ALWAYS MAKE ROOM FOR A LITTLE BEAUTY IN YOUR LIFE",
    subtitle: "Special Occasion Packages",
    description:
      "Treat yourself to our luxury treatments designed for those special moments when you deserve to look and feel your best.",
    image: "/images/massage-1.jpg",

    cta: {
      text: "View Packages",
      link: "#packages",
    },
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      scale: 1.1,
      rotate: direction > 0 ? 1 : -1,
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      zIndex: 1,
      transition: {
        scale: { duration: 0.8 },
        rotate: { duration: 0.8 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      scale: 1.1,
      rotate: direction > 0 ? -1 : 1,
      opacity: 0,
      zIndex: 0,
      transition: {
        scale: { duration: 0.8 },
        rotate: { duration: 0.8 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoplay();
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    resetAutoplay();
  };

  const resetAutoplay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 6000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        {slides.map(
          (slide, index) =>
            index === currentIndex && (
              <motion.div
                key={slide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-bodyBg/50 z-10" />
                <div className="relative h-full w-full">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="container text-center text-white-color space-y-6 px-4">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-white  text-xl md:text-2xl font-light uppercase tracking-widest mb-4 font-secondary"
                    >
                      {slide.subtitle}
                    </motion.h3>
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-white text-4xl md:text-6xl lg:text-7xl font-primary font-light tracking-wide leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      className="text-white  max-w-2xl mx-auto text-lg opacity-90 font-secondary color-white"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="pt-8"
                    >
                      <Link
                        href={slide.cta.link}
                        className="bg-primaryCustom hover:bg-primaryCustom/90 text-white-color px-8 py-4 text-sm uppercase tracking-wider transition-colors inline-block font-secondary"
                      >
                        {slide.cta.text}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white-color/20 hover:bg-white-color/40 text-white-color p-3 rounded-full z-30 transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous</span>
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white-color/20 hover:bg-white-color/40 text-white-color p-3 rounded-full z-30 transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next</span>
      </button>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-primaryCustom" : "bg-white-color/50"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
              resetAutoplay();
            }}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
