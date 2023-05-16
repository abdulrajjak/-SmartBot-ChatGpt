const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService,sqlGeneratorService} = require('../services');
const { successResponse } = require("../helpers/methods")

const sqlGenerator = catchAsync(async (req, res) => {
    const {query}=req.body;
    const sqlResponse = await sqlGeneratorService.generateSqlQuery(query);
    res.status(httpStatus.OK).send(successResponse("success",sqlResponse));
  });


  module.exports={
    sqlGenerator
  }