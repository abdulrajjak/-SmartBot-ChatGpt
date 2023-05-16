const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { codeGenService} = require('../services');
const { successResponse } = require("../helpers/methods")

const codeGen = catchAsync(async (req, res) => {
    const {input}=req.body;
    const codeResponse = await codeGenService.codeGen(input);
    res.status(httpStatus.OK).send(successResponse("success",codeResponse));
  });


  module.exports={
    codeGen
  }