const express = require("express");
const router = express.Router();
const colgenDetails=require('../../models/college/General')
const coloverDetails=require('../../models/college/Overview')

router.get('/getcolcompletedinfo/:colfull', async (req, res) => {
    try {
        const { colfull } = req.params;
        console.log(colfull)
        const [examDetailsData, overviewDetailsData] = await Promise.all([
            colgenDetails.aggregate([
                { $match: { colfull } },
            ]),
            coloverDetails.aggregate([
                { $match: { colover: colfull } },
            ]),
        ]);

        const combinedDetails = {
            colgenDetails: examDetailsData,
            coloverDetails: overviewDetailsData,
        };

        res.status(200).json(combinedDetails);
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;
