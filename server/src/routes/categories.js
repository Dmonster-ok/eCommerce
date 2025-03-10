const Category = require('../models/Category');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
})

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.json(category);
})

router.post('/', async (req, res) => {
    const category = new Category({
        ...req.body
    })
    const data = await category.save()
    res.send(data)
})

router.delete('/:id', async (req, res) => {
    const data = await Category.findOneAndDelete({ _id: req.params.id })
    res.send(data)
})

router.patch('/:id', async (req, res) => {
    const category = await Category.findByIdAndUpdate(id, {
        ...req.body
    })
    const data = await category.save()
    res.send(data)
})

module.exports = router;