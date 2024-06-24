const express = require("express");
const multer = require('multer');
const router = express.Router();
const examDetails = require('../models/examdetailsdb');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../reactjs/public/Logos'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        const filePath = path.resolve(__dirname, '../../reactjs/public/Logos', uniqueSuffix + file.originalname);
        req.filePath = filePath; // saving the full file path in the request object for later use
        cb(null, uniqueSuffix + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Add an endpoint for updating exam details by name
router.put('/details/:name', upload.single('file'), async (req, res) => {
    try {
        // Find the exam details by name
        const ed = await examDetails.findOne({ name: req.params.name });

        if (!ed) {
            return res.status(404).json({ error: "Exam details not found for the provided name." });
        }

        // Update the fields based on the request body
        ed.examfullname = req.body.examfullname || ed.examfullname;
        ed.examtype = req.body.examtype || ed.examtype;
        ed.exammode = req.body.exammode || ed.exammode;
        ed.examcase = req.body.examcase || ed.examcase;
        ed.examcategory = req.body.examtype || ed.examcategory;
        ed.coursemapping = req.body.coursemapping || ed.coursemapping;
        ed.formlink = req.body.formlink || ed.formlink;
        ed.officialwebsite = req.body.officialwebsite || ed.officialwebsite;
        ed.session = req.body.session || ed.session;
        ed.applicationdate = req.body.applicationdate || ed.applicationdate;
        ed.startenddate = req.body.startenddate || ed.startenddate;
        ed.resultannounce = req.body.resultannounce || ed.resultannounce;
        ed.general = req.body.general || ed.general;
        ed.male = req.body.male || ed.male;
        ed.female = req.body.female || ed.female;
        ed.outside = req.body.outside || ed.outside;
        ed.sc = req.body.sc || ed.sc;
        ed.pwd = req.body.pwd || ed.pwd;
        ed.others = req.body.others || ed.others;

        // Update other fields as needed...

        // Handle file upload if a new file is provided
        if (req.file) {
            ed.img = req.file.filename;
            ed.imgdest = req.file.destination;
            ed.fullImgPath = req.filePath;
        }

        // Validate and save the updated data
        const updatedExamDetails = await ed.save();
        res.json(updatedExamDetails);
    } catch (error) {
        console.error("Error in updating exam details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
