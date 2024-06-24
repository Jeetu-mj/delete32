const mongoose = require("mongoose");

const examnameSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  unique_id: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  short_name: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  catagory: {
    type: String,
    required: true,
  },
  mode:{
      type:String,
      required: true
  },
  type:{
    type:String,
   
  },
  added_on : {
    type: mongoose.Schema.Types.Mixed,
   
  },
  updated_on : {
    type: mongoose.Schema.Types.Mixed,
      required: true
  }
});

const examnameDetails = mongoose.model("ExamNameDetails", examnameSchema, "Exam");

module.exports = examnameDetails;
