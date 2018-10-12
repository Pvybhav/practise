const express = require('express');
const app = express();
const winston = require('winston');

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    winston.info(`app is running on port ${PORT}, open http://localhost:${PORT} in 🌎`);
});

module.exports = server;