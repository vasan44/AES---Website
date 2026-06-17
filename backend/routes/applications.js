import express from 'express';
import Application from '../models/Application.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// POST /api/applications  — public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, position, experience, resume, message } = req.body;
    if (!name || !email || !phone || !position || !experience)
      return res.status(400).json({ message: 'Required fields missing' });
    const doc = await Application.create({ name, email, phone, position, experience, resume, message });
    res.status(201).json({ message: 'Application saved', id: doc._id });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/applications  — admin only
router.get('/', auth, async (req, res) => {
  const apps = await Application.find().sort({ createdAt: -1 });
  res.json(apps);
});

// PATCH /api/applications/:id/status  — admin only
router.patch('/:id/status', auth, async (req, res) => {
  const doc = await Application.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(doc);
});

// DELETE /api/applications/:id  — admin only
router.delete('/:id', auth, async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

export default router;
