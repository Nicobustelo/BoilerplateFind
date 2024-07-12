// config/db.js
const mongoose = require('mongoose');
const config = require('../utils/config');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nbustelo2002:G9Tnl90DTPUcD3af@boilerplatefind.nuxhc6e.mongodb.net/?retryWrites=true&w=majority&appName=BoilerplateFind');
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
