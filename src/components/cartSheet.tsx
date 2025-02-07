"use client"

import { X, Store, ChevronLeft, ChevronRight, Trash2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom'
import ring from "../assets/images/ring.png"
import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheets"

interface CartItem {
  id: string
  name: string
  size: string
  price: number
  quantity: number
  image: string
}

export function CartSheet() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "T-shirt Uniqlu - Black Stone",
      size: "M",
      price: 32,
      quantity: 1,
      image: ring,
    },
    {
      id: "2",
      name: "Uniqlu Chino Pants - Black Stone",
      size: "S",
      price: 124,
      quantity: 1,
      image: ring,
    },
  ])

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const shipping = 27
  const total = subtotal + tax + shipping

  const updateQuantity = (id: string, delta: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta)
          return { ...item, quantity: newQuantity }
        }
        return item
      }),
    )
  }

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="bg-gradient-to-b from-[#24DBc9] to-[#278079] text-black rounded-full">
          <Store className="mr-2 h-4 w-4" />
          Shop
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:max-w-[400px] bg-[#011614] border-l border-white/10">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold text-white flex justify-between items-center">
            YOUR CART
            <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">List</h3>
          <div className="mt-4 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-white">{item.name}</h4>
                  <p className="text-sm text-gray-400">Size: {item.size}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full border-emerald-400/30 text-black"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center text-white">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full border-emerald-400/30 text-black"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <span className="ml-auto text-white">${item.price}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2">
              <Input placeholder="Discount Code" className="bg-transparent text-white border-emerald-400/30" />
              <Button variant="outline" className="border-emerald-400 text-emerald-400">
                Apply
              </Button>
            </div>

            <div className="mt-8 space-y-2">
              <div className="flex justify-between text-white">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Shipping</span>
                <span>${shipping}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 space-y-4 flex flex-row justify-between">
            <button
               
               className="w-full  text-white text-sm underline mt-2 -ml-10" 
               onClick={() => setIsOpen(false)}
             >
               Continue Shopping
             </button>
              <Button
                className=" bg-gradient-to-b from-[#24DBc9] to-[#278079] text-black rounded-full  "
                onClick={() => {
                  setIsOpen(false)
                  navigate("/checkout")
                }}
              >
                
            
                Checkout
                <div className="bg-white rounded-full p-1 my-2 ml-2">
                <ArrowRight className="h-4 w-4 " />
                
              </div>
              </Button>
             
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

