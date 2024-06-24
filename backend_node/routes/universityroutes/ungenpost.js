const express = require("express");
const multer  = require('multer')
const router = express.Router();
const path = require('path');
const universitydetails=require('../../models/university/Generel')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../../reactjs/public/UniversityLogos'));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        const filePath = path.resolve(__dirname, '../../../reactjs/public/UniversityLogos', uniqueSuffix + file.originalname);
        req.filePath = filePath; // saving the full file path in request object for later use
        cb(null, uniqueSuffix + file.originalname);
    }
});



const upload = multer({ storage: storage });

const multipleUpload = upload.fields([{ name: 'file', maxCount: 1 }, { name: 'cover', maxCount: 1 }, { name: 'mobcover', maxCount: 1 }])


router.post('/unigendetails', multipleUpload, async(req,res)=>{
    console.log("inside")

    console.log("Inside University Details Post Function");
        console.log(req.files)
    
    
        const data = new universitydetails({
            untype:req.body.untype,
            category:req.body.category,
            unfull:req.body.unfull,
            unshort:req.body.unshort,
            unnick:req.body.unnick,
            file: req.files['file'][0].filename,
            cover: req.files['cover'][0].filename,
            mobcover: req.files['mobcover'][0].filename,
            affby:req.body.affby,
            appby:req.body.appby,
            mapping:req.body.mapping,
            examacc:req.body.examacc,
            maincourse:req.body.maincourse,
            fee:req.body.fee,
            entname:req.body.entname,
            gender:req.body.gender,
            fund:req.body.fund,
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
            UniqueId:req.body.id

        })
    
    
        console.log(data.unnick);
        console.log(data.mobcover);
        console.log(data.affby);
        console.log(data.appby);
    
       
    
        try{
            const value = await data.save();
            res.send(value);
            console.log(value)
        } catch(error){
            console.log("Error in Adding Details",error);
        }
})

module.exports = router;