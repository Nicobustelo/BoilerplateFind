// models/vote.nodel.js
const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    boilerplateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Boilerplate', required: true },
    ip: { type: String, required: true },
    value: { type: Number, required: true }, // 1 for upvote, -1 for downvote
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vote', VoteSchema);