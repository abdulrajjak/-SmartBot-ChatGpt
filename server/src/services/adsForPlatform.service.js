const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const Token = require('../models/token.model');
const ApiError = require('../utils/ApiError');
const { Configuration, OpenAIApi } = require("openai");
/**
 *  ingredient summary
 * @param {string} brandName
 * @param {string} productType
 * @param {array} keyword
 * @param {string}  platform
 * @returns {Promise<any>}
 */

const generateAD = async (brandName,productType, keywords, platform) => {
  //  const prompt = `Hello ChatGPT, please generate a ${platform} ad for the brand named ${brandName}, whose product is ${productType}. Please include the following keywords in the ad copy: ${keywords}. The ad should have an eye-catching headline`
    const prompt2 = `Hello chatgpt, please generate an ad for the brand named ${brandName} whose product or service is ${productType}. Use the keywords ${keywords} and create an ad with an  catchy and vibrant headline and primary text that's at least six lines long for ${platform}. Thank you!`
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      })
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt2,
        temperature: 0.8,
        max_tokens: 2000,
        top_p: 0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["#", ";"],     
       });

       response.data.choices[0].text = response.data.choices[0].text.trim()

       const splitPoint = "\n\nPrimary Text:\n"; // define the split point
       const headlinePrefix = "Headline: ";
       const [headlinePart, primaryText] = response.data.choices[0].text.split(splitPoint); 
       
       const headline = headlinePart.replace(headlinePrefix, '');

     const data = {
        headline :headline,
        primaryText : primaryText
     } 
       return data
    }


  module.exports={
    generateAD
  }