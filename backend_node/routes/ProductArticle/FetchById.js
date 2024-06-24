const express = require("express");
const router = express.Router();
const ProdArProArtiDetails = require('../../models/ProductArticle/AddArticle');

router.get('/getarticledetailsbyid/:id', async (req, res) => {
    console.log("Inside fetch article details controller");

    try {
        // Fetch articles with ptype as "Exams"
        const articlebyid = req.params.id;
        const info = await ProdArProArtiDetails.findOne({ id: articlebyid });

        if (info.length === 0) {
            res.send("No articles found for product type 'Exams'");
        } else {
            res.send(info);
        }

    } catch (error) {
        console.error("Error fetching article details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
