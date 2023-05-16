const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const Token = require('../models/token.model');
const ApiError = require('../utils/ApiError');
const { Configuration, OpenAIApi } = require("openai");
const ChatHistory = require('../models/chat.history.model');

/**
 * Chat
 * @param {string} chat
 * @returns {Promise<any>}
 */
const chat = async (chat) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: chat,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.2,
    presence_penalty: 0,
  });
  return response.data
};


/**
* Chat
* @param {string} name
* @param {string} chat
* @returns {Promise<any>}
*/
const createChat = async (name, chat, user) => {
  return await ChatHistory.create({ name, chat, user });
};

/**
* Chat
* @param {string} name
* @returns {Promise<any>}
*/
const updateChat = async (name, _id) => {
  return await ChatHistory.findByIdAndUpdate(_id, { name }, { new: true })
};


/**
* Chat
* @param {string} name
* @returns {Promise<any>}
*/
const chatHistory = async (user) => {
  return await ChatHistory.find({user}).populate("User")
};





module.exports = {
  chat,
  createChat,
  updateChat,
  chatHistory
}