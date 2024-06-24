// Fetching Details of Exam Listing Page by name
const express = require("express");
const router = express.Router();
const examnameDetails = require('../models/examnamedb')
router.get('/getnamedetails/:name', async (req, res) => {
    console.log("Inside fetch by exam name controller");

    try {
        const detailsexam = req.params.name;
        const info = await examnameDetails.find({ short_name: detailsexam });
        if (info.length === 0) {
            res.send("Exam Does Not Exist");
        } else {
            res.send(info);
        }

    } catch (error) {
        console.error("Error fetching details of exam:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
