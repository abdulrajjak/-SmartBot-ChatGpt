const express = require('express');
const router = express.Router();
const codeGencontroller = require('./../../controllers/codeGenerator.controller')

router.post("/", codeGencontroller.codeGen);
module.exports = router;


/**
 * @swagger
 * tags:
 *   name: SmartCodeGenerator
 *   description: code generator APIs
 */

/**
 * @swagger
 * /codegen:
 *   post:
 *     summary: Ask your question
 *     tags: [SmartCodeGenerator]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - input
 *             properties:
 *               input:
 *                 type: string
 *             example:
 *               input: write a program of fibonacci series in javascript?
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
