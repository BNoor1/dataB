const express = require('express');
const router = express.Router();
const Distribution = require('../models/Distribution');


router.get('/', async (req, res) => {
    try {
        const distributions = await Distribution.find();
        res.json(distributions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const { volunteerID, boxID, startDate, endDate } = req.body;

    const newDistribution = new Distribution({
        volunteerID,
        boxID,
        startDate,
        endDate,
    });

    try {
        const savedDistribution = await newDistribution.save();
        res.status(201).json(savedDistribution);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
