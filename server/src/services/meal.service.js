
const { Configuration, OpenAIApi } = require("openai");

/**
 * Meal
 * @param {string} chat
 * @returns {Promise<any>}
 */
const meal = async (payload) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
 const { age, increase, amount, unit, meal, vegetarian } = payload;
 const prompt = `Hello chat GPT my age is ${age} and I want to ${increase ? "increase" : "decrease"} my weight by ${amount} ${unit}, please suggest me daily ${meal} ${vegetarian ? "vegetarian": "non-vegetarian"} meal `;
 const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: prompt,
  // instruction: prompt,
  max_tokens: 1000,

 });
 const data = response.data.choices[0].text;
 return data;
};



module.exports = {
  meal
}