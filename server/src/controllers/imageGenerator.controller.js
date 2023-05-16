const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { successResponse } = require("../helpers/methods")
const { imageGeneratorService } = require("../services");

const imageGen = catchAsync(async (req, res) => {
    const { query ,size} = req.body;
    const imageResponse = await imageGeneratorService.imageGen1(query,size);
    res.status(httpStatus.OK).send(successResponse("success", imageResponse));
});


module.exports = {
    imageGen
}