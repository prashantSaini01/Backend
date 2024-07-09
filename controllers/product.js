const Product = require('../models/product');

// Create a product
const createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json({ newProduct });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

// Get a product by id
const getProductById = async (req, res) => {
    const usid = req.params.id;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

// Update a product by id
const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

// Delete a product by id
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};