const express = require("express");
const multer = require('multer');
const router = express.Router();
const path = require('path');
const courseDetails=require('../../models/course/addcourse')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../../reactjs/public/CourseLogos'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null,uniqueSuffix + file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })


// PUT endpoint to update overview details by ID
// PUT endpoint to update overview details by examName
router.put('/UpdateCourse/:id',  upload.single('file'), async (req, res) => {
    try {
        console.log("Inside Course Update")
      const id = req.params.id;
      const notifications = req.body.notifications || [];
  
      // Find the overview details by examName
      const overviewData = await courseDetails.findOne({ id });
  
      if (!overviewData) {
        return res.status(404).json({ error: "Course Details Not Found" });
      }
  
      // Update the fields based on the request body
      overviewData.title = req.body.title || overviewData.title;
      overviewData.category = req.body.category || overviewData.category;
      overviewData.highlight = req.body.highlight || overviewData.highlight;
      overviewData.level = req.body.level || overviewData.level;
      overviewData.shortdescs = req.body.news || overviewData.shortdescs;
      overviewData.longdesc = req.body.longdesc || overviewData.longdesc;
      overviewData.authname = req.body.authname || overviewData.authname;
      overviewData.breadt = req.body.breadt || overviewData.breadt;
      overviewData.paget = req.body.paget || overviewData.paget;
      overviewData.metat = req.body.metat || overviewData.metat;
      overviewData.metadesc = req.body.metadesc || overviewData.metadesc;
      overviewData.metakey = req.body.metakey || overviewData.metakey;
      overviewData.ogt = req.body.ogt || overviewData.ogt;
      overviewData.ogdesc = req.body.ogdesc || overviewData.ogdesc;
      overviewData.image = req.file ? req.file.filename : overviewData.image;
      overviewData.imagedest = req.file ? req.file.destination : overviewData.imagedest;
      overviewData.ogrobot = req.body.ogrobot || overviewData.ogrobot;
      overviewData.oggogle = req.body.oggogle || overviewData.oggogle;
      overviewData.time = req.body.time || overviewData.time;
      overviewData.notifications = notifications;
      overviewData.status = req.body.status || overviewData.status;
  
      // Validate and save the updated data
      const updatedOverview = await overviewData.save();
      res.json(updatedOverview);
    } catch (error) {
      console.error("Error in updating news details:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
module.exports = router;
