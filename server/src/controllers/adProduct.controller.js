const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { successResponse } = require("../helpers/methods")
const { adProductService } = require("../services");

const adProductGen = catchAsync(async (req, res) => {
    const { query} = req.body;
    const productResponse = await adProductService.adProductGen(query);
    res.status(httpStatus.OK).send(successResponse("success", productResponse));
});


module.exports = {
    adProductGen
}