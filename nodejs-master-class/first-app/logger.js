
// var url = 'http://mylogger.io/log';

// function log(message){
//     // send an HTTP request
//     console.log(message);
// }

// console.log(__filename);
// console.log(__dirname);

// module.exports.log = log;
// module.exports.endPoint = url;

// module.exports = log 
// module.exports.log = log

//exports = log // we can not write like this because it is a reference to module.exports 
// TypeError: log is not a function

// exports.log = log // we can write like this. this is shortcut for "moudle.exports.log = log;"


// (function (exports, require, module, __filename, __dirname) {
//     // the whole code is wrapped up in this function
//     // exports --> shortcut for module.exports and we can not reassign value to it
//     // require --> used to import other modules
//     // module --> module is an object which contains details like "id, exports, parent, filename, loaded, children, paths"
//     // __filename --> contains full path including the filename (F:\udemy\practise\nodejs-master-class\first-app\logger.js)
//     // __dirname --> contains full path to the current file (F:\udemy\practise\nodejs-master-class\first-app)
// }) --> module wrapper function



// working on EventEmitter

// var EventEmitter = require('events');

// class Logger extends EventEmitter{
//     log(msg){
//         console.log(msg);
        
//         //Raising an event
//         this.emit('messageLogged',{id:1, url: "https://"});
//     }
// };

// module.exports = Logger;