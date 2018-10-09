const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Fawn = require('fawn');
const {
    Rental,
    validate
} = require('../models/rental');

const { Movie } = require('../models/movie');
const {
    Customer
} = require('../models/customer');

Fawn.init(mongoose);

// getting rentals from database
router.get('/', async (req, res) => {

    const rentals = await Rental.find().sort('-dateOut');

    res.send(rentals);
});

// posting rental to database
router.post('/', async (req, res) => {

    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findById(req.body.customerId);
    if(!customer) return res.status(400).send('Invalid Customer');

    const movie = await Movie.findById(req.body.movieId);
    if(!movie) return res.status(400).send('Invalid Movie');

    if(movie.numberInStock === 0) return res.status(400).send('Movie not in stock');

    let rental = new Rental({
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        },
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        }
    })

    // rental = await rental.save();
    // movie.numberInStock--;
    // movie.save()

    // two phase commit (transaction)

    try {
        new Fawn.Task()
            .save('rentals', rental) // 'rentals' is collection name and should be same as collection name
            .update('movies', {
                _id: movie.id
            }, {
                $inc: {
                    numberInStock: -1
                }
            })
            .run();

        res.send(rental);
    } catch (error) {
        res.status(500).send("ERROR OCCURED");
    }
    

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