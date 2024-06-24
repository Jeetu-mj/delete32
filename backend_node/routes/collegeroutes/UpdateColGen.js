const express = require("express");
const multer  = require('multer')
const router = express.Router();
const path = require('path');
const coldetails = require('../../models/college/General')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../../reactjs/public/CollegeLogos'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        const filePath = path.resolve(__dirname, '../../../reactjs/public/CollegeLogos', uniqueSuffix + file.originalname);
        req.filePath = filePath; // saving the full file path in request object for later use
        cb(null, uniqueSuffix + file.originalname);
    }
});



const upload = multer({ storage: storage });

const multipleUpload = upload.fields([{ name: 'file', maxCount: 1 }, { name: 'cover', maxCount: 1 }, { name: 'mobcover', maxCount: 1 }])


// Add an endpoint for updating exam details by name
router.put('/colgenupdatedetails/:colfull', multipleUpload, async (req, res) => {
    try {
        console.log("Inside College General Update Details")
        // Find the exam details by name
        const ed = await coldetails.findOne({ colfull: req.params.colfull });

        if (!ed) {
            return res.status(404).json({ error: "Exam details not found for the provided name." });
        }

        // Update the fields based on the request body
        ed.coltype = req.body.coltype || ed.coltype;
        ed.category = req.body.category || ed.category;
        ed.colfull = req.body.colfull || ed.colfull;
        ed.colshort = req.body.colshort || ed.colshort;
        ed.colnick = req.body.colnick || ed.colnick;
        ed.affby = req.body.affby || ed.affby;
        ed.appby = req.body.appby || ed.appby;
        ed.mapping = req.body.mapping || ed.mapping;
        ed.examacc = req.body.examacc || ed.examacc;
        ed.maincourse = req.body.maincourse || ed.maincourse;
        ed.fee = req.body.fee || ed.fee;
        ed.entname = req.body.entname || ed.entname;
        ed.gender = req.body.gender || ed.gender;
        ed.fund = req.body.fund || ed.fund;
        ed.zone = req.body.zone || ed.zone;
        ed.state = req.body.state || ed.state;
        ed.city = req.body.city || ed.city;
        ed.pin = req.body.pin || ed.pin;
        ed.add = req.body.add || ed.add;
        ed.mark = req.body.mark || ed.mark;
        ed.web = req.body.web || ed.web;
        ed.mail = req.body.mail || ed.mail;
        ed.mob = req.body.mob || ed.mob;
        ed.added_on = req.body.added_on || ed.added_on;

        // Update other fields as needed...

        // Handle file upload if a new file is provided
        if (req.file) {
            ed.file= req.files['file'][0].filename,
            ed.cover= req.files['cover'][0].filename,
            ed.mobcover= req.files['mobcover'][0].filename
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
