const express = require("express");
const router = express.Router();
const courseDetails=require("../../models/course/addcourse")

router.get('/getcoursedetailsbylevel/:level', async (req, res) => {
    console.log("Inside fetch course details11111111 controller");

    try {
        // Fetch news with level
        const articlebylevel = req.params.level;
        const info = await courseDetails.find({ level: articlebylevel });

        if (info.length === 0) {
            res.send("No Courses Found");
        } else {
            res.send(info);
        }

    } catch (error) {
        console.error("Error fetching courses hhhhhhhhhhhdetails:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
