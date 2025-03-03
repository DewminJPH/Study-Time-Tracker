// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const sessionRoutes = require("./routes/sessionRoutes");
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors({
//     origin: 'http://localhost:3000', // Frontend port
//     methods: ["GET", "POST"],
//     credentials: true
//   }));
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use("/api/sessions", sessionRoutes);

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error("MongoDB connection error:", err));

// const PORT = process.env.PORT || 3002;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));