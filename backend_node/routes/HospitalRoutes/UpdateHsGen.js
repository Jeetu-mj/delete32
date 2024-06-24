const express = require("express");
const multer  = require('multer')
const router = express.Router();
const path = require('path');
const hosdetails = require('../../models/hospital/GeneralHs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../../reactjs/public/HospitalLogos'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        const filePath = path.resolve(__dirname, '../../../reactjs/public/HospitalLogos', uniqueSuffix + file.originalname);
        req.filePath = filePath; // saving the full file path in request object for later use
        cb(null, uniqueSuffix + file.originalname);
    }
});



const upload = multer({ storage: storage });

const multipleUpload = upload.fields([{ name: 'file', maxCount: 1 }, { name: 'cover', maxCount: 1 }, { name: 'mobcover', maxCount: 1 }])


// Add an endpoint for updating exam details by name
router.put('/hsgenupdatedetails/:hosfull', multipleUpload, async (req, res) => {
    try {
        console.log("Inside Hospital General Update Details")
        // Find the exam details by name
        const ed = await hosdetails.findOne({ hosfull: req.params.hosfull });

        if (!ed) {
            return res.status(404).json({ error: "Hospital details not found for the provided name." });
        }

        // Update the fields based on the request body
        ed.hostype = req.body.hostype || ed.hostype;
        ed.category = req.body.category || ed.category;
        ed.hosfull = req.body.hosfull || ed.hosfull;
        ed.hosshort = req.body.hosshort || ed.hosshort;
        ed.affby = req.body.affby || ed.affby;
        ed.appby = req.body.appby || ed.appby;
        ed.gender = req.body.gender || ed.gender;
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
        ed.dept = req.body.dept || ed.dept;
        ed.ser = req.body.ser || ed.ser;
        ed.fac = req.body.fac || ed.fac;
        ed.estab = req.body.estab || ed.estab;
        ed.spec = req.body.spec || ed.spec;

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
        console.error("Error in updating Hospital details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
