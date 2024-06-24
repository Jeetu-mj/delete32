// Fetching Details of overview page by College Short name
const express = require("express");
const router = express.Router();
const Overview = require('../../models/college/Overview')

router.get('/getcoldetails/:colover', async (req, res) => {
    console.log("Inside fetchbyname controller");

    try {
        const detailsexam = req.params.colover;
        const info = await Overview.find({ colover: detailsexam });
        if (info.length === 0) {
            res.send("College Does Not Exist");
        } else {
            res.send(info);
        }

    } catch (error) {
        console.error("Error fetching details of exam:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
