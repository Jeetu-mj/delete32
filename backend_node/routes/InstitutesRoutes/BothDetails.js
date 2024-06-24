// Fetching all exam listing and overview details
const express = require("express");
const router = express.Router();
const insDetails=require('../../models/Institute/General')
const insoverdetails=require('../../models/Institute/Overview')

router.get('/getinsdetails', async (req, res) => {
    try {
        const [examDetailsData, overviewDetailsData] = await Promise.all([
            insDetails.find(),
            insoverdetails.find()
        ]);

        const combinedDetails = {
            insDetails: examDetailsData,
            insoverdetails: overviewDetailsData
        };

        res.status(200).json([combinedDetails]);
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
