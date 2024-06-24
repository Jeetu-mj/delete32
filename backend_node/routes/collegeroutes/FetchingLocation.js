// Fetching all course mapping details
const express = require("express");
const router = express.Router();
const {countries, zones, states, cities} = require('../../models/college/Location')



router.get('/getallcountries', async (req, res) => {
    try {
        // Fetch all short names from the examnameDetails collection
        const allcountries = await countries.distinct('country_name');

        // Respond with the array of short names
        res.status(200).json({ allcountries });
    } catch (error) {
        console.error("Error fetching details of Countries:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getallzones', async (req, res) => {
    try {
        // Fetch all short names from the examnameDetails collection
        const Zones = await zones.distinct('name');

        // Respond with the array of short names
        res.status(200).json({ Zones });
    } catch (error) {
        console.error("Error fetching details of Zones:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getallstates', async (req, res) => {
    try {
        // Fetch all states with country_id equal to 101
        const allstates = await states.find({ country_id: 101 }).distinct('state_name');

        // Respond with the array of state names
        res.status(200).json({ allstates });
    } catch (error) {
        console.error("Error fetching details of States:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get('/getallcities', async (req, res) => {
    try {
        // Fetch all short names from the examnameDetails collection
        const allcities = await cities.distinct('city_name');

        // Respond with the array of short names
        res.status(200).json({ allcities });
    } catch (error) {
        console.error("Error fetching details of Cities:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
