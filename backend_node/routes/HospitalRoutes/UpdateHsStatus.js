const express = require("express");
const router = express.Router();
const Overview = require('../../models/hospital/OverviewHs')

router.put('/updatehsstatus/:hosover', async (req, res) => {
    const hosover = req.params.hosover;
    try {
        
        const overviewData = await Overview.findOne({ hosover });

       
        if (overviewData) {
            
            let status = overviewData.status === 'true';

            status = !status;

            overviewData.status = status ? 'true' : 'false';

            await overviewData.save();
            res.json({ success: true, message: 'Status toggled successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Record not found' });
        }
    } catch (error) {
        console.error("Error toggling status:", error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


module.exports = router;
