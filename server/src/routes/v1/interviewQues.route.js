const express = require("express");
const router = express.Router();
const interviewQuestionGen = require("../../controllers/interviewQues.controller")

router.post("/", interviewQuestionGen.interviewQuestionGen)

module.exports = router;

