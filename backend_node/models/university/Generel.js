const mongoose = require("mongoose");

const unSchema = mongoose.Schema({
     untype: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      category: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      unfull: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      unshort: {
        type: mongoose.Schema.Types.Mixed,

      },
      unnick: {
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
      mapping: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      examacc: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      maincourse: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      fee: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      entname: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      gender: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      fund: {
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

const universitydetails = mongoose.model("University General Update", unSchema);

module.exports = universitydetails;