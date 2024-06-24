const express = require("express");
const router = express.Router();
const addNewsDetails = require('../../models/news/AddNews');

router.get('/getnewsdetailsbyid/:news', async (req, res) => {
    console.log("Inside fetch news details controller");

    try {
        // Fetch news with id
        const newsbytitle = req.params.news;
        const info = await addNewsDetails.findOne({ news: newsbytitle });

        if (info.length === 0) {
            res.send("No News Found");
        } else {
            res.send(info);
        }

    } catch (error) {
        console.error("Error fetching news details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
