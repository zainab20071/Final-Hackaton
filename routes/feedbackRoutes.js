const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedbackModel');

// POST - Add new feedback
router.post('/feedback', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
});

// GET - Get all feedbacks
router.get('/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching feedbacks' });
  }
});

module.exports = router;
