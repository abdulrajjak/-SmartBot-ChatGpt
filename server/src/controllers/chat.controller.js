const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService,chatService} = require('../services');
const { successResponse } = require("../helpers/methods")

const chat = catchAsync(async (req, res) => {
    const {chat}=req.body;
    const chatResponse = await chatService.chat(chat);
    res.status(httpStatus.OK).send(successResponse("success",chatResponse));
  });

  const createChat = catchAsync(async (req, res) => {
    const {name,chat}=req.body;
    const user=req.user._id;
    const chatResponse = await chatService.createChat(name,chat,user);
    return res.status(httpStatus.CREATED).json({status:httpStatus.CREATED,message:"Chat created",data:chatResponse})
  });

  const updateChat = catchAsync(async (req, res) => {
    const {name}=req.body;
    const {id}=req.params;
    const chatResponse = await chatService.updateChat(name,id);
    return res.status(httpStatus.CREATED).json({status:httpStatus.CREATED,message:"Chat updated",data:chatResponse})
  });
  
  const chatHistory = catchAsync(async (req, res) => {
    const user=req.user._id;
    const chatResponse = await chatService.chatHistory(user);
    return res.status(httpStatus.CREATED).json({status:httpStatus.CREATED,message:"Chat updated",data:chatResponse})
  });


  module.exports={
    chat,
    createChat,
    updateChat,
    chatHistory
  }