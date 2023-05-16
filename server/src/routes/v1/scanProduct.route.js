const express = require("express");
const router = express.Router();
const scanProductcontroler = require("../../controllers/scanProduct.controller");
const auth=require("../../middlewares/auth")
router.post('/scan', auth('productScan'), scanProductcontroler.productScan);
router.get('/product', scanProductcontroler.dishScan)
//.get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: ProductScan
 *   description: Scan a Product details using image 
 */

/**
 * @swagger
 * /scanproduct/scan:
 *   post:
 *     summary: Image URL
 *     tags: [ProductScan]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: string
 *             required:
 *               - img
 *             properties:
 *               img:
 *                 type: string
 *             example:
 *               img: https://3.bp.blogspot.com/_pBKkjtpLIUc/TUYyYTejvwI/AAAAAAAAAKY/qT21BdN4mTU/s1600/eels_page.jpg
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *       "400":
 *         $ref: '#/components/responses'
 */
