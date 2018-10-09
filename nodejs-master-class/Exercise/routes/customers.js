const express = require('express');
const router = express.Router();
const {
    Customer,
    validate
} = require('../models/customer');

// getting customers from database
router.get('/', async (req, res) => {

    const customers = await Customer.find().sort('name');

    res.send(customers);
});

// posting customer to database
router.post('/', async (req, res) => {

    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    customer = await customer.save();

    res.send(customer);
});

// updating customer in database
router.put('/:id', async (req, res) => {

    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = await Customer.findOneAndUpdate(req.params.id, {
        name: req.body.name
    }, {
        new: true
    });
    if (!customer) return res.status(404).send('The customer with given ID does not exists');

    res.send(customer);
});

// deleting customer by id
router.delete('/:id', async (req, res) => {

    const customer = await Customer.findOneAndRemove(req.params.id);
    if (!customer) return res.status(404).send('The customer with given ID does not exists');

    res.send(customer);
});

// getting single customer by given id
router.get('/:id', async (req, res) => {

    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.send(404).send('The customer with given ID does not exists');

    res.send(customer);
});



module.exports = router;