import express from 'express';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import Contact from '../models/Contact.js';
import Application from '../models/Application.js';
import Newsletter from '../models/Newsletter.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// POST /api/admin/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.matchPassword(password)))
      return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, email: admin.email });
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/admin/stats  — admin only
router.get('/stats', auth, async (req, res) => {
  const [totalContacts, newContacts, totalApps, newApps, totalSubs] = await Promise.all([
    Contact.countDocuments(),
    Contact.countDocuments({ status: 'new' }),
    Application.countDocuments(),
    Application.countDocuments({ status: 'new' }),
    Newsletter.countDocuments({ active: true }),
  ]);
  res.json({ totalContacts, newContacts, totalApps, newApps, totalSubs });
});

export default router;
