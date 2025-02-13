const User = require('../models/User');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
})

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
})

router.delete('/:id', async (req, res) => {
    const data = await User.findOneAndDelete({ _id: req.params.id })
    res.send(data)
})

router.patch('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(id, {
        ...req.body
    })
    const data = await user.save()
    res.send(data)
})

module.exports = router;