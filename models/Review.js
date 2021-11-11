const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Review = model('Review', reviewSchema);
module.exports = Review;