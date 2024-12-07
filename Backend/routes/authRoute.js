const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const router = express.Router();


// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); 

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Logout route (clear cookie)
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
});

// Sign Up route
// router.post('/signup', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const user = new User({ username, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
module.exports = router;
