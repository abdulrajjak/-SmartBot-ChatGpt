const express = require("express");
const router = express.Router();
const adProductGen = require("../../controllers/adsForPlatform.controller")

router.post("/", adProductGen.adProductGen)

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: AdGenerator
 *   description: AdGenerator APIs
 */
/**
* @swagger
* /generateAd:
*   post:
*     summary:  Generate ad based on provided parameters
*     tags: [AdGenerator]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - brandName
*               - productName
*               - keywords
*               - platform
*             properties:
*               chat:
*                 type: string
*               brandName:
*                type: string
*               productName:
*                type: string
*               keywords:
*                 type: array
*               items:
*                   type: string
*               platform:
*                 type: string
*                 enum: ["facebook", "google", "instagram", "tiktok"]
*             example:
*               brandName: lotte
*               productName: glasses
*               keywords: ["handpainted","fragile"]
*               platform: "facebook"
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