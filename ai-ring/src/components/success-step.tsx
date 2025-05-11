"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import confetti from "canvas-confetti"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

// interface SuccessStepProps {
//   onBack: () => void
// }

export function SuccessStep() {
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    // Trigger confetti animation
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      // Since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container max-w-2xl py-24">
      <div className="text-center space-y-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-400/20">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Payment Successful!</h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Thank you for your purchase. Your order has been processed and will be shipped soon.
          </p>
        </div>

        <div className="flex justify-center gap-4">
        <Button onClick={() => navigate("/")} className="bg-emerald-400 hover:bg-emerald-500 text-black gap-2">
      <ArrowLeft className="w-4 h-4" />
      Back to Home
    </Button>
        </div>

        <div className="pt-8">
         
        </div>
      </div>
    </div>
  )
}

