const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService, chatService, friendService } = require('../services');
const { successResponse } = require("../helpers/methods");
const ChatHistory = require('../models/chat.history.model');


const chat = catchAsync(async (req, res) => {
  const { chat, id, name } = req.body;
  const chatResponse = await friendService.chat(chat);
  // if (id) {
  //   await ChatHistory.findByIdAndUpdate(id, { chat:chat+chatResponse.choices[0].text, name })
  // } else {
  //   await ChatHistory.create({ chat:chat+chatResponse.choices[0].text, name, user: req.user._id })
  // }
  res.status(httpStatus.OK).send(successResponse("success", chatResponse));
});


module.exports = {
  chat
}