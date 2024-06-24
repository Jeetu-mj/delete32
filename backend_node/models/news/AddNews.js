const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  date: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  text: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  link: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});


const newsSchema = mongoose.Schema({
    news: {
      type: mongoose.Schema.Types.Mixed,
      
    },
    featureimg: {
      type: mongoose.Schema.Types.Mixed,
    },
      newstype: {
        type: mongoose.Schema.Types.Mixed,
      },
      category: {
        type: mongoose.Schema.Types.Mixed,
      },
      relnews: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      highlight: {
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
      shortdesc: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
    longdesc: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    authname: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    breadt: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    paget:{
        type:mongoose.Schema.Types.Mixed,
        required: true
    },
    metat:{
      type:mongoose.Schema.Types.Mixed,
      required: true
    },
    metadesc : {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    metakey : {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    ogt: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    ogdesc: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    },
  
    ogrobot: {
      type: String,
      required: true
    },
    oggogle: {
        type: String,
        required: true
    },
    oggogle: {
      type: mongoose.Schema.Types.Mixed,
      required: true
  },
  time:{
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  notifications: {
    type: [notificationSchema],
    default: [],
  },
  status:{
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  id:{
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
  });
  
  const addNewsDetails = mongoose.model("News Details", newsSchema);
  
  module.exports = addNewsDetails;