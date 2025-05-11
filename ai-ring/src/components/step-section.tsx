"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useCart } from "./cart-provider"

const steps = [
  {
    number: "1",
    title: "Purchase your Healthring in our shop.",
    description: "Purchase your Healthring in our shop.",
    action: "cart"
  },
  {
    number: "2",
    title: "Download the Healthring app on your mobile device.",
    description: "Download the Healthring app on your mobile device.",
    action: "app"
  },
  {
    number: "3",
    title: "Connect the Healthring to your app and enjoy!",
    description: "Connect the Healthring to your app and enjoy!",
    action: "faq"
  },
]

export function StepsSection() {
  const { dispatch } = useCart();

  const handleStepClick = (action: string) => {
    switch (action) {
      case "cart":
        dispatch({ type: "TOGGLE_SIDEBAR" });
        break;
      case "app":
        window.open("https://apps.apple.com/pk/app/qring/id6473672621", "_blank");
        break;
      case "faq":
        document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <section 
      className="relative py-16 md:py-24 overflow-hidden min-h-screen md:h-auto" 
      id="how-it-works"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 m-auto w-[250px] md:w-[300px] h-[180px] md:h-[200px] top-[30%] md:top-[20rem]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, #27938A 0%, #7AFFA2 80.12%, rgba(39, 147, 138, 0.00) 70%)",
          filter: "blur(120px)",
        }}
      />
         
      <div className="container relative">
        {/* Header */}
        <div className="mb-10 md:mb-16 space-y-6">
          <Button variant="outline" className="border-emerald-400/30 text-emerald-400 bg-emerald-400/10 rounded-full">
            Start Now
          </Button>
          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your Journey<br />
            <span className="text-emerald-400">Starts Here</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => handleStepClick(step.action)}
              className="group relative p-6 md:p-8 mb-4 md:mb-0 rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-emerald-400/10 to-transparent backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/20 cursor-pointer"
            >
              <div className="space-y-3 md:space-y-4">
                <p className="text-xl md:text-2xl font-light text-white">Step {step.number}</p>
                <p className="text-base md:text-lg text-gray-400">{step.title}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-emerald-400/30 bg-transparent text-emerald-400 hover:bg-emerald-400 hover:text-black transition-all duration-300"
                >
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

