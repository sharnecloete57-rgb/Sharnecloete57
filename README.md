# Order Management System

Automatic order extraction and management system from Email and WhatsApp, with real-time staff dashboard and Arch Retail Solutions integration.

## Features

✅ **Email Integration** - Automatically extract orders from Gmail  
✅ **WhatsApp Integration** - Receive orders via Twilio WhatsApp API  
✅ **Real-time Dashboard** - Staff dashboard to process orders  
✅ **Weight Tracking** - Input precise weights (e.g., 4.578kg)  
✅ **Stock Management** - Mark items as out of stock  
✅ **Auto Invoicing** - Send completed orders to Arch Retail Solutions  
✅ **Order Parsing** - Automatically parse "2x 500g, 250g, 1kg" format  

## System Architecture

```
Email/WhatsApp → Order Parser → Database → Staff Dashboard → Arch Retail
```

## Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/sharnecloete57-rgb/Sharnecloete57.git
cd Sharnecloete57
npm install
```

### 2. Environment Configuration
Create `.env` file:
```
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/orders_db
GMAIL_CLIENT_ID=your_gmail_client_id
GMAIL_CLIENT_SECRET=your_gmail_client_secret
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_WHATSAPP_NUMBER=+1234567890
ARCH_RETAIL_API_KEY=your_arch_retail_key
ARCH_RETAIL_API_URL=https://arch-retail-api.com
JWT_SECRET=your_secret_key
```

### 3. Database Setup
```bash
npm run db:migrate
```

### 4. Start Services
```bash
npm run dev
```

## API Endpoints

### Orders
- `GET /api/orders` - Get all pending orders
- `POST /api/orders` - Create order from email/WhatsApp
- `PATCH /api/orders/:id` - Update order status
- `POST /api/orders/:id/complete` - Mark order complete & send to Arch

### Items
- `POST /api/orders/:id/items` - Add item weights
- `PATCH /api/orders/:orderId/items/:itemId` - Update item details

### Inventory
- `GET /api/inventory` - Get inventory status
- `PATCH /api/inventory/:itemId` - Update stock levels

## Integration Flow

1. **Email Received** → Gmail API extracts order details
2. **WhatsApp Received** → Twilio webhook processes message
3. **Order Created** → Stored in PostgreSQL database
4. **Real-time Update** → WebSocket notifies dashboard
5. **Staff Processes** → Adds weights, marks stock status
6. **Completion** → Sends to Arch Retail Solutions API
7. **Invoice Generated** → Arch system creates invoice

## Configuration

### Gmail Setup
1. Go to Google Cloud Console
2. Enable Gmail API
3. Create OAuth 2.0 credentials
4. Download credentials JSON

### Twilio WhatsApp Setup
1. Create Twilio account
2. Activate WhatsApp Sandbox
3. Link your WhatsApp number
4. Configure webhook URL

### Arch Retail Integration
1. Get API credentials from Arch Retail Solutions
2. Add to `.env` file
3. Test connection via dashboard

## Database Schema

See `server/database/schema.sql` for complete database structure

## File Structure

```
├── server/
│   ├── index.js
│   ├── routes/
│   │   ├── orders.js
│   │   ├── items.js
│   │   └── inventory.js
│   ├── controllers/
│   │   ├── orderController.js
│   │   ├── emailService.js
│   │   └── whatsappService.js
│   ├── database/
│   │   └── schema.sql
│   └── middleware/
│       └── auth.js
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   └── components/
│   │       ├── OrderCard.jsx
│   │       └── WeightInput.jsx
│   └── package.json
└── .env
```

## Support

For issues with:
- **Email Integration**: Check Gmail API credentials
- **WhatsApp**: Verify Twilio webhook URL
- **Database**: Check PostgreSQL connection
- **Arch Integration**: Verify API key and endpoint

## License

MIT
