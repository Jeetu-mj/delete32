// Fetching all shortnames
const express = require("express");
const router = express.Router();
const examnameDetails = require('../models/examnamedb');

router.get('/getallnames', async (req, res) => {
    try {
        // Fetch all short names from the examnameDetails collection
        const shortNames = await examnameDetails.distinct('short_name');

        // Respond with the array of short names
        res.status(200).json({ shortNames });
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
