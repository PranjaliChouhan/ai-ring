"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import ring from "@/assets/images/ring.png"

const slides = [
  {
    id: "01",
    text: "The AI system monitors moisture and heat, keeping you hydrated and healthy.",
  },
  {
    id: "02",
    text: "Tracks heart rate, oxygen levels, and sleep patterns, while offering real-time health insights.",
  },
  {
    id: "03",
    text: "Uses AI to provide personalized fitness and health recommendations.",
  },
  {
    id: "04",
    text: "Lightweight yet highly robust design. Easy-to-use dashboard for tracking health.",
  },
]



export function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative py-24 overflow-hidden " id="features">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Preview Card */}
          {/* <div className="aspect-[4/3] bg-neutral-200 rounded-2xl overflow-hidden relative group cursor-pointer">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-[#011614] text-emerald-400 hover:scale-110 transition-transform duration-300"
            >
              <Play className="h-8 w-8" />
            </Button>
          </div> */}
          <img src={ring}/>


          {/* Text Content */}
          <div className="space-y-8">
            <div className="rounded-full bg-[#072B27] text-white p-4 inline-flex border-[1px] border-[#24DBC9]" >Features</div>
            <div className="space-y-6">
              <p className="text-3xl text-white leading-relaxed">{slides[currentSlide].text}</p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-emerald-400/30 text-white bg-emerald-400/10"
                onClick={prevSlide}
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-emerald-400/30 text-white bg-emerald-400/10"
                onClick={nextSlide}
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

