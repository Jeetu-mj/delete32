// Fetching all exam listing and overview details
const express = require("express");
const router = express.Router();
const examDetails = require('../models/examdetailsdb');
const overviewdetails = require('../models/overviewdb');

router.get('/getdetails', async (req, res) => {
    try {
        const [examDetailsData, overviewDetailsData] = await Promise.all([
            examDetails.find(),
            overviewdetails.find()
        ]);

        const combinedDetails = {
            examDetails: examDetailsData,
            overviewDetails: overviewDetailsData
        };

        res.status(200).json([combinedDetails]);
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
