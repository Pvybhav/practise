const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');
const app = express();
const config = require('config');

const PORT = process.env.PORT || 3000;

if(!config.get('jwtPrivateKey')){
    console.log('FATAL ERROR: jwtPrivateKey is not defined');
    process.exit(1);
}
app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);

mongoose.connect('mongodb://localhost/vidly', {
        useNewUrlParser: true
    })
    .then(() => console.log("connected to MONGODB....!!!"))
    .catch(err => console.error("Could not connect to MONGODB", err));

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});