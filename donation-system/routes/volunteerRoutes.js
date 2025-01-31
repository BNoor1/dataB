const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');


router.get('/', async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.json(volunteers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const { associationID, badge } = req.body;

    const newVolunteer = new Volunteer({
        associationID,
        badge,
    });

    try {
        const savedVolunteer = await newVolunteer.save();
        res.status(201).json(savedVolunteer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;
