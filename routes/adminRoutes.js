// Backend/routes/adminRoutes.js

const express = require('express');
const router = express.Router();
  console.log('Received credentials:', username, password);
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'password123') {
    return res.json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
