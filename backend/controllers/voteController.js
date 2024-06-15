// controllers/voteController.js
const Vote = require('../models/vote.model');
const Boilerplate = require('../models/boilerplate.model');

// @desc Add or update a vote
// @route POST /api/votes
exports.addVote = async (req, res) => {
    const { boilerplateId, value } = req.body;
    const ip = req.ip; // Get user IP

    try {
        // Find an existing vote by this user on this boilerplate
        const existingVote = await Vote.findOne({ boilerplateId, ip });

        if (existingVote) {
            // Update the existing vote
            const oldValue = existingVote.value;
            existingVote.value = value;
            await existingVote.save();

            // Update the boilerplate's vote count
            const boilerplate = await Boilerplate.findById(boilerplateId);
            if (oldValue === 1) {
                boilerplate.upVotes -= 1;
            } else if (oldValue === -1) {
                boilerplate.downVotes -= 1;
            }

            if (value === 1) {
                boilerplate.upVotes += 1;
            } else if (value === -1) {
                boilerplate.downVotes += 1;
            }

            await boilerplate.save();
            return res.status(200).json(existingVote);
        } else {
            // Create a new vote
            const newVote = new Vote({ boilerplateId, ip, value });
            await newVote.save();

            // Update the boilerplate's vote count
            const boilerplate = await Boilerplate.findById(boilerplateId);
            if (value === 1) {
                boilerplate.upVotes += 1;
            } else if (value === -1) {
                boilerplate.downVotes += 1;
            }
            await boilerplate.save();

            return res.status(201).json(newVote);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};