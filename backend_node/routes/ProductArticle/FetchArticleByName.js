const express = require("express");
const router = express.Router();
const ProdArProArtiDetails = require('../../models/ProductArticle/AddArticle');

router.get('/getExamsarticledetails', async (req, res) => {
    console.log("Inside fetch article details controller");

    try {
        // Fetch articles with ptype as "Exams"
        const info = await ProdArProArtiDetails.find({ ptype: 'Exams' });

        if (info.length === 0) {
            res.send("No articles found for product type 'Exams'");
        } else {
            res.send(info);
        }

    } catch (error) {
        console.error("Error fetching article details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getCoursearticledetails', async (req, res) => {
    console.log("Inside fetch article details controller");

    try {
        // Fetch articles with ptype as "Exams"
        const info = await ProdArProArtiDetails.find({ ptype: 'Courses' });

        if (info.length === 0) {
            res.send("No articles found for product type 'Courses'");
        } else {
            res.send(info);
        }

    } catch (error) {
        console.error("Error fetching article details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getCollegesarticledetails', async (req, res) => {
    console.log("Inside fetch article details controller");

    try {
        // Fetch articles with ptype as "Exams"
        const info = await ProdArProArtiDetails.find({ ptype: 'Colleges' });

        if (info.length === 0) {
            res.send("No articles found for product type 'Colleges'");
        } else {
            res.send(info);
        }

    } catch (error) {
        console.error("Error fetching article details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getUniversityarticledetails', async (req, res) => {
    console.log("Inside fetch article details controller");

    try {
        // Fetch articles with ptype as "Exams"
        const info = await ProdArProArtiDetails.find({ ptype: 'Universitites' });

        if (info.length === 0) {
            res.send("No articles found for product type 'Universitites'");
        } else {
            res.send(info);
        }

    } catch (error) {
        console.error("Error fetching article details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getInstitutesarticledetails', async (req, res) => {
    console.log("Inside fetch article details controller");

    try {
        // Fetch articles with ptype as "Exams"
        const info = await ProdArProArtiDetails.find({ ptype: 'Institutes' });

        if (info.length === 0) {
            res.send("No articles found for product type 'Institutes'");
        } else {
            res.send(info);
        }

    } catch (error) {
        console.error("Error fetching article details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getHospitalsarticledetails', async (req, res) => {
    console.log("Inside fetch article details controller");

    try {
        // Fetch articles with ptype as "Exams"
        const info = await ProdArProArtiDetails.find({ ptype: 'Hospitals' });

        if (info.length === 0) {
            res.send("No articles found for product type 'Hospitals'");
        } else {
            res.send(info);
        }

    } catch (error) {
        console.error("Error fetching article details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getClinicarticledetails', async (req, res) => {
    console.log("Inside fetch article details controller");

    try {
        // Fetch articles with ptype as "Exams"
        const info = await ProdArProArtiDetails.find({ ptype: 'Clinic' });

        if (info.length === 0) {
            res.send("No articles found for product type 'Clinic'");
        } else {
            res.send(info);
        }

    } catch (error) {
        console.error("Error fetching article details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/getsparticledetails', async (req, res) => {
    console.log("Inside fetch article details controller");

    try {
        // Fetch articles with ptype as "Exams"
        const info = await ProdArProArtiDetails.find({ ptype: 'Static Pages' });

        if (info.length === 0) {
            res.send("No articles found for product type 'Static Pages'");
        } else {
            res.send(info);
        }
 
    } catch (error) {
        console.error("Error fetching article details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
