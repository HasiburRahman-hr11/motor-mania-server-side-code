const { createNewUser, getUserByEmail, getAllUsers, updateUser, getUserById, deleteUser } = require('../controllers/userControllers');

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

// Update User
router.delete('/:id' , deleteUser);

module.exports = router;