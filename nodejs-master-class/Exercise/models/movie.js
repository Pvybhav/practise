const mongoose = require('mongoose');
const Joi = require('joi');
const { genreSchema } = require('./genre');

const Movie = mongoose.model('Movies', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    genre:{
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
}));

function validateMovie(movie){
    const schema = {
        title: Joi.string().min(5).max(50).required(),
        genreId: Joi.objectId().required(),
        numberInStock: Joi.number().min(0).max(255).required(),
        dailyRentalRate: Joi.number().min(0).max(255).required()
    };
    return Joi.validate(movie, schema);
}

exports.Movie = Movie
exports.validateMovie = validateMovie