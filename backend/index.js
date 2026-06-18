import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './db.js';
import Admin from './models/Admin.js';

import contactRoutes from './routes/contact.js';
import applicationRoutes from './routes/applications.js';
import newsletterRoutes from './routes/newsletter.js';
import adminRoutes from './routes/admin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Local development-க்கு மட்டும் .env load ஆகும்.
// Vercel-ல் Environment Variables automatic-aa கிடைக்கும்.
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();

const requiredEnv = [
  'MONGODB_URI',
  'JWT_SECRET',
  'ADMIN_EMAIL',
  'ADMIN_PASSWORD',
];

const missingEnv = requiredEnv.filter((name) => !process.env[name]);

if (missingEnv.length > 0) {
  console.error(
    `Missing required environment variables: ${missingEnv.join(', ')}`
  );
}

// Frontend URL environment variable மூலம் எடுத்துக்கொள்ளவும்
const allowedOrigins = [
  'http://localhost:5173',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Postman/server-to-server requests-க்கு origin இருக்காது
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contact', contactRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    status: 'AES Backend running',
  });
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    success: true,
    database: 'checking',
    timestamp: new Date().toISOString(),
  });
});

// Database initialization
let databaseInitialized = false;

async function initializeDatabase() {
  if (databaseInitialized) return;

  await connectDB();
  databaseInitialized = true;

  console.log('MongoDB connected successfully');

  const adminExists = await Admin.findOne({
    email: process.env.ADMIN_EMAIL,
  });

  if (!adminExists) {
    await Admin.create({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    });

    console.log(`Admin created: ${process.env.ADMIN_EMAIL}`);
  }
}

// Database connection failure 
initializeDatabase().catch((error) => {
  console.error('MongoDB initialization failed:', error.message);
});

// Local computer server listen 
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

//  Vercel Express function export
export default app;