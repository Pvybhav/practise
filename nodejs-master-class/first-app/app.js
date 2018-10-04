// var logger = require('./logger');
// const log = require('./logger')
// function sayHello(name){
//     console.log('Hi '+ name)
// }
// console.log(window) // ReferenceError: window is not defined
// sayHello('vybhav');


// var message = '';
// console.log(global.message); // undefined


// console.log(module);

// logger = 1; // TypeError: Assignment to constant variable if we try to override const

// console.log(logger);
// logger.log('logger message'); // if we import function as a variable from logger module

// log("logger msg"); // if we import function from logger module


// working on EventEmitter

// const Logger = require('./logger');

// logger = new Logger();

// logger.on('messageLogged', (data)=>{
//     console.log("Listener called, callback data is ", data);
// });

// logger.log('logger message');


// http-server

const http = require('http');

var server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.write("route: / \n");
        res.end();
    }
    if(req.url == "/api/courses/"){
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
})

server.listen(3002);

console.log("SERVER is running on  Port : 3002")