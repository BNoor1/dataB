const express = require('express');
const router = express.Router();
const Box = require('../models/Box');


router.get('/', async (req, res) => {
    try {
        const boxes = await Box.find();
        res.json(boxes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const { donationID, productID } = req.body;

    const newBox = new Box({
        donationID,
        productID,
    });

    try {
        const savedBox = await newBox.save();
        res.status(201).json(savedBox);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
