const { Configuration, OpenAIApi } = require('openai');

const codeGen = async (input) => {
    const apiConfig = new Configuration({ apiKey: process.env.OPENAI_API_KEY })
    const openai = new OpenAIApi(apiConfig)
    const result = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: input,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0,
        temperature: 0
    });
    return result.data
    }
module.exports = {
    codeGen
} 