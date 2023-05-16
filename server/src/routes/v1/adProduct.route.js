const express = require("express");
const router = express.Router();
const adProductGen = require("../../controllers/adProduct.controller")

router.post("/", adProductGen.adProductGen)

module.exports = router;

