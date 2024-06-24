const express = require("express");
const multer  = require('multer')
const router = express.Router();
const path = require('path');
const addNewsDetails = require('../../models/news/AddNews')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../../reactjs/public/NewsLogos'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        const filePath = path.resolve(__dirname, '../../../reactjs/public/NewsLogos', uniqueSuffix + file.originalname);
        req.filePath = filePath; // saving the full file path in request object for later use
        cb(null, uniqueSuffix + file.originalname);
    }
});



const upload = multer({ storage: storage });

const multipleUpload = upload.fields([{ name: 'file', maxCount: 1 }, { name: 'featureimg', maxCount: 1 }])


router.post('/addnewsdetails', multipleUpload, async(req,res)=>{


    console.log("Inside Add News Details Post Function");
        console.log(req.files)
        const notifications = req.body.notifications || [];
    
    
        const data = new addNewsDetails({
        news:req.body.news,
        newstype:req.body.newstype,
        category:req.body.category,
        relnews:req.body.relnews,
        highlight:req.body.highlight,
        state:req.body.state,
        city:req.body.city,
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
        file: req.files['file'][0].filename,
        featureimg: req.files['featureimg'][0].filename,
        ogrobot:req.body.ogrobot,
        oggogle:req.body.oggogle,
        time:req.body.time,
        notifications: notifications,
        status:req.body.status,
        id:req.body.id
        })

        try{
            const value = await data.save();
            res.send(value);
            console.log(value)
        } catch(error){
            console.log("Error in Adding News Details",error);
        }
})

module.exports = router;