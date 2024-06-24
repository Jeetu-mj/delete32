

const mongoose = require("mongoose");

const mapSch = mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  added_on:{
    type: mongoose.Schema.Types.Mixed,
    required: true,
  }
});

const mapping = mongoose.model("Course Mapping", mapSch, "Course Mapping");

module.exports = mapping;
