const { createNewUser, getSingleUser } = require('../controllers/userControllers');

const router = require('express').Router();

// Create New User
router.post('/create', createNewUser);

// Get User by Email
router.get('/:email' , getSingleUser);

module.exports = router;