import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  experience: { type: String, required: true },
  resume: { type: String, default: '' },
  message: { type: String, default: '' },
  status: { type: String, enum: ['new', 'reviewed', 'shortlisted', 'rejected'], default: 'new' },
}, { timestamps: true });

export default mongoose.model('Application', ApplicationSchema);
