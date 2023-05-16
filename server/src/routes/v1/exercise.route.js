const express = require("express");
const router = express.Router();
const exerciseController = require("../../controllers/exercise.controller");
const auth = require("../../middlewares/auth");

router.post("/", exerciseController.exercise)

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Exercise
 *   description: Exercises APIs
 */
/**
 * @swagger
 * /exercise:
 *   post:
 *     summary: Exercise Guide
 *     tags: [Exercise]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - isWeightLoss
 *             properties:
 *               chat:
 *                 isWeightLoss: boolean
 *                 isInjuries: boolean
 *                 injuries: string
 *             example:
 *               isWeightLoss: true
 *               isInjuries: true
 *               injuries: back pain
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