import express from 'express';
import Contact from '../models/Contact.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// POST /api/contact  — public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !subject || !message)
      return res.status(400).json({ message: 'Required fields missing' });
    const doc = await Contact.create({ name, email, phone, subject, message });
    res.status(201).json({ message: 'Enquiry saved', id: doc._id });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/contact  — admin only
router.get('/', auth, async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
});

// PATCH /api/contact/:id/status  — admin only
router.patch('/:id/status', auth, async (req, res) => {
  const doc = await Contact.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(doc);
});

// DELETE /api/contact/:id  — admin only
router.delete('/:id', auth, async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

export default router;
