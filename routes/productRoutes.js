const { createNewProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/productsController');

const router = require('express').Router();

// Create New Product
router.post('/create' , createNewProduct);

// Get All Product
router.get('/' , getAllProducts);

// Get Single Product
router.get('/:id' , getSingleProduct);

// Update a Product
router.put('/:id' , updateProduct);

// Delete a Product
router.delete('/:id' , deleteProduct);

module.exports = router;