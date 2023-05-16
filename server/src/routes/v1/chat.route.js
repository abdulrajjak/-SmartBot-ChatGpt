const express = require("express");
const router = express.Router();
const chatController = require("../../controllers/chat.controller");
const auth = require("../../middlewares/auth");

router.post("/", chatController.chat)

router.post("/create", auth('createChat'), chatController.createChat);

router.patch("/:id", auth('updateChat'), chatController.updateChat);

router.get("/history", auth('getChatHistory'), chatController.chatHistory);

module.exports = router;




/**
 * @swagger
 * tags:
 *   name: SmartChatBot
 *   description: chat APIs
 */
/**
 * @swagger
 * tags:
 *   name: Chat
 *   description: Chat APIs
 */

/**
 * @swagger
 * /chat:
 *   post:
 *     summary: Ask your question
 *     tags: [SmartChatBot]
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
 *               chat: What is Coding?
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

/** 
 * @swagger
 * /chat/create:
 *   post:
 *     summary: Create chat
 *     tags: [Chat]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - chat
 *             properties:
 *               chat:
 *                 type: string
 *             example:
 *               name: Chat1
 *               chat: You
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
/** 
 * @swagger
 * /chat/{id}:
 *   patch:
 *     summary: Update chat
 *     tags: [Chat]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Chat id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *             example:
 *               name: My Chat
 *     responses:
 *       "201":
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *       "400":
 *         $ref: '#/components/responses/'
 */
/**
 * @swagger
 * /chat:
 *   post:
 *     summary: Ask your question
 *     tags: [SmartChatBot]
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
 *               chat: What is Coding?
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

/** 
 * @swagger
 * /chat/history:
 *   get:
 *     summary: Chat History
 *     tags: [Chat]
 *     security:
 *      - bearerAuth: []
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
