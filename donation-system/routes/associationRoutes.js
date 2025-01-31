const express = require('express');
const router = express.Router();
const Association = require('../models/Association');


router.get('/', async (req, res) => {
    try {
        const associations = await Association.find();
        res.json(associations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const { description, location, partnershipDate } = req.body;

    const newAssociation = new Association({
        description,
        location,
        partnershipDate,
    });

    try {
        const savedAssociation = await newAssociation.save();
        res.status(201).json(savedAssociation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
