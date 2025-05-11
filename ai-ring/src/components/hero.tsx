'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import ring from '../assets/images/ring.png'
import feature1 from '../assets/images/Feature Card (3).png'
import feature2 from '../assets/images/Feature Card (4).png'

import line1 from '../assets/images/Slider (1).png'
import line2 from '../assets/images/Slider.png'
import title from '../assets/images/Hero Text.png'
import { useCart } from './cart-provider'

export function Hero() {
  const { dispatch } = useCart()

  return (
    <section className="relative min-h-screen overflow-hidden" id="about">
      <div className="absolute inset-0">
        <div
          className="absolute right-0 top-[19rem] h-[500px] w-[800px] opacity-90"
          style={{
            background:
              'radial-gradient(50% 40% at 50% 50%, #7AFFA2 30%, #27938A 60.12% ,rgba(39, 147, 138, 0.00) 100%)',
            filter: 'blur(120px)',
            transform: 'translate(20%, -20%)',
          }}
        />
      </div>

      <div className="container relative flex min-h-screen flex-col items-center gap-10 py-12 lg:flex-row">
        {/* Feature Cards for mobile screen */}
        <div className="relative h-full  items-center justify-center md:hidden ">
          {/* Feature Cards */}
         
          <div className="absolute right-0   bottom-0  z-20">
            <img src={feature2} alt="Feature Card" className=" w-40 " />
            <img
              src={line2}
              alt="Connection Line"
              className="absolute left-[5rem] top-[2rem] -translate-x-1/2 -translate-y-full transform"
            />
          </div>

         

          {/* Ring Image*/}
          <img
            src={ring || '/placeholder.svg'}
            alt="AI Ring"
            className="relative  -top-[5rem]  z-10 h-[450px] w-[500px] object-contain"
          />
        </div>

        {/* Left Column - Text Content */}

        <div className="space-y-6 text-white">
          <div className="-top-15 left-0 hidden w-full select-none place-items-center text-center uppercase md:absolute md:grid lg:top-[70px]">
           
            <img src={title} className="-ml-10  w-full " />
          </div>
          <h2 className="text-4xl font-light leading-tight tracking-wide md:text-5xl  ">
            The Future Of
            <br />
            Health Is Here.
          </h2>
          <p className="max-w-md text-lg text-gray-400">
            Step into the next era of life with an AI-powered ring that
            understands you better than you do.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-b from-[#24DBc9] to-[#278079] text-black"
              onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
            >
              Buy Now
            </Button>
            <a
              href="#how-it-works"
              className="flex flex-row items-center border-white text-white underline"
            >
              How it works
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right Column - Ring Visualization */}
        <div className="relative aspect-square  h-screen w-3/4 hidden md:block">
          {/* Grid Overlay */}
          <div className="absolute inset-0   grid-cols-3 grid-rows-3 grid">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>

          {/* Ring Image and Features for desktop screen */}
          <div className="relative hidden  h-full items-center justify-center md:flex">
            {/* Feature Cards */}
            <div className="absolute right-[53%] top-[45%] z-20">
              <img
                src={feature1 || '/placeholder.svg'}
                alt="Feature Card"
                className="w-64 "
              />
              <img
                src={line1 || '/placeholder.svg'}
                alt="Connection Line"
                className="absolute bottom-[5rem] left-[1.5rem] right-0  translate-x-1/2 translate-y-full transform"
              />
            </div>

            <div className="absolute -right-4  bottom-[5%]  z-20">
              <img src={feature2} alt="Feature Card" className="-mt-4 w-64 " />
              <img
                src={line2}
                alt="Connection Line"
                className="absolute left-[6rem] top-1 -translate-x-1/2 -translate-y-full transform"
              />
            </div>

            {/* Ring Image*/}
            <img
              src={ring || '/placeholder.svg'}
              alt="AI Ring"
              className="relative left-[12rem] right-0 top-4 z-10 h-[450px] w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
