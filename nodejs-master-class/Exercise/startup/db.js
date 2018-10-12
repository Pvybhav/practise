const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');
module.exports = () =>{
    // mongoose.connect('mongodb://localhost/vidly', {
    mongoose.connect(conf.get('db'), {
            useNewUrlParser: true
        })
        .then(() => winston.info(`Connected to ${conf.get('db')}`));
}