const express = require("express");
const router = express.Router();
const userHistoryController = require("../../controllers/userHistory.controller");
const auth = require("../../middlewares/auth");

router.post("/", auth('createhistory'), userHistoryController.createhistory);

router.get("/userhistory", auth('getHistory'), userHistoryController.getHistory);

module.exports = router;