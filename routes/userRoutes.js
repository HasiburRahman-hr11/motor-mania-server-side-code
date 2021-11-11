const { createNewUser, getUserByEmail, getAllUsers, updateUser, getUserById } = require('../controllers/userControllers');

const router = require('express').Router();

// Create New User
router.post('/create', createNewUser);

// Get User by Email
router.get('/:email' , getUserByEmail);

// Get User by id
router.get('/find/:id' , getUserById);

// get All Users
router.get('/' , getAllUsers);


// Update User
router.put('/:id' , updateUser);

module.exports = router;