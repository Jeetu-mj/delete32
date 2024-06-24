const express = require("express");
const router = express.Router();
const overviewDetails = require('../models/overviewdb');

router.put('/updatestatus/:examName', async (req, res) => {
    const examName = req.params.examName;
    try {
        
        const overviewData = await overviewDetails.findOne({ examName });

       
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
