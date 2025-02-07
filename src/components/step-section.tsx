"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Get a ring",
    description: "Choose your perfect AI ring",
  },
  {
    number: "2",
    title: "Download and app",
    description: "Get our mobile application",
  },
  {
    number: "3",
    title: "Connect to your device and start",
    description: "Setup and start using your ring",
  },
]

export function StepsSection() {
  return (
    <section className="relative py-24 overflow-hidden h-screen">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 m-auto w-[300px] h-[200px] top-[20rem] "
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, #27938A 0%,  #7AFFA2  80.12% ,rgba(39, 147, 138, 0.00) 70%)",
          filter: "blur(120px)",
        }}
      />
       {/* <div
        className="absolute inset-0 max-w-[200px] mx-auto"
        style={{
          backdropFilter: "blur(215px)",
          background: "radial-gradient(267.56deg, rgba(39, 147, 138, 0.8) 45.04%, rgba(122, 255, 162, 0.8) 81.45%)",
        }}
      /> */}
         

      <div className="container relative">
        {/* Header */}
        <div className="mb-16 space-y-6">
          <Button variant="outline" className="border-emerald-400/30 text-emerald-400 bg-emerald-400/10 rounded-full">
            Start Now
          </Button>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Smart Tech,
            <br />
            Easy Use
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-emerald-400/10 to-transparent backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/20"
            >
              <div className="space-y-4">
                <p className="text-2xl font-light text-white">Step {step.number}</p>
                <p className="text-lg text-gray-400">{step.title}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full border border-emerald-400/30 bg-transparent text-emerald-400 hover:bg-emerald-400 hover:text-black transition-all duration-300"
                >
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

