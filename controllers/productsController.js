const Product = require('../models/Product');

// Create New Product
exports.createNewProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


// Get All Products
exports.getAllProducts = async (req, res) => {
    try {

        const products = await Product.find().sort({ createdAt:-1 });
        res.status(200).json(products);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


// Get Single product
exports.getSingleProduct = async (req, res) => {
    const { id } = req.params;
    try {

        const product = await Product.findById(id);
        if (!product) {
            return res.status(400).json({ message: 'Product not found!' });
        }

        res.status(200).json(product);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}