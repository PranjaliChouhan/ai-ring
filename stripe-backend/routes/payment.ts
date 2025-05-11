import express, { Request, Response } from 'express';
import Stripe from 'stripe';

// Debug environment variables
console.log('In payment.ts - Environment variables:');
console.log('STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY);
console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY);

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY must be defined in environment variables');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

const router = express.Router();

// Create a payment intent
router.post('/create-payment-intent', async (req: Request, res: Response) => {
  try {
    const { amount, currency = 'usd', description, customerId, metadata = {} } = req.body;

    if (!amount) {
      return res.status(400).json({ error: 'Amount is required' });
    }

    // Validate amount is positive
    if (amount <= 0) {
      return res.status(400).json({ error: 'Amount must be greater than 0' });
    }

    const paymentIntentParams: Stripe.PaymentIntentCreateParams = {
      amount: Math.round(amount * 100), // Stripe expects amount in cents
      currency,
      description,
      metadata: {
        ...metadata,
        created_at: new Date().toISOString(),
      },
      // Optional automatic payment methods for better conversion
      automatic_payment_methods: { enabled: true },
    };

    // Add customer if provided
    if (customerId) {
      paymentIntentParams.customer = customerId;
    }

    const paymentIntent = await stripe.paymentIntents.create(paymentIntentParams);

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error: any) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ 
      error: 'Failed to create payment intent',
      message: error.message || 'Unknown error'
    });
  }
});

// Retrieve payment intent status
router.get('/payment-intent/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ error: 'Payment intent ID is required' });
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(id);
    res.status(200).json({ paymentIntent });
  } catch (error: any) {
    console.error('Error retrieving payment intent:', error);
    
    if (error.type === 'StripeInvalidRequestError') {
      return res.status(404).json({ error: 'Payment intent not found' });
    }
    
    res.status(500).json({ 
      error: 'Failed to retrieve payment intent',
      message: error.message || 'Unknown error'
    });
  }
});

// Cancel a payment intent
router.post('/cancel-payment-intent/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { cancellation_reason = 'requested_by_customer' } = req.body;
    
    if (!id) {
      return res.status(400).json({ error: 'Payment intent ID is required' });
    }

    const paymentIntent = await stripe.paymentIntents.cancel(id, {
      cancellation_reason: cancellation_reason as Stripe.PaymentIntentCancelParams.CancellationReason,
    });
    
    res.status(200).json({ success: true, paymentIntent });
  } catch (error: any) {
    console.error('Error canceling payment intent:', error);
    
    if (error.type === 'StripeInvalidRequestError') {
      if (error.message.includes('has a status of canceled')) {
        return res.status(400).json({ 
          error: 'Payment intent already canceled',
          message: error.message
        });
      }
      if (error.message.includes('cannot be canceled')) {
        return res.status(400).json({ 
          error: 'Payment intent cannot be canceled',
          message: 'This payment may have already been processed',
          details: error.message
        });
      }
      return res.status(404).json({ error: 'Payment intent not found' });
    }
    
    res.status(500).json({ 
      error: 'Failed to cancel payment intent',
      message: error.message || 'Unknown error'
    });
  }
});

// Get Stripe publishable key
router.get('/config', (req: Request, res: Response) => {
  if (!process.env.STRIPE_PUBLISHABLE_KEY) {
    return res.status(500).json({ error: 'Stripe publishable key is not configured' });
  }
  
  res.status(200).json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

// Create a customer
router.post('/create-customer', async (req: Request, res: Response) => {
  try {
    const { email, name, phone, metadata = {} } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Check if customer already exists
    const existingCustomers = await stripe.customers.list({
      email,
      limit: 1,
    });

    if (existingCustomers.data.length > 0) {
      // Return existing customer
      return res.status(200).json({ 
        customer: existingCustomers.data[0],
        isExisting: true
      });
    }

    // Create new customer
    const customer = await stripe.customers.create({
      email,
      name,
      phone,
      metadata: {
        ...metadata,
        created_at: new Date().toISOString(),
      },
    });

    res.status(201).json({ customer, isNew: true });
  } catch (error: any) {
    console.error('Error creating customer:', error);
    res.status(500).json({ 
      error: 'Failed to create customer',
      message: error.message || 'Unknown error'  
    });
  }
});

// Webhook to handle Stripe events
router.post('/webhook', express.raw({ type: 'application/json' }), async (req: Request, res: Response) => {
  try {
    const sig = req.headers['stripe-signature'];
    
    if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
      return res.status(400).json({ error: 'Webhook signature or secret is missing' });
    }

    let event;
    
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err: any) {
      console.error(`Webhook signature verification failed: ${err.message}`);
      return res.status(400).json({ error: `Webhook signature verification failed: ${err.message}` });
    }

    // Handle different event types
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`Payment succeeded: ${paymentIntent.id}`);
        // Here you would typically:
        // 1. Record the successful payment in your database
        // 2. Update order status
        // 3. Send confirmation email to customer
        // 4. Trigger fulfillment process
        break;
        
      case 'payment_intent.payment_failed':
        const failedPaymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`Payment failed: ${failedPaymentIntent.id}`);
        // Here you would typically:
        // 1. Update your database
        // 2. Notify the customer
        // 3. Trigger retry logic if appropriate
        break;
        
      case 'payment_intent.canceled':
        const canceledPaymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`Payment canceled: ${canceledPaymentIntent.id}`);
        // Handle cancelled payment
        break;
        
      case 'charge.refunded':
        const refund = event.data.object as Stripe.Charge;
        console.log(`Charge refunded: ${refund.id}`);
        // Handle refund
        break;
        
      case 'customer.created':
      case 'customer.updated':
        const customer = event.data.object as Stripe.Customer;
        console.log(`Customer ${event.type}: ${customer.id}`);
        // Update customer information in your database
        break;
        
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ 
      error: 'Webhook error',
      message: error.message || 'Unknown error'
    });
  }
});

// Get customer payment methods
router.get('/customer/:customerId/payment-methods', async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;
    
    if (!customerId) {
      return res.status(400).json({ error: 'Customer ID is required' });
    }
    
    // First verify the customer exists
    try {
      await stripe.customers.retrieve(customerId);
    } catch (error: any) {
      if (error.type === 'StripeInvalidRequestError') {
        return res.status(404).json({ error: 'Customer not found' });
      }
      throw error;
    }
    
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: 'card',
    });
    
    res.status(200).json({ paymentMethods: paymentMethods.data });
  } catch (error: any) {
    console.error('Error retrieving payment methods:', error);
    res.status(500).json({ 
      error: 'Failed to retrieve payment methods',
      message: error.message || 'Unknown error'
    });
  }
});

export default router; 