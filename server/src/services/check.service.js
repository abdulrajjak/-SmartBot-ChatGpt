const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const Token = require('../models/token.model');
const ApiError = require('../utils/ApiError');
const { Configuration, OpenAIApi } = require("openai");
/**
 * grammarcheck
 * @param {string} sentence
 * @returns {Promise<any>}
 */
const grammarCheck = async (sentence) => {
    sentence = `Correct this to standard English:${sentence}`
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: sentence,
        temperature: 0,
        max_tokens: 100,
        top_p: 1.0,  
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
    return response.data
  };



  module.exports={
    grammarCheck
  }