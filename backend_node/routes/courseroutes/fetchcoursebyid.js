const express = require("express");
const router = express.Router();
const courseDetails=require("../../models/course/addcourse")

router.get('/getcoursedetailsbytitle/:title', async (req, res) => {
    console.log("Inside fetch course detailsdddddddddd controller");

    try {
        // Fetch news with id
        const articlebytitle = req.params.title;
        const info = await courseDetails.findOne({ title: articlebytitle });

        res.send(info)

    } catch (error) {
        console.error("Error fetching courses details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
