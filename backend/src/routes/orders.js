const Order = require('../models/Order');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
})

router.get('/:id', async (req, res) => {
    const order = await Order.findById(req.params.id);
    res.json(order);
})

router.delete('/:id', async (req, res) => {
    const data = await Product.findOneAndDelete({ _id: req.params.id })
    res.send(data)
})

router.patch('/:id', async (req, res) => {
    const order = await Order.findByIdAndUpdate(id, {
        ...req.body
    })
    const data = await order.save()
    res.send(data)
})

module.exports = router;