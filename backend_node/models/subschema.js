const mongoose = require("mongoose");


const subSchema = mongoose.Schema({
    et: {
      type: String,
      required: true,
    },
    sl: {
      type: String,
      required: true,
    }
  });
  
  const subpageDetails = mongoose.model("SubPage OverviewDetails", subSchema);
  
  module.exports = subpageDetails;