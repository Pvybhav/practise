var EventEmitter = require('events');

const emitter = new EventEmitter();

// Registering a listener
emitter.on('messageLogged', ()=>{
    console.log("Listener called");
});

// listener with parameters
emitter.on('messageLogged2', (data)=>{
    console.log('Listener2 called, ',data);
})
// Raising an event
emitter.emit('messageLogged'); // without passing parameters

emitter.emit('messageLogged2',{id:1, url: 'https://'})