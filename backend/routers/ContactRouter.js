const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactModel");

// Submit a new contact message
router.post("/submit", (req, res) => {
  console.log("New contact message received:", req.body);
  
  new Contact(req.body)
    .save()
    .then((result) => {
      res.status(201).json({
        status: 'success',
        message: 'Message sent successfully',
        data: result
      });
    })
    .catch((err) => {
      console.error("Error saving contact message:", err);
      res.status(500).json({
        status: 'error',
        message: 'Failed to send message',
        error: err.message
      });
    });
});

// Get all messages (for developer access)
router.get("/messages", (req, res) => {
  Contact.find()
    .sort({ createdAt: -1 }) // Show newest messages first
    .then((result) => {
      res.status(200).json({
        status: 'success',
        count: result.length,
        data: result
      });
    })
    .catch((err) => {
      console.error("Error fetching messages:", err);
      res.status(500).json({
        status: 'error',
        message: 'Failed to fetch messages',
        error: err.message
      });
    });
});

module.exports = router;