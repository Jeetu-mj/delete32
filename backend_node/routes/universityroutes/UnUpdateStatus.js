const express = require("express");
const router = express.Router();
const universityoverDetails=require('../../models/university/Overview')

router.put('/updatecolstatus/:unover', async (req, res) => {
    const unover = req.params.unover;
    try {
        
        const overviewData = await Overview.findOne({ unover });

       
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
