require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const formRoutes = require('./routes/formRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/form', formRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
