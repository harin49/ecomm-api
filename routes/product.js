const express = require('express');

const controller = require('../controllers/productController');

const router = express.Router();

// GET Product by id
router.get('/product/:productId', controller.getProductById);

module.exports = router;