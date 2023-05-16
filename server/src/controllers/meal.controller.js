const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { mealService} = require('../services');
const { successResponse } = require("../helpers/methods");

const meal = catchAsync(async (req, res) => {
    const payload={
        age:req.body.age, 
        increase:req.body.increase, 
        amount:req.body.amount||5, 
        unit:req.body.unit||"kg", 
        meal:req.body.meal||"Indian", 
        vegetarian:req.body.vegetarian||true
    }
    const chatResponse = await mealService.meal(payload)
    res.status(httpStatus.OK).send(successResponse("success",chatResponse));
  });


  module.exports={
    meal
  }