const tesseract = require('tesseract.js');
const fs = require('fs');
const Clarifai = require('clarifai');
const { Configuration, OpenAIApi } = require('openai');
const path = require('path');
const apiConfig = new Configuration({ apiKey: process.env.OPENAI_API_KEY })
const openai = new OpenAIApi(apiConfig)
const userHistory = require("../models/user.history.model")
const config = require("../config/config")




const productScan = async (req, res) => {
    try {
        let img = req.body.img
        let imgPath = null;

        if (!img && !req.files) {
            return { status: 400, message: " File required" }
        }
        if (req.files) {
            if (!req.files.img) {
                return { status: 400, message: " File required" }
            }
            // if (req.files.img.mimetype !== "image/jpeg") {
            //     return { status: 422, message: "File format should be jpg" }
            // }

        }
        let user = req.user;
        // console.log(req.user)
        const result = await tesseract.recognize(img ? img : req.files.img.data, "eng", {  logger: e => { console.log(`e========${JSON.stringify(e)}`) } })
        

        const txt = result.data.text

        const foodName = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: ` Extract food title if exist otherwise generate prouct title based on the ingredients  ` + txt,
            temperature: 0.5,
            max_tokens: 200,
            n: 1,
        });
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `extract ingredients names ` + txt,
            temperature: 0.5,
            max_tokens: 200,
            n: 1,
        });


       // let text = `Hey,My name is ${user.name} age ${user.age} gender ${user.gender} height ${user.height}" and my current weight is ${user.weight}. And now i want to ${user.disease}. So is ${foodName.data.choices[0].text} good to consume based on their these ingredients ${response.data.choices[0].text} if yes or not then why? and also include some Exercise and meal plan for me`;


        const healthReivew = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `generate health review, is this product is good to consume based on ingredients and why  `+txt,
            temperature: 0.5,
            max_tokens: 200,
            n: 1,

        });

        if (req.files) {
            let newFileName = `product_${Date.now()}_${req.files.img.name}`;
            let baseUrl = `${path.join(__dirname, "../../public/uploads/")}`
            if (!fs.existsSync(baseUrl))
                fs.mkdirSync(baseUrl, { recursive: true })
            let imagePath = `${baseUrl}${newFileName}`;
            fs.writeFileSync(imagePath, req.files.img.data, (err) => { // write the image buffer to a file
                if (err) {
                    throw new Error("Error while file uploading")
                }
            });

            // let localUrl=`http://localhost:${config.port}/`

            imgPath = `https://chatgpt-smartbot-api.softprodigyphp.in/uploads/${newFileName}`

        }

        await userHistory.create({ user: req.user._id, title: foodName.data.choices[0].text, image: imgPath ? imgPath : img, response: healthReivew.data.choices[0].text })
        return {
            ingredent: response.data.choices,
            summary: healthReivew.data.choices,
            title: foodName.data.choices,
            image: imgPath ? imgPath : img
        }
    } catch (error) {
        throw error
    }
}





const DishScan = async (req) => {
    try {

        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "generate food name " + 'https://www.bing.com/images/search?view=detailV2&ccid=RDVQ1h%2bG&id=7B596130DEC95B86AAD72D0D033FF7ED1B42CDD2&thid=OIP.RDVQ1h-GJxW66978tuvQugHaHa&mediaurl=https%3a%2f%2fwww.meijer.com%2fcontent%2fdam%2fmeijer%2fproduct%2f0070%2f88%2f2082%2f60%2f0070882082608_2_A1C1_1200.png&exph=1200&expw=1200&q=Flavour+Milk&simid=608043781911684591&FORM=IRPRST&ck=97499F3BE676E4E4CAAD7340F9352B4C&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0',
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        });
        console.log(`response ${response}`)
        return response.data

        // const app = new Clarifai.App({
        //     apiKey: process.env.CLARIFAI
        // })
        // console.log(`appp === ${app}`)
        // const img = 'https://www.bing.com/images/search?view=detailV2&ccid=qdgyQG7v&id=8C3E54C4CEBA054E70365A5C4EB4E6C48982CB26&thid=OIP.qdgyQG7v8pO9CS7eMT0T9QHaHa&mediaurl=https%3a%2f%2fwww.foodedge.com%2fwp-content%2fuploads%2f2021%2f04%2f552561-01.jpg&exph=1200&expw=1200&q=Dairy+Milk+Chocolate&simid=608055056197433533&FORM=IRPRST&ck=ABEDBB28552991B5386E822A2E8C4206&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0'

        // const result = app.models.predict(Clarifai.FOOD_MODEL, 'https://www.bing.com/images/search?view=detailV2&ccid=qdgyQG7v&id=8C3E54C4CEBA054E70365A5C4EB4E6C48982CB26&thid=OIP.qdgyQG7v8pO9CS7eMT0T9QHaHa&mediaurl=https%3a%2f%2fwww.foodedge.com%2fwp-content%2fuploads%2f2021%2f04%2f552561-01.jpg&exph=1200&expw=1200&q=Dairy+Milk+Chocolate&simid=608055056197433533&FORM=IRPRST&ck=ABEDBB28552991B5386E822A2E8C4206&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0')
        //     .then(res => {
        //         const concepts = res.outputs[0].data.concepts;
        //         // concepts.forEach(concept => {
        //         console.log(`concept name ${concepts}`)
        //         // });
        //     }).catch(err => {
        //         console.log(`err ${err}`)
        //     })
        // console.log(`result==    == ${JSON.stringify(result)}`)
    } catch (error) {
        throw error
    }
}

module.exports = {
    productScan, DishScan
}