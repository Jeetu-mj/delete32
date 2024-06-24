const express = require("express");
const multer  = require('multer')
const router = express.Router();
const path = require('path');
const hsdetails=require('../../models/hospital/GeneralHs')
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


router.post('/hsgendetails', multipleUpload, async(req,res)=>{
    console.log("inside")

    console.log("Inside Hospital Details Post Function");
        console.log(req.files)
    
    
        const data = new hsdetails({
            hostype:req.body.hostype,
            category:req.body.category,
            hosfull:req.body.hosfull,
            hosshort:req.body.hosshort,
            file: req.files['file'][0].filename,
            cover: req.files['cover'][0].filename,
            mobcover: req.files['mobcover'][0].filename,
            affby:req.body.affby,
            appby:req.body.appby,
            gender:req.body.gender,
            zone:req.body.zone,
            state:req.body.state,
            city:req.body.city,
            pin:req.body.pin,
            add:req.body.add,
            mark:req.body.mark,
            web:req.body.web,
            mail:req.body.mail,
            mob:req.body.mob,
            added_on:req.body.added_on,
            UniqueId:req.body.UniqueId,
            dept:req.body.dept,
            ser:req.body.ser,
            fac:req.body.fac,
            spec:req.body.spec,
            estab:req.body.estab,

        })
    
    
        console.log(data.mobcover);
        console.log(data.affby);
        console.log(data.appby);
    
       
    
        try{
            const value = await data.save();
            res.send(value);
            console.log(value)
        } catch(error){
            console.log("Error in Updating Hospital Details",error);
        }
})

module.exports = router;