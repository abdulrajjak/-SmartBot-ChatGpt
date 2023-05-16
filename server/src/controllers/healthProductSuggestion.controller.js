const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService,productSuggestionService} = require('../services');
const { successResponse } = require("../helpers/methods")

const productSuggestion = catchAsync(async (req, res) => {
    const {age,health_disease,vegetarian}=req.body;
    const chatResponse = await productSuggestionService.productSuggestion(age,health_disease,vegetarian);
    res.status(httpStatus.OK).send(successResponse("success",chatResponse));
  });


  module.exports={
    productSuggestion
  }