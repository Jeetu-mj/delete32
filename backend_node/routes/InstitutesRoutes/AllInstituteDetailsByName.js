const express = require("express");
const router = express.Router();
const insDetails=require('../../models/Institute/General')
const insoverDetails=require('../../models/Institute/Overview')

router.get('/getInscompletedinfo/:hosfull', async (req, res) => {
    try {
        const { hosfull } = req.params;
        console.log(colfull)
        const [insDetailsData, overviewDetailsData] = await Promise.all([
            insDetails.aggregate([
                { $match: { hosfull } },
            ]),
            insoverDetails.aggregate([
                { $match: { hosover: hosfull } },
            ]),
        ]);

        const combinedDetails = {
            insDetails: insDetailsData,
            insoverDetails: overviewDetailsData,
        };

        res.status(200).json(combinedDetails);
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;
