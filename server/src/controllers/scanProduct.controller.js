const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { successResponse } = require("../helpers/methods")
const { productScanService } = require("../services");

const productScan = catchAsync(async (req, res) => {
  const reviewResponse = await productScanService.productScan(req,res);
    res.status(httpStatus.OK).send(successResponse("success", reviewResponse));
});


const dishScan = catchAsync(async (req, res) => {
  const reviewResponse = await productScanService.DishScan(req);
    res.status(httpStatus.OK).send(successResponse("success", reviewResponse));
});


module.exports = {
    productScan,dishScan
}