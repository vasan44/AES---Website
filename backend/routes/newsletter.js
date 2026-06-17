import express from 'express';
import Newsletter from '../models/Newsletter.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// POST /api/newsletter  — public
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email required' });
    const exists = await Newsletter.findOne({ email });
    if (exists) return res.status(409).json({ message: 'Already subscribed' });
    await Newsletter.create({ email });
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/newsletter  — admin only
router.get('/', auth, async (req, res) => {
  const subs = await Newsletter.find().sort({ createdAt: -1 });
  res.json(subs);
});

// DELETE /api/newsletter/:id  — admin only
router.delete('/:id', auth, async (req, res) => {
  await Newsletter.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

export default router;
