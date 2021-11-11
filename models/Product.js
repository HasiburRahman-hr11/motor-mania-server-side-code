const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    year: {
        type: String
    },
    type: {
        type: String
    },
    engineType: {
        type: String
    },
    topSpeed: {
        type: String
    },
    displacement: {
        type: String,
        required: true
    },
    power: {
        type: String
    },
    stroke: {
        type: String
    },
    description: {
        type: String
    },
    thumbnail: {
        type: String
    }
}, { timestamps: true });

const Product = model('Product', productSchema);
module.exports = Product;