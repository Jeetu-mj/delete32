// Posting Add Exam Details

const express = require("express");
const router = express.Router();
const medidata=require('../../models/MediListing/Medi')
const path = require('path');
const multer  = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../../Frontend/public/NuggetLogos'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null,uniqueSuffix + file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })




router.post('/addMediData',upload.single('file'), async(req,res)=>{
    console.log("Inside Add Medi Data Post Function");


    const data = new medidata({
        type:req.body.type,
        category:req.body.category,
        nugname:req.body.nugname,
        imgname:req.file.filename,
    })

   
    try{
        const value = await data.save();
        res.send(value);
        console.log(value)
    } catch(error){
        console.log("Error in Adding Medi Details",error);
    }
})

module.exports = router;