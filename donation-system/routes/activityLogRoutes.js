const express = require('express');
const router = express.Router();
const ActivityLog = require('../models/ActivityLog');


router.get('/', async (req, res) => {
    try {
        const logs = await ActivityLog.find();
        res.json(logs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { adminID, activityType, dateTime } = req.body;

    const newLog = new ActivityLog({
        adminID,
        activityType,
        dateTime,
    });

    try {
        const savedLog = await newLog.save();
        res.status(201).json(savedLog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
