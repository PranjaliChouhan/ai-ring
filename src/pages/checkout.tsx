"use client"

import { AddressForm } from "@/components/adress-form"
import { CartProvider } from "@/components/cart-provider"
import { CartSidebar } from "@/components/cart-sidebar"
import { PaymentForm } from "@/components/payment-form"
import { SuccessStep } from "@/components/success-step"
import { useState } from "react"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#072B27] to-[#335752] pb-20">
        <div className="lg:pr-[400px]">
          {step === 1 && <AddressForm onNext={() => setStep(2)} />}
          {step === 2 && <PaymentForm onNext={() => setStep(3)} />}
          {step === 3 && <SuccessStep  />}
        </div>
        <div className="hidden md:block">
        <CartSidebar />
        </div>
      </div>
    </CartProvider>
  )
}

