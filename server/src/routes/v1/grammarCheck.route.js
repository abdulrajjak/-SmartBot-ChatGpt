const express=require("express");
const router=express.Router();
const grammarCheckController=require("../../controllers/grammarcheck.controller")

router.post("/",grammarCheckController.grammarCheck)

module.exports=router;


/**
 * @swagger
 * tags:
 *   name: SmartChatBot
 *   description: grammarCheck APIs
 */

/**
 * @swagger
 * /grammarcheck:
 *   post:
 *     summary: sentence
 *     tags: [SmartChatBot]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sentence
 *             properties:
 *               sentence:
 *                 type: string
 *             example:
 *               sentence: She no went to the market.
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *       "400":
 *         $ref: '#/components/responses/'
 */
