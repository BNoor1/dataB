const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');


router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const { joiningDate } = req.body;

    const newAdmin = new Admin({
        joiningDate,
    });

    try {
        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
