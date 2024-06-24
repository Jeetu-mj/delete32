// Posting Exam Details and Overview Details

const express = require("express");
const multer  = require('multer')
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
        req.filePath = filePath; // saving the full file path in request object for later use
        cb(null, uniqueSuffix + file.originalname);
    }
});

  
  const upload = multer({ storage: storage })



router.post('/details', upload.single('file'), async(req,res)=>{
    console.log("Inside Details Post Function");
    console.log(req.file)


    const data = new examDetails({
        name:req.body.name,
        examfullname:req.body.examfullname,
        examtype:req.body.examtype,
        exammode:req.body.exammode,
        examcase:req.body.examcase,
        examcategory:req.body.examcategory,
        coursemapping:req.body.coursemapping,
        formlink:req.body.formlink,
        officialwebsite:req.body.officialwebsite,
        session:req.body.session,
        applicationdate:req.body.applicationdate,
        startenddate:req.body.startenddate,
        resultannounce:req.body.resultannounce,
        general:req.body.general,
        male:req.body.male,
        female:req.body.female,
        outside:req.body.outside,
        sc:req.body.sc,
        pwd:req.body.pwd,
        others:req.body.others,
        nri:req.body.nri,
        img:req.file.filename,
        imgdest:req.file.destination,
        fullImgPath: req.filePath,
        added_on:req.body.added_on 
    })


    console.log(data.examcase);
    console.log(data.formlink);
    console.log(data.officialwebsite);
    console.log(data.session);
    console.log(data.fullImgPath);

    if (!data.formlink.startsWith("https")) {
        return res.status(400).json({ error: "Invalid link format. Link must start with 'https'." });
    }
    if (!data.officialwebsite.startsWith("https")) {
        return res.status(400).json({ error: "Invalid link format. Link must start with 'https'." });
    }
    if (!data.session.toString().length == 4) {
        return res.status(400).json({ error: "Session must be a 4-digit year." });
    }

   


    try{
        const value = await data.save();
        res.send(value);
        console.log(value)
    } catch(error){
        console.log("Error in Adding Details",error);
    }
})

module.exports = router;