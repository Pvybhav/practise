const express = require('express');
var mongoose = require('mongoose');
const _ = require('loadash');
const bcrypt = require('bcrypt');
const router = express.Router();
const {
    User,
    validate
} = require('../models/user');
const auth = require('../middleware/auth');

// 'me' instead of ':id' because the user can access other's details also
router.get('/me', auth, async (req, res)=>{
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
})

router.post('/', async (req, res) => {
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});
    if(user) return res.status(400).send('User already registered');
    
    // user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // });
    //OR
    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();


    const token = user.generateAuthToken();
     

    // res.send(user);
    //OR
    // res.send({
        //     name: user.name,
        //     email: user.email
        // });
        //OR
        // res.send(_.pick(user, ['_id', 'name', 'email']));
    res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
});

module.exports = router;