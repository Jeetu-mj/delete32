// Posting Add Exam Details

const express = require("express");
const router = express.Router();
const exam = require('../models/addexam');

router.post('/adddetails', async(req,res)=>{
    console.log("Inside Add Exam Details Post Function");


    const data = new exam({
        short_name:req.body.short_name,
        full_name:req.body.full_name,
        category:req.body.category,
        mode:req.body.mode,
        type:req.body.type,
        exam_type:req.body.exam_type,
        added_on:req.body.added_on
    })

   
    try{
        const value = await data.save();
        res.send(value);
        console.log(value)
    } catch(error){
        console.log("Error in Adding Details",error);
    }
})

module.exports = router;