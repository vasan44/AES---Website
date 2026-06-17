import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

import connectDB from './db.js';
import Admin from './models/Admin.js';

import contactRoutes      from './routes/contact.js';
import applicationRoutes  from './routes/applications.js';
import newsletterRoutes   from './routes/newsletter.js';
import adminRoutes        from './routes/admin.js';

const app = express();
const requiredEnv = [
  'MONGODB_URI',
  'JWT_SECRET',
  'ADMIN_EMAIL',
  'ADMIN_PASSWORD'
];
const missingEnv = requiredEnv.filter((name) => !process.env[name]);

if (missingEnv.length > 0) {
  console.error(`❌ Missing required env vars: ${missingEnv.join(', ')}`);
  process.exit(1);
}

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

app.use('/api/contact',      contactRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/newsletter',   newsletterRoutes);
app.use('/api/admin',        adminRoutes);

app.get('/', (_, res) => res.json({ status: 'AES Backend running' }));

connectDB().then(async () => {
  console.log('✅ MongoDB connected successfully');
  const exists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
  if (!exists) {
    await Admin.create({ email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD });
    console.log(`✅ Admin created → ${process.env.ADMIN_EMAIL}`);
  }
  const server = app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
  );
  server.on('error', (err) => {
    console.error('❌ Server startup failed:', err.message);
    process.exit(1);
  });
}).catch((err) => {
  console.error('❌ MongoDB connection failed:', err.message);
  process.exit(1);
});
