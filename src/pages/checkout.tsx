"use client"

import { useCart } from "@/components/cart-provider"
import { CartSidebar } from "@/components/cart-sidebar"
import { SuccessStep } from "@/components/success-step"
import { useState, useEffect } from "react"

function CheckoutContent() {
  const [step, setStep] = useState(2)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)
  const [renderError, setRenderError] = useState<string | null>(null)
  const { state } = useCart()
  const checkoutTotal = state.total;

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.location.search) {
        if (new URLSearchParams(window.location.search).get('step') === '3') {
          setStep(3);
        }
      }
    } catch (error) {
      console.error('Error in URL parameter parsing:', error);
      setRenderError('Error initializing checkout page');
    }
  }, []);

  const createCheckoutSession = async (amount: number) => {
    setCheckoutLoading(true)
    setCheckoutError(null)
    
    try {
      const response = await fetch('https://lobby-api-prod.magiccraft.io/payment/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency: 'usd',
          description: 'Your purchase',
          successUrl: `${window.location.origin}/checkout?step=3`,
          cancelUrl: `${window.location.origin}/checkout`,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const data = await response.json()
      
      // Redirect to Stripe Checkout
      window.location.href = data.url
    } catch (error) {
      console.error('Checkout session error:', error)
      setCheckoutError(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setCheckoutLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#072B27] to-[#335752] pb-10 md:pb-20">
      {renderError ? (
        <div className="container mx-auto px-4 py-6 text-white">
          <h2 className="text-lg font-bold">Error Loading Checkout</h2>
          <p className="mt-2">{renderError}</p>
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Payment Section */}
            <div className="w-full lg:w-2/3">
              {step === 2 && (
                <div className="p-4 bg-[#1A2928] rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold text-white mb-6">Complete Your Purchase</h2>
                  <button 
                    onClick={() => createCheckoutSession(checkoutTotal)}
                    className="bg-emerald-600 text-white px-4 py-4 rounded-md w-full text-base font-medium"
                    disabled={checkoutLoading}
                  >
                    {checkoutLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span>Pay ${checkoutTotal}</span>
                    )}
                  </button>
                  {checkoutError && (
                    <p className="text-red-500 mt-2 text-sm">{checkoutError}</p>
                  )}
                </div>
              )}
              {step === 3 && <SuccessStep />}
            </div>

            {/* Cart Sidebar for Desktop */}
            <div className="hidden lg:block lg:w-1/3">
              <CartSidebar />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function CheckoutPage() {
  return <CheckoutContent />
}

