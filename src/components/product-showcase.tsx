"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ring from "@/assets/images/ring.png";
const products = [
  {
    id: 1,
    name: "Perfection",
    price: "31.99",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-03%20162750-pVItmSNjsOIkMw5HwUJeuHmzkYLeBV.png",
  },
  // Add more products as needed
];

export function ProductShowcase() {
  const [activeIndex, ] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden " id="product">
      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <Button
            variant="outline"
            className="border-emerald-400/30 text-emerald-400 bg-emerald-400/10 rounded-full"
          >
            Product
          </Button>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Fast, Reliable, And
            <br />
            Durable.
          </h2>
        </div>

        {/* Product Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
          {/* Play Button Card */}
          <div className="h-[350px] bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center group cursor-pointer hover:bg-white/15 transition-all duration-300">
            <video
              src="https://res.cloudinary.com/dfzcr2ch4/video/upload/v1738779267/Healthring_AI_wvwvbq.mp4"
              controls
              className="rounded-lg object-cover h-full w-full"
            />
          </div>

          {/* Product Card */}
          <div className="h-[350px] bg-[#011614] rounded-2xl p-8 relative overflow-hidden border border-emerald-400/20">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/10 to-transparent" />
            <div className="relative h-full flex flex-col justify-between">
              <p className="text-2xl text-white">Perfection</p>
              <div className="flex items-end justify-between">
                <div className="relative w-48 h-48">
                  <img
                    src={ring}
                    alt="AI Ring"
                    className="object-contain"
                  />
                </div>
                <div className="text-right space-y-4">
                  <p className="text-3xl font-bold text-white">${products[activeIndex].price}</p>
                  <Button className="bg-emerald-400 hover:bg-emerald-500 text-black">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Cards */}
          {/* <div className="space-y-4">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="h-[175px] bg-white/10 rounded-2xl backdrop-blur-sm p-6 flex flex-col justify-between cursor-pointer hover:bg-white/15 transition-all duration-300"
              >
                <Globe className="h-6 w-6 text-emerald-400" />
                <p className="text-white text-xl">View</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
