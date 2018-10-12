const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

winston.add(winston.transports.File, {
    filename: 'logfile.log'
});
winston.add(winston.transports.mongoDB, {
    db: 'mongodb://localhost/vidly',
    level: 'error'
    // error, warn, info
});

// handling uncaught exceptions
// process.on('uncaughtException', (error) =>{
//     console.log('UNCAUGHT EXCEPTION OCCURED..!');
//     winston.error(error.message, ex);
// }); 
// OR

winston.handleExceptions(
    new winston.transports.console({colorize:true, prettyPrint: true}),    
    new winston.transports.File({
        filename: 'uncaughtExceptions.log'
    }));

//handling unhandled promises Rejection
process.on('unhandledRejection', (error) => {
    console.log('UNCAUGHT PROMISE REJECTION');
    // winston.error(error.message, ex);
    // OR
    throw error;
});