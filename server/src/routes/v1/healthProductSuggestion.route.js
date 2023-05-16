const express=require("express");
const router=express.Router();
const productSuggestion=require("../../controllers/healthProductSuggestion.controller")

router.post("/",productSuggestion.productSuggestion)

module.exports=router