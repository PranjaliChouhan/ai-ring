import dotenv from 'dotenv';
// Load environment variables FIRST, before any other imports
dotenv.config();

import express from 'express';
import cors from 'cors';
import paymentRoutes from './routes/payment';

// Debug environment variables
console.log('Environment variables:');
console.log('STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY);
console.log('STRIPE_WEBHOOK_SECRET exists:', !!process.env.STRIPE_WEBHOOK_SECRET);
console.log('STRIPE_PUBLISHABLE_KEY exists:', !!process.env.STRIPE_PUBLISHABLE_KEY);
console.log('PORT:', process.env.PORT);
console.log('FRONTEND_URL:', process.env.FRONTEND_URL);

const app = express();
const port = process.env.PORT || 4000;

// For webhook endpoints which expect raw body
app.use((req, res, next) => {
  if (req.originalUrl === '/api/payment/webhook') {
    next();
  } else {
    express.json()(req, res, next);
  }
});

// Enable CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

// Routes
app.use('/api/payment', paymentRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server
app.listen(port, () => {
  console.log(`Stripe backend server is running on port ${port}`);
}); 