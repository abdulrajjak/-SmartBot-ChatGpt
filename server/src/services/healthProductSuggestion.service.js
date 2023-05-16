const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const Token = require('../models/token.model');
const ApiError = require('../utils/ApiError');
const { Configuration, OpenAIApi } = require("openai");
/**
 *  health product suggestion
 * @param {string} age
 * @param {string} health_disease
 * @param {boolean} vegetarian
 * @returns {Promise<any>}
 */

const productSuggestion = async (age,health_disease,vegetarian) => {
    const prompt = health_disease ? `Hello chat GPT, list 20 healthy ${vegetarian ? "vegetarian": "non-vegetarian"} products name which can be consumed in  ${health_disease} and my age is ${age} ` : `list healthy products names according to my age ${age} `
    console.log(prompt)
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["#", ";"],
      });

      response.data.choices[0].text = response.data.choices[0].text.trim()
      return response.data
  };




  module.exports={
    productSuggestion
  }