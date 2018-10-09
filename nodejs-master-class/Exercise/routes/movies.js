const express = require('express');
const router = express.Router();
const {
    Movie,
    validateMovie
} = require('../models/movie');
const {
    Genre,
    validate
} = require('../models/genre');

// getting movies from database
router.get('/', async (req, res) => {

    const movies = await Movie.find().sort('name');

    res.send(movies);
});

// posting movie to database
router.post('/', async (req, res) => {

    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genreId);
    if(!genre) return res.status(400).send('Invalid Genre');

    const movie = new Genre({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    await movie.save();

    res.send(movie);
});

// updating movie in database
router.put('/:id', async (req, res) => {

    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const movie = await Genre.findOneAndUpdate(req.params.id, {
        name: req.body.name
    }, {
        new: true
    });
    if (!movie) return res.status(404).send('The movie with given ID does not exists');

    res.send(movie);
});

// deleting movie by id
router.delete('/:id', async (req, res) => {

    const movie = await Genre.findOneAndRemove(req.params.id);
    if (!movie) return res.status(404).send('The movie with given ID does not exists');

    res.send(movie);
});

// getting single movie by given id
router.get('/:id', async (req, res) => {

    const movie = await Genre.findById(req.params.id);
    if (!movie) return res.send(404).send('The movie with given ID does not exists');

    res.send(movie);
});



module.exports = router;