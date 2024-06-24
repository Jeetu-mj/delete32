

const mongoose = require("mongoose");

const countrySch = mongoose.Schema({
  country_id: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  country_code: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  country_name:{
    type: mongoose.Schema.Types.Mixed,
    required: true,
  }
});

const zoneSch = mongoose.Schema({
    id: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    name:{
      type: mongoose.Schema.Types.Mixed,
      required: true,
    }
  });

  const stateSch = mongoose.Schema({
    state_id: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    state_code: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    state_name:{
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    country_id:{
      type: mongoose.Schema.Types.Mixed,
      required: true,
    }
  });
  
  const citySch = mongoose.Schema({
    city_id: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    city_name:{
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    state_id: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    country_id:{
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    longitude: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    latitude: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  });
  
  

const countries= mongoose.model("Country", countrySch, "Country");
const zones= mongoose.model("Zones", zoneSch, "Zones");
const states= mongoose.model("State", stateSch, "State");
const cities= mongoose.model("City", citySch, "City");



module.exports = {countries, zones,states, cities};
