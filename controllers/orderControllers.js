const Order = require('../models/Order');


// Create New Order
exports.createNewOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


// Get All Order
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 })
        res.status(201).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


// Get Single Order
exports.getSingleOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id);
        if (!order) {
            res.status(404).json({ message: 'Order not found' })
        }
        res.status(201).json(order);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


// Get Orders by User Email 
exports.getOrdersByUserEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const orders = await Order.find({ email: email }).sort({ createdAt: -1 });
        res.status(201).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// Delete Order 
exports.deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        await Order.findByIdAndDelete(id)
        res.status(201).json({ message: 'Order deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


// Update a Order
exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    try {

        const order = await Order.findById(id);
        if (!order) {
            return res.status(400).json({ message: 'Order not found!' });
        }

        const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedOrder);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}