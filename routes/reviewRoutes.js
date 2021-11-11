const { createNewReview, getAllReviews, getReviewsByUserEmail, getSingleReview, deleteReview } = require('../controllers/reviewControllers');

const router = require('express').Router();

// Create New Review
router.post('/create', createNewReview);

// Get All Reviews
router.get('/', getAllReviews);

// Get Reviews by User Email
router.get('/user/:email', getReviewsByUserEmail);

// Get Single Review
router.get('/:id', getSingleReview);

// Delete Review
router.delete('/:id' , deleteReview);

module.exports = router;