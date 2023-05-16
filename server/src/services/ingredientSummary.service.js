const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const Token = require('../models/token.model');
const ApiError = require('../utils/ApiError');
const { Configuration, OpenAIApi } = require("openai");
/**
 *  ingredient summary
 * @param {string} ingredients
 * @returns {Promise<any>}
 */

const ingredientSummary = async (ingredients) => {
    const prompt = `Hello chatgpt, please provide a short summary for each of the ingredients ${ingredients} from a healthy or non-healthy consuming prespective and add emoji of each ingredients in front of it`
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      })
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


      let paragraph = response.data.choices[0].text
      function convertParagraphToArrayOfObjects(paragraph) {
        const lines = paragraph.trim().split('\n\n');
        const objects = lines.map(line => {
          const [name, description] = line.split(': ');
          return { name, description };
        });
        return objects;
      }
     const foodItems = convertParagraphToArrayOfObjects(paragraph);


 //to add new feild to the objects     
 for (let i = 0; i < foodItems.length; i++) {
  const ingredient = foodItems[i];
  const description = ingredient.description.toLowerCase();

  if (description.includes("non-healthy") || description.includes("not healthy") ||description.includes("unhealthy") || description.includes("not a healthy") ) {
    ingredient.healthy = false;
  } else {
    ingredient.healthy = true;
  }
}
      console.log(foodItems)
      return foodItems
  };




  module.exports={
    ingredientSummary
  }