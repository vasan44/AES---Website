import mongoose from 'mongoose';

export default function connectDB() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error('MONGODB_URI is missing in backend/.env');
  }

  return mongoose.connect(mongoUri, {
    dbName: process.env.MONGODB_DB || 'aes',
    serverSelectionTimeoutMS: 10000
  });
}
