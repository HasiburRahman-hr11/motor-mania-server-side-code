const { createNewProduct, getAllProducts, getSingleProduct, updateProduct } = require('../controllers/productsController');

const router = require('express').Router();

// Create New Product
router.post('/create' , createNewProduct);

// Get All Product
router.get('/' , getAllProducts);

// Get Single Product
router.get('/:id' , getSingleProduct);

// Update a Product
router.put('/:id' , updateProduct);

module.exports = router;