// Environment Configuration
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Database
  database: {
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production'
  },
  
  // Gmail
  gmail: {
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    redirectUrl: process.env.GMAIL_REDIRECT_URL || 'http://localhost:5000/api/auth/gmail/callback'
  },
  
  // Twilio WhatsApp
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    whatsappNumber: process.env.TWILIO_WHATSAPP_NUMBER
  },
  
  // Arch Retail Solutions
  archRetail: {
    apiKey: process.env.ARCH_RETAIL_API_KEY,
    apiUrl: process.env.ARCH_RETAIL_API_URL,
    endpoint: '/api/invoices'
  },
  
  // JWT
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
    expiresIn: '24h'
  },
  
  // Email
  email: {
    gmailUser: process.env.GMAIL_USER,
    gmailPassword: process.env.GMAIL_PASSWORD
  }
};
