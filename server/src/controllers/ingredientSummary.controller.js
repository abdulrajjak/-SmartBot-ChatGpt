const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService,ingredientSummaryService} = require('../services');
const { successResponse } = require("../helpers/methods")

const ingredientSummary = catchAsync(async (req, res) => {
    const {ingredients}=req.body;
    const chatResponse = await ingredientSummaryService.ingredientSummary(ingredients);
    res.status(httpStatus.OK).send(successResponse("success",chatResponse));
  });


  module.exports={
    ingredientSummary
  }