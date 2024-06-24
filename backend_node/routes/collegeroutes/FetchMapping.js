// Fetching all course mapping details
const express = require("express");
const router = express.Router();
const mapping = require('../../models/college/CourseMapping');

router.get('/getallcourses', async (req, res) => {
    try {
        // Fetch all short names from the examnameDetails collection
        const courses = await mapping.distinct('title');

        // Respond with the array of short names
        res.status(200).json({ courses });
    } catch (error) {
        console.error("Error fetching details of Courses:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
