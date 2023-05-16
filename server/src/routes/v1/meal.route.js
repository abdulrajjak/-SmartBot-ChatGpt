const express = require("express");
const router = express.Router();
const mealController = require("../../controllers/meal.controller");
const auth = require("../../middlewares/auth");

router.post("/", mealController.meal)

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Meal
 *   description: Meal APIs
 */
/**
 * @swagger
 * /meal:
 *   post:
 *     summary: Meal Guide
 *     tags: [Meal]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - age
 *               - increase
 *               - amount
 *               - unit
 *               - meal
 *               - vegetarian
 *             properties:
 *                 age: number
 *                 increase: boolean
 *                 amount: number
 *                 unit: string
 *                 meal: string
 *                 vegetarian: boolean
 *             example:
 *                 age: 22
 *                 increase: true
 *                 amount: 10
 *                 unit: kg
 *                 meal: Indian
 *                 vegetarian: true
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