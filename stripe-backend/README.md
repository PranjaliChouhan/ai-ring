# Stripe Payment Backend

A backend server for handling Stripe payment integrations for the Healthring application.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=4000
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   FRONTEND_URL=http://localhost:3000
   ```

3. Get your Stripe API keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)

## Development

Run the development server:
```
npm run dev
```

## Build

Build the project:
```
npm run build
```

## API Endpoints

### Payment Intents
- `POST /api/payment/create-payment-intent` - Create a payment intent
  - Request body: `{ amount, currency, description, customerId }`
  - Response: `{ clientSecret }`

### Stripe Configuration
- `GET /api/payment/config` - Get Stripe publishable key
  - Response: `{ publishableKey }`

### Customers
- `POST /api/payment/create-customer` - Create a Stripe customer
  - Request body: `{ email, name }`
  - Response: `{ customer }`

### Webhooks
- `POST /api/payment/webhook` - Stripe webhook endpoint for event handling

### Health Check
- `GET /health` - Server health check endpoint

## Frontend Integration

In your frontend React application, you can use the [@stripe/react-stripe-js](https://www.npmjs.com/package/@stripe/react-stripe-js) package to integrate with this backend.

Example of creating a payment:

```javascript
// 1. Fetch the publishable key
const { publishableKey } = await fetch('/api/payment/config').then(r => r.json());

// 2. Initialize Stripe
const stripe = await loadStripe(publishableKey);

// 3. Create a payment intent
const { clientSecret } = await fetch('/api/payment/create-payment-intent', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ amount: 1999, currency: 'usd' }),
}).then(r => r.json());

// 4. Confirm the payment with the client secret
const { error } = await stripe.confirmCardPayment(clientSecret, {
  payment_method: {
    card: elements.getElement(CardElement),
    billing_details: { name: 'Customer Name' },
  },
});
``` 