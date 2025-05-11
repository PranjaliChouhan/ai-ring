"use client"

import { Store, ChevronLeft, ChevronRight, Trash2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheets"
import { useCart, RING_SIZES, RingSize, RING_COLORS, RingColor } from "./cart-provider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CartSheet() {
  const navigate = useNavigate()
  const { state, dispatch } = useCart()

  return (
    <Sheet 
      open={state.isSidebarOpen} 
      onOpenChange={(open) => dispatch({ type: open ? "TOGGLE_SIDEBAR" : "CLOSE_SIDEBAR" })}
    >
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
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">List</h3>
          <div className="mt-4 space-y-6">
            {state.items.length > 0 ? (
              state.items.map((item) => (
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
                    <div className="space-y-2 mt-1">
                      {/* Size Dropdown */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Size:</span>
                        <Select
                          value={item.size}
                          onValueChange={(value: RingSize) =>
                            dispatch({
                              type: "UPDATE_SIZE",
                              payload: { id: item.id, size: value },
                            })
                          }
                        >
                          <SelectTrigger className="w-20 bg-transparent text-white border-emerald-400/30 hover:border-emerald-400 transition-colors">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-[#011614] border border-emerald-400/30">
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

                      {/* Color Dropdown */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">Color:</span>
                        <Select
                          value={item.color}
                          onValueChange={(value: RingColor) =>
                            dispatch({
                              type: "UPDATE_COLOR",
                              payload: { id: item.id, color: value },
                            })
                          }
                        >
                          <SelectTrigger className="w-24 bg-transparent text-white border-emerald-400/30 hover:border-emerald-400 transition-colors">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-[#011614] border border-emerald-400/30">
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
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full border-emerald-400/30 text-black"
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              payload: { id: item.id, quantity: item.quantity - 1 },
                            })
                          }
                        }}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center text-white">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full border-emerald-400/30 text-black"
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QUANTITY",
                            payload: { id: item.id, quantity: item.quantity + 1 },
                          })
                        }
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      <span className="ml-auto text-white">${item.price.toFixed(2)}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:text-red-500"
                        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )) 
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <p className="text-white mb-4">Your cart is empty</p>
                <Button 
                  className="bg-gradient-to-b from-[#24DBc9] to-[#278079] text-black rounded-full"
                  onClick={() => {
                    // Add default Health Ring back to cart
                    dispatch({ 
                      type: "ADD_ITEM", 
                      payload: {
                        id: "1",
                        name: "Health Ring",
                        price: 31.99,
                        size: "7",
                        color: "black",
                        quantity: 1,
                        image: "/src/assets/images/ring.png"
                      }
                    });
                  }}
                >
                  Add Health Ring
                </Button>
              </div>
            )}
          </div>

          {state.items.length > 0 && (
            <>
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
                    <span>${state.subtotal.toFixed(2)}</span>
                  </div>
                  {/* <div className="flex justify-between text-white">
                    <span>Tax</span>
                    <span>${state.tax.toFixed(2)}</span>
                  </div> */}
                  {/* <div className="flex justify-between text-white">
                    <span>Shipping</span>
                    <span>${state.shipping}</span>
                  </div> */}
                  <div className="flex justify-between text-lg font-semibold text-white">
                    <span>Total</span>
                    <span>${state.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4 flex flex-row justify-between">
                  <button
                    className="w-full text-white text-sm underline mt-2 -ml-10" 
                    onClick={() => dispatch({ type: "CLOSE_SIDEBAR" })}
                  >
                    Continue Shopping
                  </button>
                  <Button
                    className="bg-gradient-to-b from-[#24DBc9] to-[#278079] text-black rounded-full"
                    onClick={() => {
                      dispatch({ type: "CLOSE_SIDEBAR" })
                      navigate("/checkout")
                    }}
                  >
                    Checkout
                    <div className="bg-white rounded-full p-1 my-2 ml-2">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

