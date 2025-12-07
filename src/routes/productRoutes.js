const express = require('express');
const router = express.Router();
const path = require('path');

const ProductController = require('../controllers/ProductController');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/addProduct', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/addProduct.html'));
});


router.get('/products', ProductController.getAllProducts);

module.exports = router;