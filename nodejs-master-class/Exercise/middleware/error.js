const winston = require('winston');

module.exports = (err, req, res, next) => {
    // winston.log('error', err.message);
    // OR
    winston.error(err.message);
    // error
    // warn
    // info
    // verbose
    // debug
    // silly
    res.status(500).send('Internal Server Error');
};