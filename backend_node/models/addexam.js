

const mongoose = require("mongoose");

const examSch = mongoose.Schema({
  short_name: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  full_name: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  category:{
    type: String,
      required: true
  },
  mode: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  type: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  exam_type: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  added_on:{
    type: mongoose.Schema.Types.Mixed,
    required: true,
  }
});

const exam = mongoose.model("Exam", examSch, "Exam");

module.exports = exam;
