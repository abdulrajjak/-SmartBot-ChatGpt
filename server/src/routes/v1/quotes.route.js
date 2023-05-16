const express = require("express");
const router = express.Router();
const quotesController = require("../../controllers/quotes.controller");
const auth = require("../../middlewares/auth");

router.post("/", quotesController.quotes)

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Quotes
 *   description: Quotes APIs
 */
/**
 * @swagger
 * /quotes:
 *   post:
 *     summary: Generate a quotes
 *     tags: [Quotes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - isWeightLoss
 *             properties:
 *                 isWeightLoss: boolean
 *             example:
 *               isWeightLoss: true
 *     responses:
 *       "201":
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *       "400":
 *         $ref: '#/components/responses/'
 */
