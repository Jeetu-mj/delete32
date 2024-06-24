const mongoose = require("mongoose");

const examSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  examfullname: {
    type: String,
    required: true,
  },
  examtype: {
    type: String,
    required: true,
  },
  exammode: {
    type: String,
    required: true,
  },
  examcase: {
    type: String,
    required: true,
  },
  examcategory:{
      type:String,
      required: true
  },
  coursemapping:{
    type:String,
   
  },
  formlink : {
      type: String,
   
  },
  officialwebsite : {
      type: String,
      required: true
  },
  session: {
      type: Number,
      required: true
  },
  applicationdate: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  startenddate: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  resultannounce: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  img:{
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  imgdest:{
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  fullImgPath:{
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  general: {
      type: Number,
      
  },
  male: {
      type: Number,
      
  },
  female: {
      type: Number,
      
  },
  outside: {
      type: Number,
      
  },
  sc: {
      type: Number,
      
  },
  pwd: {
      type: Number,
      
  },
  nri: {
    type: Number,
    
  },
  others: {
      type: Number,
      
  },
  added_on:{
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
});

const examDetails = mongoose.model("ExamDetails", examSchema);

module.exports = examDetails;
