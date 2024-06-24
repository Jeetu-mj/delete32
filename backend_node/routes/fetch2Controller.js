// Fetch Details of All Exam Listing Page
const express = require("express");
const router = express.Router();
const examDetails = require('../models/examdetailsdb');

router.get('/examdetails', async (req, res) => {
    try {
        const examDetailsData = await examDetails.find();
        res.status(200).json(examDetailsData);
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
