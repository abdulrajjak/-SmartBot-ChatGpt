const express = require("express");
const router = express.Router();
const imageGenController = require("../../controllers/imageGenerator.controller")

router.post("/", imageGenController.imageGen)

module.exports = router;



/**
 * @swagger
 * tags:
 *   name: SmartChatBot
 *   description: chat APIs
 */

/**
 * @swagger
 * /imagegen:
 *   post:
 *     summary: Ask your question
 *     tags: [SmartImageGenerator]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - input
 *               - size
 *             properties:
 *               input:
 *                 type: string
 *               size:
 *                 type: string
 *             example:
 *               input: A flower
 *               size: 1024x1024
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
