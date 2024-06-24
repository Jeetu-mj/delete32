const express = require("express");
const router = express.Router();
const Overview = require('../../models/Institute/Overview')

router.put('/updateinsstatus/:colover', async (req, res) => {
    const colover = req.params.colover;
    try {
        
        const overviewData = await Overview.findOne({ colover });

       
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
