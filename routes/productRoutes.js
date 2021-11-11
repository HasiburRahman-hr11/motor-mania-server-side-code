const { createNewProduct, getAllProducts, getSingleProduct } = require('../controllers/productsController');

const router = require('express').Router();

// Create New Product
router.post('/create' , createNewProduct);

// Get All Product
router.get('/' , getAllProducts);

// Get Single Product
router.get('/:id' , getSingleProduct);

module.exports = router;