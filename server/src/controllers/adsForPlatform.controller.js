const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { successResponse } = require("../helpers/methods")
const { generateAdService } = require("../services");

const adProductGen = catchAsync(async (req, res) => {
    const { brandName,productType, keywords, platform} = req.body;
    const productResponse = await generateAdService.generateAD(brandName,productType, keywords, platform);
    res.status(httpStatus.OK).send(successResponse("success", productResponse));
});


module.exports = {
    adProductGen
}