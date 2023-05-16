const express=require("express");
const router=express.Router();
const ingredientSummary=require("../../controllers/ingredientSummary.controller")

router.post("/",ingredientSummary.ingredientSummary)

module.exports=router