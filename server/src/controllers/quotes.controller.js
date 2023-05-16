const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {quotesService} = require('../services');
const { successResponse } = require("../helpers/methods");

const quotes = catchAsync(async (req, res) => {
    const payload={
        isWeightLoss:req.body.isWeightLoss||false
    }
    const chatResponse = await quotesService.quotes(payload)
    res.status(httpStatus.OK).send(successResponse("success",chatResponse));
  });


  module.exports={
    quotes
  }