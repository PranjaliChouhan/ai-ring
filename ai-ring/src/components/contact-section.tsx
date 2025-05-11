"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function ContactSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:support@beehivelabs.io?subject=Question about Health Ring&body=Hello, I have a question about Health Ring.`
  }

  return (
    <section className="relative py-24 overflow-hidden" id="contact">
      {/* Glow Effect */}
     

      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="space-y-6 max-w-xl text-center lg:text-left">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white "
              
            >
              Do you have any questions?
            </h2>
            <p className="text-base md:text-lg text-gray-400">
              Feel free to send us your questions or request a free consultation.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-md z-10">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
              <Input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-[#011614]/80 border-emerald-400/30 text-white placeholder:text-gray-400 focus-visible:ring-emerald-400 rounded-full"
                required
              />
              <Button
                type="submit"
                className="h-12 bg-gradient-to-r from-[#24DBC9] to-[#278079] text-black font-medium px-8 rounded-full"
              >
                Get Started
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

