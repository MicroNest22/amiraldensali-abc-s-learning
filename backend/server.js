const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Registration route
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, role, month, date, year } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send('User already exists');

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      birthdate: { month, date, year },
    });

    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).send('Error logging in');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
