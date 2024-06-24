const express = require("express");
const router = express.Router();
const insDetails=require('../../models/hospital/GeneralHs')
const insoverDetails=require('../../models/hospital/OverviewHs')

router.get('/getHscompletedinfo/:fulhosl', async (req, res) => {
    try {
        const { hosfull } = req.params;
        console.log(hosfull)
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
        console.error("Error fetching details of Hospital By Name:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;
