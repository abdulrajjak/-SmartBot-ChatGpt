
const { Configuration, OpenAIApi } = require("openai");

/**
 * Exercise
 * @param {boolean} isWeightLoss
 * @param {boolean} isInjuries
 * @param {string} injuries
 * @returns {Promise<any>}
 */
const exercise = async (payload) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
 const {isWeightLoss,isInjuries,injuries} = payload;
 const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Please give me some exercises for Weight ${isWeightLoss?'loss':'gain'} and I ${isInjuries?'have':'don`t have any'} ${isInjuries?injuries:''} injuries`,
    temperature: 0.6,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 1,
    presence_penalty: 1,
  });
 const data = response.data.choices[0].text;
 return data;
};



module.exports = {
    exercise
}