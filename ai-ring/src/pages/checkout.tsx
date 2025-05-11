'use client'

import { useCart } from '@/components/cart-provider'
import { CartSidebar } from '@/components/cart-sidebar'
import { SuccessStep } from '@/components/success-step'
import { useState, useEffect } from 'react'
import { StripePaymentForm } from '@/components/stripe-payment-form'

// Define the backend URL - this should be configured in your environment
const STRIPE_BACKEND_URL =
  import.meta.env.VITE_STRIPE_BACKEND_URL || 'http://localhost:4000'

function CheckoutContent() {
  const [step, setStep] = useState(2)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState<string | null>(null)
  const [renderError, setRenderError] = useState<string | null>(null)
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const { state } = useCart()
  const checkoutTotal = state.total

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.location.search) {
        if (new URLSearchParams(window.location.search).get('step') === '3') {
          setStep(3)
        }
      }
    } catch (error) {
      console.error('Error in URL parameter parsing:', error)
      setRenderError('Error initializing checkout page')
    }
  }, [])

  const createPaymentIntent = async () => {
    setCheckoutLoading(true)
    setCheckoutError(null)

    try {
      // Create a payment intent using our backend
      const apiUrl = `${STRIPE_BACKEND_URL}/api/payment/create-payment-intent`
      console.log('Creating payment intent at:', apiUrl)

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: checkoutTotal,
          currency: 'usd',
          description: 'HealthRing Purchase',
          metadata: {
            items: JSON.stringify(state.items),
          },
        }),
      })

      if (!response.ok) {
        let errorMessage = 'Failed to create payment session'
        try {
          const errorData = await response.json()
          errorMessage = errorData.message || errorData.error || errorMessage
        } catch (e) {
          console.error('Error parsing error response:', e)
        }
        throw new Error(errorMessage)
      }

      const data = await response.json()

      if (!data.clientSecret) {
        throw new Error('No client secret returned from the server')
      }

      setClientSecret(data.clientSecret)
      console.log('Payment intent created successfully')
    } catch (error) {
      console.error('Checkout session error:', error)
      setCheckoutError(
        error instanceof Error ? error.message : 'Something went wrong'
      )
    } finally {
      setCheckoutLoading(false)
    }
  }

  // Initialize payment intent when the page loads if we're on step 2
  useEffect(() => {
    if (step === 2 && checkoutTotal > 0 && !clientSecret) {
      createPaymentIntent()
    }
  }, [step, checkoutTotal])

  const handlePaymentSuccess = () => {
    setStep(3)
  }

  const handlePaymentError = (error: Error) => {
    setCheckoutError(error.message)
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
          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Payment Section */}
            <div className="w-full lg:w-2/3">
              {step === 2 && (
                <div className="rounded-lg bg-[#1A2928] p-4 shadow-lg">
                  <h2 className="mb-6 text-xl font-semibold text-white">
                    Complete Your Purchase
                  </h2>

                  {clientSecret ? (
                    <StripePaymentForm
                      clientSecret={clientSecret}
                      isLoading={checkoutLoading}
                      onSuccess={handlePaymentSuccess}
                      onError={handlePaymentError}
                    />
                  ) : checkoutLoading ? (
                    <div className="flex items-center justify-center py-6">
                      <svg
                        className="h-8 w-8 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span className="ml-2 text-white">
                        Initializing payment...
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={createPaymentIntent}
                      className="w-full rounded-md bg-emerald-600 px-4 py-4 text-base font-medium text-white"
                    >
                      Retry Payment Setup
                    </button>
                  )}

                  {checkoutError && (
                    <p className="mt-2 text-sm text-red-500">{checkoutError}</p>
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
