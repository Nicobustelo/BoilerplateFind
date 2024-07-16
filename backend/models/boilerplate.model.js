const mongoose = require('mongoose');

const BoilerplateSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
    free: { type: Boolean, required: true },
    stack: { type: [String], required: true },
    socials: { type: [String], required: true },
    price: { type: [String], required: false },
    upVotes: { type: Number, default: 0 },
    downVotes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Boilerplate', BoilerplateSchema);
