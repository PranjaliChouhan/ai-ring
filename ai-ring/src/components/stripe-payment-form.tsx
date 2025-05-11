import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';

interface StripePaymentFormProps {
  clientSecret: string | null;
  isLoading: boolean;
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export const StripePaymentForm = ({ 
  clientSecret, 
  isLoading, 
  onSuccess, 
  onError 
}: StripePaymentFormProps) => {
  const [stripe, setStripe] = useState<any>(null);
  const [elements, setElements] = useState<any>(null);
  const [cardError, setCardError] = useState<string | null>(null);
  const [cardComplete, setCardComplete] = useState(false);
  const cardElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Stripe
    if (clientSecret && cardElementRef.current) {
      const loadStripeJs = async () => {
        try {
          const stripeJs = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
          
          if (stripeJs) {
            setStripe(stripeJs);
            const elementsInstance = stripeJs.elements({ clientSecret });
            setElements(elementsInstance);
            
            // Mount card element
            const cardElement = elementsInstance.create('card', {
              style: {
                base: {
                  color: '#ffffff',
                  fontFamily: '"Inter", sans-serif',
                  fontSmoothing: 'antialiased',
                  fontSize: '16px',
                  '::placeholder': {
                    color: '#aab7c4'
                  }
                },
                invalid: {
                  color: '#fa755a',
                  iconColor: '#fa755a'
                }
              }
            });
            
            cardElement.mount(cardElementRef.current);
            
            // Handle real-time validation errors
            cardElement.on('change', (event: any) => {
              setCardError(event.error ? event.error.message : null);
              setCardComplete(event.complete);
            });
          }
        } catch (error) {
          console.error('Error loading Stripe:', error);
          onError(error instanceof Error ? error : new Error('Failed to load Stripe'));
        }
      };
      
      loadStripeJs();
      
      // Cleanup function
      return () => {
        if (elements) {
          const cardElement = elements.getElement('card');
          if (cardElement) {
            cardElement.unmount();
          }
        }
      };
    }
  }, [clientSecret, onError, cardElementRef.current]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!stripe || !elements || !cardComplete) {
      return;
    }
    
    try {
      const cardElement = elements.getElement('card');
      
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            // You can collect billing details here if you need to
            name: 'Health Ring Customer',
          },
        }
      });
      
      if (error) {
        setCardError(error.message || 'An error occurred during payment');
        onError(new Error(error.message || 'Payment failed'));
      } else if (paymentIntent.status === 'succeeded') {
        onSuccess();
      } else {
        setCardError('Payment processing failed. Please try again.');
        onError(new Error('Payment processing failed'));
      }
    } catch (error) {
      console.error('Payment submission error:', error);
      setCardError('An unexpected error occurred');
      onError(error instanceof Error ? error : new Error('Payment submission failed'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-[#132120] p-4 rounded-lg">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Card Details
        </label>
        <div 
          ref={cardElementRef}
          className="p-3 border border-gray-600 rounded-md bg-[#1E3131] min-h-[40px]"
        />
        {cardError && (
          <div className="text-red-500 text-sm mt-1">{cardError}</div>
        )}
      </div>
      
      <Button
        type="submit"
        disabled={isLoading || !cardComplete || !stripe}
        className="bg-emerald-600 text-white w-full py-3 rounded-md"
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </Button>
    </form>
  );
};

// Helper function to load Stripe
const loadStripe = async (publishableKey: string) => {
  if (!publishableKey) {
    throw new Error('Stripe publishable key is required');
  }
  
  if (window.Stripe) {
    return window.Stripe(publishableKey);
  }
  
  const script = document.createElement('script');
  script.src = 'https://js.stripe.com/v3/';
  script.async = true;
  
  const loadPromise = new Promise((resolve, reject) => {
    script.onload = () => {
      if (window.Stripe) {
        resolve(window.Stripe(publishableKey));
      } else {
        reject(new Error('Stripe.js failed to load'));
      }
    };
    script.onerror = () => reject(new Error('Failed to load Stripe.js'));
  });
  
  document.head.appendChild(script);
  return loadPromise;
};

// Add Stripe to Window interface
declare global {
  interface Window {
    Stripe?: (key: string) => any;
  }
} 