const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');


router.get('/', async (req, res) => {
    try {
        const donations = await Donation.find();
        res.json(donations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { donatorID, price, status, startDate, endDate } = req.body;

    const newDonation = new Donation({
        donatorID,
        price,
        status,
        startDate,
        endDate,
    });

    try {
        const savedDonation = await newDonation.save();
        res.status(201).json(savedDonation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;
