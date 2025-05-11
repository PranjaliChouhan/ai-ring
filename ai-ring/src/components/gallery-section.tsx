"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import gallery images
import image1 from "../assets/images/gallery/HealthRing 7.webp"
import image2 from "../assets/images/gallery/HealthRing 2-1.webp"
import image3 from "../assets/images/gallery/HealthRing 2-6.webp"
import image4 from "../assets/images/gallery/HealthRing 5.webp"
import image5 from "../assets/images/gallery/HealthRing 2.webp"

const galleryImages = [
  { 
    src: image1, 
    alt: "HealthRing fitness tracking", 
    caption: "Revolutionary health monitoring" 
  },
  { 
    src: image2, 
    alt: "HealthRing lifestyle", 
    caption: "Elegant design meets advanced technology" 
  },
  { 
    src: image3, 
    alt: "HealthRing active use", 
    caption: "Track your activity in real-time" 
  },
  { 
    src: image4, 
    alt: "HealthRing close-up", 
    caption: "Premium materials for ultimate comfort" 
  },
  { 
    src: image5, 
    alt: "HealthRing on hand", 
    caption: "Seamlessly integrate with your lifestyle" 
  }
]

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1))
  }

  return (
    <section className="py-24 relative overflow-hidden " id="gallery">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: "radial-gradient(circle at bottom right, rgba(122, 255, 162, 0.2), transparent 50%)",
        }}
      />

      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4">
            Experience the<br className="hidden sm:block" /> <span className="text-emerald-400">HealthRing</span>
          </h2>
          <p className="text-white text-lg md:text-xl">
            Discover the perfect blend of technology and design
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20 shadow-xl shadow-emerald-900/20 max-w-5xl mx-auto bg-black/50">
          {/* Featured Image */}
          <div className="relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p className="text-white text-xl font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white hover:bg-emerald-400/20 hover:border-emerald-400/30"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 text-white hover:bg-emerald-400/20 hover:border-emerald-400/30"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? "bg-emerald-400 w-8" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Preview */}
        <div className="mt-6 flex justify-center space-x-2 overflow-x-auto py-2 px-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === activeIndex 
                  ? "border-emerald-400 scale-110" 
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center bg-black">
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
} 