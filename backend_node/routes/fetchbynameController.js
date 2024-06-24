// Fetching Details of overview page by exam name
const express = require("express");
const router = express.Router();
const examDetails = require('../models/examdetailsdb');
const overviewDetails = require('../models/overviewdb');

router.get('/getdetails/:examshortname', async (req, res) => {
    console.log("Inside fetchbyname controller");

    try {
        const detailsexam = req.params.examshortname;
        const info = await overviewDetails.find({ examName: detailsexam });
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
