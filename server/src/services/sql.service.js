const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const Token = require('../models/token.model');
const ApiError = require('../utils/ApiError');
const { Configuration, OpenAIApi } = require("openai");
/**
 * Sql Genrator
 * @param {string} query
 * @returns {Promise<any>}
 */
const generateSqlQuery = async (query) => {
    query = `create a sql ${query}`
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: query,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["#", ";"],
      });

      response.data.choices[0].text = response.data.choices[0].text.trim()
      return response.data
  };






  module.exports={
    generateSqlQuery
  }