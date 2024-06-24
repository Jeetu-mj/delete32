const mongoose = require("mongoose");

const mediSch = mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  type: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  nugname: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  imgname: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  }
});

const mediupdate = mongoose.model("Medi Update", mediSch);

module.exports = mediupdate;
