const express=require("express");
const router=express.Router();
const friendController=require("../../controllers/friend.controller");
const auth = require("../../middlewares/auth");

router.post("/",auth("getChatHistory"),friendController.chat);

module.exports=router;


/**
 * @swagger
 * tags:
 *   name: SmartChatBot
 *   description: chat APIs
 */

/**
 * @swagger
 * /friend:
 *   post:
 *     summary: Let's chat with your friend
 *     tags: [SmartChatBot]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - chat
 *             properties:
 *               chat:
 *                 type: string
 *             example:
 *               chat: Hi,How r u?
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
