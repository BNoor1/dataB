const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');


router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { email, message, dateTime } = req.body;

    const newTicket = new Ticket({
        email,
        message,
        dateTime,
    });

    try {
        const savedTicket = await newTicket.save();
        res.status(201).json(savedTicket);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;
