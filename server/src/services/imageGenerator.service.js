const { Configuration, OpenAIApi } = require("openai");

const imageGen1 = async (query) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createImage({
        prompt: query,
        n: 1,
        size: "256x256"
    });
    return response.data
};

module.exports = {
    imageGen1
}