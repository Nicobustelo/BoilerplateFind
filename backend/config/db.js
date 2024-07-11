// config/db.js
const mongoose = require('mongoose');
const config = require('../utils/config');

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_URL);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
