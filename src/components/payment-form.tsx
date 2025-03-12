"use client"

import { Button } from "@/components/ui/button"
import { StepIndicator } from "./step-indicator"

interface PaymentFormProps {
  isLoading?: boolean;
  error?: string | null;
  setError: (error: string | null) => void;
  amount: number;
}

export const PaymentForm = ({ isLoading, error, setError, amount }: PaymentFormProps) => {
  const handlePayment = async () => {
    try {
      const response = await fetch('https://lobby-api-prod.magiccraft.io/payment/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          line_items: [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: 'Your Order',
                },
                unit_amount: amount * 100,
              },
              quantity: 1,
            },
          ],
          success_url: `${window.location.origin}/checkout?step=3`,
          cancel_url: `${window.location.origin}/checkout?step=2`,
        }),
      });

      const data = await response.json();
      
      if (!data.url) {
        throw new Error('No checkout URL received');
      }

      window.location.href = data.url;
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Failed to create checkout session');
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-4 sm:py-8">
      <StepIndicator currentStep={2} steps={3} />
      <h2 className="mt-4 sm:mt-8 text-2xl sm:text-3xl font-bold text-white">Payment Details</h2>
      
      {error && (
        <div className="text-red-500 text-sm mt-4">{error}</div>
      )}

      <Button 
        onClick={handlePayment}
        className="mt-6 sm:mt-8 w-full bg-[#132120] text-emerald-400 rounded-full h-12 text-lg"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Proceed to Payment'}
      </Button>
    </div>
  )
}

