
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ring from "../assets/images/ring.png"
import featuree from "../assets/images/Feature Card.png"
import line1 from "../assets/images/Slider (1).png"
import line2 from "../assets/images/Slider.png"
import title from "../assets/images/Hero Text.png"
export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" id="about">
      <div className="absolute inset-0">
        <div
          className="absolute right-0 top-[19rem] w-[800px] h-[500px] opacity-90"
          style={{
            background:
              "radial-gradient(50% 40% at 50% 50%, #7AFFA2 30%, #27938A 60.12% ,rgba(39, 147, 138, 0.00) 100%)",
            filter: "blur(120px)",
            transform: "translate(20%, -20%)",
          }}
        />
      </div>

      <div className="container relative flex lg:flex-row flex-col gap-10 items-center min-h-screen py-12">
        {/* Left Column - Text Content */}
        <div className="space-y-6 text-white">
        <div className="-top-15 left-0 hidden w-full select-none place-items-center text-center uppercase md:absolute md:grid lg:top-[70px]">
            {/* <p className="font-outline bg-gradient-to-b from-[#fff] to-transparent to-60% bg-clip-text text-[150px] font-bold tracking-tight text-transparent opacity-50 lg:text-[200px] font-michroma">
              AI RING
            </p> */}
            <img src={title} className="w-full  -ml-10 "/>
          </div>
          <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-wide  ">
            The Future Of
            <br />
            Health Is Here.
          </h2>
          <p className="text-lg text-gray-400 max-w-md">
            Step into the next era of life with an AI-powered ring that understands you better than you do.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-gradient-to-b from-[#24DBc9] to-[#278079] text-black rounded-full">
              Buy Now
            </Button>
            <a href="#how-it-works" className="text-white border-white flex flex-row items-center underline">
              How it works
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right Column - Ring Visualization */}
        <div className="relative aspect-square  h-screen w-3/4 ">
          {/* Grid Overlay */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 ">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>

          {/* Ring Image and Features */}
           <div className="relative h-full flex items-center justify-center">
            {/* Feature Cards */}
            <div className="absolute top-[45%] right-[53%] z-20">
              <img src={featuree || "/placeholder.svg"} alt="Feature Card" className="w-64 " />
              <img
                src={line1 || "/placeholder.svg"}
                alt="Connection Line"
                className="absolute bottom-[5rem] right-0 left-[1.5rem]  transform translate-x-1/2 translate-y-full"
              />
            </div>

            <div className="absolute bottom-[5%]  -right-4  z-20">
              <img src={featuree} alt="Feature Card" className="w-64 -mt-4 " />
              <img
                src={line2}
                alt="Connection Line"
                className="absolute top-1 left-[6rem] transform -translate-x-1/2 -translate-y-full"
              />
            </div>

            {/* Ring Image*/} 
            <img
              src={ring || "/placeholder.svg"}
              alt="AI Ring"
              className="relative z-10 w-[500px] h-[450px] object-contain right-0 left-[12rem] top-4"
            />
          </div> 
        </div>
      </div>
    </section>
  )
}




