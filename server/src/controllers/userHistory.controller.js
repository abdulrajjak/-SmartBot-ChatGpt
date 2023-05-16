const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService,createUserHistoryService} = require('../services');
const { successResponse } = require("../helpers/methods")



const createhistory =catchAsync(async (req, res) => {
    const {image,response,title}=req.body;
    const user=req.user._id;
    console.log(user,image,response)
    const chatResponse = await createUserHistoryService.createhistory(image,response,title,user);
    return res.status(httpStatus.CREATED).json({status:httpStatus.CREATED,message:"Chat created",data:chatResponse})
  });

const getHistory = catchAsync(async (req, res) => {
    const user=req.user._id;
    const historyResponse = await createUserHistoryService.getHistory(user);
    return res.status(httpStatus.CREATED).json({status:httpStatus.CREATED,message:"history fetched successfully",data:historyResponse})
  });
  

  module.exports={
    createhistory,
    getHistory
  }



