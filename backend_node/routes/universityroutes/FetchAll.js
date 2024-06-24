// Fetching all exam listing and overview details
const express = require("express");
const router = express.Router();
const universitydetails=require('../../models/university/Generel')
const universityoverDetails=require('../../models/university/Overview')

router.get('/getUnidetails', async (req, res) => {
    try {
        const [uniDetailsData, unioverviewDetailsData] = await Promise.all([
            universitydetails.find(),
            universityoverDetails.find()
        ]);

        const combinedDetails = {
            universitydetails: uniDetailsData,
            universityoverDetails: unioverviewDetailsData
        };

        res.status(200).json([combinedDetails]);
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
