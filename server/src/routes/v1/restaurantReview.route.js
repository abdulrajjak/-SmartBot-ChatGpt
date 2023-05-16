const express = require("express");
const router = express.Router();
const restaurantReviewGen = require("../../controllers/restaurantReview.controller")

router.post("/", restaurantReviewGen.restaurantReviewGen)

module.exports = router;

