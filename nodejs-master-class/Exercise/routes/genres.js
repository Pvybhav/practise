const express = require('express');
const router = express.Router();
const {
    Genre,
    validate
} = require('../models/genre');

// getting genres from database
router.get('/', async (req, res) => {

    const genres = await Genre.find().sort('name');

    res.send(genres);
});

// posting genre to database
router.post('/', async (req, res) => {

    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({
        name: req.body.name
    });
    genre = await genre.save();

    res.send(genre);
});

// updating genre in database
router.put('/:id', async (req, res) => {

    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findOneAndUpdate(req.params.id, {
        name: req.body.name
    }, {
        new: true
    });
    if (!genre) return res.status(404).send('The genre with given ID does not exists');

    res.send(genre);
});

// deleting genre by id
router.delete('/:id', async (req, res) => {

    const genre = await Genre.findOneAndRemove(req.params.id);
    if (!genre) return res.status(404).send('The genre with given ID does not exists');

    res.send(genre);
});

// getting single genre by given id
router.get('/:id', async (req, res) => {

    const genre = await Genre.findById(req.params.id);
    if (!genre) return res.send(404).send('The genre with given ID does not exists');

    res.send(genre);
});



module.exports = router;