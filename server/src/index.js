const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

mongoose.connect(process.env.LocalUrl).then( async () => {
    console.log('Connected to MongoDB');

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/categories',require('./routes/categories'));
    app.use('/orders',require('./routes/orders'));
    app.use('/products',require('./routes/products'));
    app.use('/users',require('./routes/users'));

    PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`\nServer running at: http://localhost:${PORT}\n`);
    });
})
