const express=require("express");
const router=express.Router();
const sqlGeneratorController=require("../../controllers/sqlgenerator.controller")

router.post("/",sqlGeneratorController.sqlGenerator)

module.exports=router;



/**
 * @swagger
 * tags:
 *   name: SmartChatBot
 *   description: sqlGenerator APIs
 */

/**
 * @swagger
 * /sqlgenerator:
 *   post:
 *     summary: query
 *     tags: [SmartChatBot]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - query
 *             properties:
 *               query:
 *                 type: string
 *             example:
 *               query:  find average salary of all employees in the employees table
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
