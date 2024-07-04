// controllers/boilerplateController.js
const Vote = require('../models/vote.model');
const Boilerplate = require('../models/boilerplate.model');

// @desc Get all boilerplates
// @route GET /api/boilerplates
exports.getBoilerplates = async (req, res) => {
    try {
        const boilerplates = await Boilerplate.find();
        res.json(boilerplates);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc Create a new boilerplate
// @route POST /api/boilerplates
exports.createBoilerplate = async (req, res) => {
    const newBoilerplate = new Boilerplate(req.body);

    try {
        const boilerplate = await newBoilerplate.save();
        res.status(201).json(boilerplate);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc Get a single boilerplate by ID
// @route GET /api/boilerplates/:id
exports.getBoilerplateById = async (req, res) => {
    try {
        const boilerplate = await Boilerplate.findById(req.params.id);
        if (!boilerplate) {
            return res.status(404).json({ message: 'Boilerplate not found' });
        }
        res.json(boilerplate);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc Update a boilerplate
// @route PUT /api/boilerplates/:id
exports.updateBoilerplate = async (req, res) => {
    try {
        const boilerplate = await Boilerplate.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!boilerplate) {
            return res.status(404).json({ message: 'Boilerplate not found' });
        }
        res.json(boilerplate);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc Delete a boilerplate
// @route DELETE /api/boilerplates/:id
exports.deleteBoilerplate = async (req, res) => {
    try {
        const boilerplate = await Boilerplate.findByIdAndDelete(req.params.id);
        if (!boilerplate) {
            return res.status(404).json({ message: 'Boilerplate not found' });
        }
        res.json({ message: 'Boilerplate removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc Get hot boilerplates
// @route GET /api/boilerplates/hot
exports.getHotBoilerplates = async (req, res) => {
    console.log('im here');
    const { days } = req.query;
    console.log(days);
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    try {
        const recentVotes = await Vote.aggregate([
            { $match: { createdAt: { $gte: cutoffDate } } },
            {
                $group: {
                    _id: "$boilerplateId",
                    score: { $sum: "$value" }
                }
            },
            { $sort: { score: -1 } },
            { $limit: 10 }
        ]);

        const hotBoilerplates = await Boilerplate.find({ 
            _id: { $in: recentVotes.map(vote => vote._id) } 
        });

        res.json(hotBoilerplates);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};