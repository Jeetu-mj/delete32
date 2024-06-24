// Post details of Subpage Overview to database
const express = require("express");
const router = express.Router();
const subSchema = require('../models/subschema')
const path = require('path');



router.post('/overviewsubpage', async(req,res)=>{
    console.log("inside overview subapge details function");
    console.log(req.body)
     
    const data = new subSchema({
        et:req.body.et,
        sl:req.body.sl
    })

   
    try {
        const overval = await data.save();
        console.log("Success", overval);
        res.status(200).json({ message: 'Data saved successfully' });
    } catch (error) {
        console.log("Error in Adding Subapage Overview Details", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
})

module.exports = router;