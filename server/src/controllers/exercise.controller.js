const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {exerciseService} = require('../services');
const { successResponse } = require("../helpers/methods");

const exercise = catchAsync(async (req, res) => {
    const payload={
        isWeightLoss:req.body.isWeightLoss||false,
        isInjuries:req.body.isInjuries||false,
        injuries:req.body.injuries||""
    }
    const chatResponse = await exerciseService.exercise(payload)
    res.status(httpStatus.OK).send(successResponse("success",chatResponse));
  });


  module.exports={
    exercise
  }