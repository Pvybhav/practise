const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// inbuilt middlewares --> json, urlencoded, static
app.use(express.json()); // parses the body of the request and if there is any json object it will plpulate req.body property
app.use(express.urlencoded({extended: true})); // parses incoming request with url encoded payloads
app.use(express.static('public')); // this middleware serves static contents in given folder
const logger = require('./logger');

app.use(logger);

app.use((req, res, next)=>{
    console.log("Authenticating");
    next(); // without next it'll stop the execution at this state
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}, run http://localhost:${port} in browser`);
});