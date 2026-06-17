import mongoose from 'mongoose';

const NewsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  active: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('Newsletter', NewsletterSchema);
