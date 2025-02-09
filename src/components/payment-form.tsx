"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StepIndicator } from "./step-indicator"

export function PaymentForm({ onNext }: { onNext: () => void }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-4 sm:py-8">
      <StepIndicator currentStep={2} steps={3} />

      <h2 className="mt-4 sm:mt-8 text-2xl sm:text-3xl font-bold text-white">Payment Details</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          onNext()
        }}
        className="mt-4 sm:mt-8 space-y-4 sm:space-y-6"
      >
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Name on Card</label>
          <Input placeholder="Alfonso Delarosa" className="bg-transparent text-white h-12" />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Card Number</label>
          <Input placeholder="1220-1289-9981-2987" className="bg-transparent text-white h-12" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Month</label>
            <Input placeholder="07" className="bg-transparent text-white h-12" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Year</label>
            <Input placeholder="2021" className="bg-transparent text-white h-12" />
          </div>
          <div className="space-y-2 col-span-2 sm:col-span-1">
            <label className="text-sm text-gray-400">CVV</label>
            <Input placeholder="520" type="password" className="bg-transparent text-white h-12" />
          </div>
        </div>

        <Button type="submit" className="mt-6 sm:mt-8 w-full bg-[#132120] text-emerald-400 rounded-full h-12 text-lg">
          Pay
        </Button>
      </form>
    </div>
  )
}

