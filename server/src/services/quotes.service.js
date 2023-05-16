
const { Configuration, OpenAIApi } = require("openai");

/**
 * Exercise
 * @param {string} chat
 * @returns {Promise<any>}
 */
const quotes = async (payload) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
 const {isWeightLoss} = payload;
 const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `give me a quote want to weight ${isWeightLoss?'loss':'gain'}`,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.2,
    presence_penalty: 0,
  });
 const data = response.data.choices[0].text;
 return data;
};



module.exports = {
    quotes
}