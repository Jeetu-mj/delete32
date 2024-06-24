const mongoose = require("mongoose");

const HsSchema = mongoose.Schema({
     hostype: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      category: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      hosfull: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      hosshort: {
        type: mongoose.Schema.Types.Mixed,

      },
      
      file: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      cover: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      mobcover: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      affby: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      appby: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      dept: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      ser: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      fac: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      spec: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      estab:{
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      gender: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      zone: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      state: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      city: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      pin: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      add: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      mark: {
        type: mongoose.Schema.Types.Mixed,
        
      },
      web: {
        type: mongoose.Schema.Types.Mixed,
        
      },
      mail: {
        type: [String],
        required: true,
      },
      mob: {
        type: [Number],
        required: true,
      },
      added_on: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      UniqueId: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
})

const hsdetails = mongoose.model("Hospital General Update", HsSchema);

module.exports = hsdetails;