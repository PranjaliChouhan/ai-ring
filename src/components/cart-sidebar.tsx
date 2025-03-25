"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "./cart-provider"



export function CartSidebar() {
  const { state, dispatch } = useCart()
  


  return (
    <div className="fixed right-0 top-0 h-screen w-[400px] border-l border-white/10 bg- p-6 backdrop-blur bg-[#132120] ">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">YOUR CART</h2>
        {/* <Button variant="ghost" size="icon" className="text-white" onClick={() => dispatch({ type: "CLOSE_SIDEBAR" })}>
          <X className="h-6 w-6" />
        </Button> */}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-white">List</h3>
        <div className="mt-4 space-y-6">
          {state.items.map((item) => (
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
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({
                          type: "UPDATE_QUANTITY",
                          payload: { id: item.id, quantity: item.quantity - 1 },
                        })
                      }
                    }}
                  >
                    -
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
                    +
                  </Button>
                  <span className="ml-auto text-white">${item.price}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white"
                    onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2">
            <Input placeholder="Discount Code" className="bg-transparent text-white" />
            <Button variant="outline" className="border-emerald-400 text-emerald-400">
              Apply
            </Button>
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex justify-between text-white">
              <span>Subtotal</span>
              <span>${state.subtotal}</span>
            </div>
            {/* <div className="flex justify-between text-white">
              <span>Tax</span>
              <span>${state.tax}</span>
            </div> */}
            {/* <div className="flex justify-between text-white">
              <span>Shipping</span>
              <span>${state.shipping}</span>
            </div> */}
            {/* <div className="flex justify-between text-lg font-semibold text-white">
              <span>Total</span>
              <span>${state.total}</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

