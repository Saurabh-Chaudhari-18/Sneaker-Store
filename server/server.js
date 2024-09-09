const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config(); // Add this line to load environment variables from .env

// MongoDB Atlas connection URI from .env
const mongoUri = process.env.MONGO_URI;

// Connect to MongoDB Atlas
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Configure session store
const sessionStore = MongoStore.create({
  mongoUrl: mongoUri, // Use the same MongoDB Atlas URI here
  collectionName: 'sessions'
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure sessions
app.use(session({
  secret: 'your_session_secret', // Replace with a strong secret
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Import Routes
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contact');  // Ensure this route exists

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);  // Add this for the contact form submissions

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
