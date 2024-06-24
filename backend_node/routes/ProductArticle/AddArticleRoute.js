// Post details of Overview Page to database
const express = require("express");
const router = express.Router();
const ProArtiDetails=require('../../models/ProductArticle/AddArticle')
const path = require('path');
const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../../reactjs/public/ProductArticleLogos'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null,uniqueSuffix + file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })


router.post('/addArticle', upload.single('file'), async(req,res)=>{
    console.log("inside add article details function");

    console.log(req.file);
    
    const notifications = req.body.notifications || [];


    const overviewdata = new ProArtiDetails({
        ptype:req.body.ptype,
        ppage:req.body.ppage,
        ploc:req.body.ploc,
        pall:req.body.pall,
        url:req.body.url,
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
        imagedest:req.file.destination,
        ogrobot:req.body.ogrobot,
        oggogle:req.body.oggogle,
        time:req.body.time,
        notifications: notifications,
        status:req.body.status,
        id:req.body.id
    })

    try {
        const overval = await overviewdata.save();
        // res.send(overval);
        // console.log(overval);
    } catch (error) {
        console.log("Error in Adding Article Details Details",error);
    }
})

module.exports = router;