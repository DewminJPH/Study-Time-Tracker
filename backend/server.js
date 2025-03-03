const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const sessionRoutes = require('./src/routes/sessionRoutes');
const userRoutes = require('./src/routes/user');
const taskRoutes = require('./src/routes/task');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/sessions', sessionRoutes); 
app.use('/api', userRoutes); // Changed from '/api/users'
app.use('/api', taskRoutes); // Changed from '/api/tasks'

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/study-tracker');

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});