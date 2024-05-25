const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).send('All fields are required');
    }
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).send('Message received');
  } catch (error) {
    console.error('Error saving message:', error.message, error);
    res.status(500).send('Error saving message');
  }
});

module.exports = router;
