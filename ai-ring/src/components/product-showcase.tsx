"use client";

// import { useState } from "react";
import { Button } from "@/components/ui/button";
// import ring from "@/assets/images/ring.png";
// import {  RingSize,  RingColor, useCart } from "./cart-provider";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const product = {
//   id: "health-ring",
//   name: "Health Ring",
//     price: "31.99",
//   image: ring,
// };

export function ProductShowcase() {
  // const { state, dispatch } = useCart();
  // const [selectedSize, setSelectedSize] = useState<RingSize>(state.items[0]?.size || "7");
  // const [selectedColor, setSelectedColor] = useState<RingColor>(state.items[0]?.color || "black");

  // const handleBuyNow = () => {
  //   // Update existing item or add new one
  //   const existingItem = state.items.find(item => item.name === product.name);
    
  //   if (existingItem) {
  //     // Update existing item
  //     dispatch({
  //       type: "UPDATE_SIZE",
  //       payload: { id: existingItem.id, size: selectedSize },
  //     });
  //     dispatch({
  //       type: "UPDATE_COLOR",
  //       payload: { id: existingItem.id, color: selectedColor },
  //     });
  //   } else {
  //     // Add new item
  //     dispatch({
  //       type: "ADD_ITEM",
  //       payload: {
  //         id: product.id,
  //         name: product.name,
  //         price: parseFloat(product.price),
  //         size: selectedSize,
  //         color: selectedColor,
  //         quantity: 1,
  //         image: product.image,
  //       },
  //     });
  //   }
  //   // Open cart sidebar
  //   dispatch({ type: "TOGGLE_SIDEBAR" });
  // };

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
        <div className="grid  gap-6 items-stretch max-w-6xl mx-auto">
          {/* Play Button Card */}
          <div className="h-[500px]  rounded-2xl backdrop-blur-sm flex items-center justify-center group cursor-pointer transition-all duration-300 overflow-hidden">
            <div className="relative w-full h-full">
            <video
              src="https://res.cloudinary.com/dfzcr2ch4/video/upload/v1738779267/Healthring_AI_wvwvbq.mp4"
              controls
                className="absolute inset-0 w-full h-full object-contain bg-black/50"
                playsInline
            />
            </div>
          </div>

          {/* Product Card */}
          {/* <div className="h-[500px] bg-[#011614] rounded-2xl p-8 relative overflow-hidden border border-emerald-400/20">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/10 to-transparent" />
            <div className="relative h-full flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-2xl text-white">{product.name}</p>
                <p className="text-sm text-gray-400">Join the future with HealthAI Ring</p>
                {/* Dropdowns 
                <div className="flex gap-4">
                  {/* Ring Size Dropdown 
                  <div className="flex-1">
                    <label className="text-sm text-gray-400 block mb-2">Size</label>
                    <Select 
                      value={selectedSize} 
                      onValueChange={(value: RingSize) => {
                        setSelectedSize(value);
                        if (state.items[0]) {
                          dispatch({
                            type: "UPDATE_SIZE",
                            payload: { id: state.items[0].id, size: value },
                          });
                        }
                      }}
                    >
                      <SelectTrigger className="w-full bg-transparent text-white border-emerald-400/30 hover:border-emerald-400 transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#132120] border border-emerald-400/30">
                        {RING_SIZES.map((size) => (
                          <SelectItem 
                            key={size} 
                            value={size}
                            className="text-white hover:bg-emerald-400/10 focus:bg-emerald-400/10 focus:text-white"
                          >
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  {/* Color Dropdown 
                  <div className="flex-1">
                    <label className="text-sm text-gray-400 block mb-2">Color</label>
                    <Select 
                      value={selectedColor} 
                      onValueChange={(value: RingColor) => {
                        setSelectedColor(value);
                        if (state.items[0]) {
                          dispatch({
                            type: "UPDATE_COLOR",
                            payload: { id: state.items[0].id, color: value },
                          });
                        }
                      }}
                    >
                      <SelectTrigger className="w-full bg-transparent text-white border-emerald-400/30 hover:border-emerald-400 transition-colors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#132120] border border-emerald-400/30">
                        {RING_COLORS.map((color) => (
                          <SelectItem 
                            key={color} 
                            value={color}
                            className="text-white hover:bg-emerald-400/10 focus:bg-emerald-400/10 focus:text-white"
                          >
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="relative w-48 h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain"
                  />
                </div>
                <div className="text-right space-y-4">
                  <p className="text-3xl font-bold text-white">${product.price}</p>
                  <Button 
                    className="bg-emerald-400 hover:bg-emerald-500 text-black"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
