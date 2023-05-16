const express = require('express');
const httpStatus = require('http-status');
const { DiseaseList } = require('../../constants/disease');
const router = express.Router();
router.get("/",(req,res)=>res.status(httpStatus.OK).json({status:httpStatus.OK,data:DiseaseList}))

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Disease
 *   description: Disease List API
 */

/**
 * @swagger
 * /disease:
 *   get:
 *     summary: Get the disease
 *     tags: [Disease]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
