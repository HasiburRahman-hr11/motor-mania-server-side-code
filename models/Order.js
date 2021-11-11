const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: String,
    productName: String,
    productId: String
}, { timestamps: true });

const Order = model('Order', orderSchema);
module.exports = Order;