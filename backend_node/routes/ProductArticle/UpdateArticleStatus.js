const express = require("express");
const router = express.Router();
const addArticle = require('../../models/ProductArticle/AddArticle')

router.put('/updatearticlestatus/:id', async (req, res) => {
    const id = req.params.id;
    try {
        
        const overviewData = await addArticle.findOne({ id });

       
        if (overviewData) {
            
            let status = overviewData.status === 'true';

            status = !status;

            overviewData.status = status ? 'true' : 'false';

            await overviewData.save();
            res.json({ success: true, message: 'Article Status toggled successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Record not found' });
        }
    } catch (error) {
        console.error("Error toggling status:", error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


module.exports = router;
