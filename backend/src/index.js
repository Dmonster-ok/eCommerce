const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

mongoose.connect(process.env.LocalUrl).then( async () => {
    console.log('Connected to MongoDB');
    // await mongoose.connection.db.collection('students').find({}).toArray().then(data=>{console.log(data);
    // })

    const app = express();
    app.use(bodyParser.json());
    app.use('/categories',require('./routes/categories'));
    app.use('/orders',require('./routes/orders'));
    app.use('/products',require('./routes/products'));
    app.use('/users',require('./routes/users'));

    app.listen(process.env.PORT)
})
