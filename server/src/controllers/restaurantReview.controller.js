const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { successResponse } = require("../helpers/methods")
const { restaurantReviewGenService } = require("../services");

const restaurantReviewGen = catchAsync(async (req, res) => {
    const { query} = req.body;
    const reviewResponse = await restaurantReviewGenService.restaurantReview(query);
    res.status(httpStatus.OK).send(successResponse("success", reviewResponse));
});


module.exports = {
    restaurantReviewGen
}