const express = require("express");

const router = new express.Router();

const authController = require("../controllers/auth");
const flatController = require("../controllers/flats");
// Middleware function to validate the access token and authorize the request


router.post("/addNewFlats", flatController.addNewFlats)
router.get("/getAllFlats", flatController.getAllFlats)
router.get("/searchFlats", flatController.SearchFlats)



module.exports = router;
