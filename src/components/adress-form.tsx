"use client"

import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { StepIndicator } from "./step-indicator"

export function AddressForm({ onNext }: { onNext: () => void }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-4 sm:py-8">
      <StepIndicator currentStep={1} steps={3} />

      <h2 className="mt-4 sm:mt-8 text-2xl sm:text-3xl font-bold text-white">Address</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          onNext()
        }}
        className="mt-4 sm:mt-8 space-y-4 sm:space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Country</label>
            <Input defaultValue="Ukraine" className="bg-transparent text-white h-12 w-full" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">City</label>
            <Input defaultValue="Kyiv" className="bg-transparent text-white h-12" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 space-y-2">
            <label className="text-sm text-gray-400">Street</label>
            <Input placeholder="Street Name" className="bg-transparent text-white h-12" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Number</label>
            <Input placeholder="Street Number" className="bg-transparent text-white h-12" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Postal Code</label>
            <Input defaultValue="65009" className="bg-transparent text-white h-12" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Phone Number</label>
            <Input defaultValue="+380641108423" className="bg-transparent text-white h-12" />
          </div>
        </div>

        <Button type="submit" className="mt-6 sm:mt-8 w-full bg-[#132120] text-emerald-400 rounded-full h-12 text-lg">
          To Payment
        </Button>
      </form>
    </div>
  )
}

