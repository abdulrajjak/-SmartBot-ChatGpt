const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { successResponse } = require("../helpers/methods")
const { interviewQuesGenService } = require("../services");

const interviewQuestionGen = catchAsync(async (req, res) => {
    const { query} = req.body;
    const reviewResponse = await interviewQuesGenService.interviewQuesGen(query);
    res.status(httpStatus.OK).send(successResponse("success", reviewResponse));
});


module.exports = {
    interviewQuestionGen
}