const { createNewOrder, getAllOrders, getSingleOrder, getOrdersByUserEmail, deleteOrder } = require('../controllers/orderControllers');

const router = require('express').Router();

// Create New Order
router.post('/create', createNewOrder);

// Get All Orders
router.get('/', getAllOrders);

// Get Orders by User Email
router.get('/user/:email', getOrdersByUserEmail);

// Get Single Order
router.get('/:id', getSingleOrder);

// Delete Order
router.delete('/:id' , deleteOrder);

module.exports = router;