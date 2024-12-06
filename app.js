const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Import cors
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoute');
const bookRoutes = require('./routes/bookRoute');

dotenv.config();

const app = express();

// Middleware
app.use(cors({ 
  origin: 'http://localhost:5173/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
})); 

app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes); 
app.use('/api', bookRoutes);       

// Test Route
app.get('/', (req, res) => {
  res.send('Testing');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
