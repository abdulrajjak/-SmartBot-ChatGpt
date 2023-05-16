const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService,grammarCheckService} = require('../services');
const { successResponse } = require("../helpers/methods")

const grammarCheck = catchAsync(async (req, res) => {
    const {sentence} =req.body;
    const checkResponse = await grammarCheckService.grammarCheck(sentence);
    res.status(httpStatus.OK).send(successResponse("success",checkResponse));
  });


  module.exports={
    grammarCheck
  }