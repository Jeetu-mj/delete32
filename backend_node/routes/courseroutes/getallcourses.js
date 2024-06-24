const express = require("express");
const router = express.Router();
const courseDetails=require('../../models/course/addcourse')

router.get('/getcourses', async (req, res) => {
    try {
        const examDetailsData = await courseDetails.find();

        res.status(200).json([examDetailsData]);
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
