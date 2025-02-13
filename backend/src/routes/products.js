const Product = require('../models/Product');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
})

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
})

router.delete('/:id', async (req, res) => {
    const data = await Product.findOneAndDelete({ _id: req.params.id })
    res.send(data)
})

router.patch('/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(id, {
        ...req.body
    })
    const data = await product.save()
    res.send(data)
})

module.exports = router;