// Fetching all exam listing and overview details
const express = require("express");
const router = express.Router();
const addNewsDetails=require('../../models/news/AddNews')


router.get('/getallnews', async (req, res) => {
    try {
        const examDetailsData = await addNewsDetails.find();

        res.status(200).json([examDetailsData]);
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
