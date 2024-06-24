const express = require("express");
const router = express.Router();
const mediupdate=require('../../models/MediListing/Medi')


router.get('/getallmedidata', async (req, res) => {
    try {
        const mediData = await mediupdate.find();

        res.status(200).json([mediData]);
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
