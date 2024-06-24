// Post details of Overview Page to database
const express = require("express");
const multer  = require('multer');
const router = express.Router();
const path = require('path');
const coloverDetails = require('../../models/college/Overview')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../../reactjs/public/CollegeLogos'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null,uniqueSuffix + file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })



router.post('/coloverdetails',upload.single('file'), async(req,res)=>{
    console.log("inside college overview details function");
    console.log(req.file);
    // res.send('Image');
    const notifications = req.body.notifications || [];


    const overviewdata = new coloverDetails({
        colover:req.body.colover,
        shortdesc:req.body.shortdesc,
        longdesc:req.body.longdesc,
        authname:req.body.authname,
        breadt:req.body.breadt,
        paget:req.body.paget,
        metat:req.body.metat,
        metadesc:req.body.metadesc,
        metakey:req.body.metakey,
        ogt:req.body.ogt,
        ogdesc:req.body.ogdesc,
        image:req.file.filename,
        ogrobot:req.body.ogrobot,
        oggogle:req.body.oggogle,
        time:req.body.time,
        notifications: notifications,
        status:req.body.status
    })

    try {
        const overval = await overviewdata.save();
        // res.send(overval);
        // console.log(overval);
    } catch (error) {
        console.log("Error in Adding Overview Details",error);
    }
})

module.exports = router;