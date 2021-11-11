const Review = require('../models/Review');

// Create new Review
exports.createNewReview = async (req,res) =>{
    try {

        const newReview  = new Review(req.body);
        await newReview.save();

        res.status(201).json(newReview);

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}


// Get All Review
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt:1 })
        res.status(201).json(reviews);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


// Get Single Review
exports.getSingleReview = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review.findById(id);
        if (!review) {
            res.status(404).json({ message: 'Review not found' })
        }
        res.status(201).json(review);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


// Get Reviews by User Email 
exports.getReviewsByUserEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const reviews = await Review.find({ email: email }).sort({ createdAt:-1 });
        res.status(201).json(reviews);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Delete Review 
exports.deleteReview = async (req, res) => {
    const { id } = req.params;
    try {
        await Review.findByIdAndDelete(id)
        res.status(201).json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
