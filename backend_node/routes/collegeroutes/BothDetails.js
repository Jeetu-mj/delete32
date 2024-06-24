// Fetching all exam listing and overview details
const express = require("express");
const router = express.Router();
const colgendetails=require('../../models/college/General')
const coloverdetails=require('../../models/college/Overview')

router.get('/getcoldetails', async (req, res) => {
    try {
        const [examDetailsData, overviewDetailsData] = await Promise.all([
            colgendetails.find(),
            coloverdetails.find()
        ]);

        const combinedDetails = {
            colgendetails: examDetailsData,
            coloverdetails: overviewDetailsData
        };

        res.status(200).json([combinedDetails]);
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
