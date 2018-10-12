const config = require('config');

module.exports = () =>{
    if (!config.get('jwtPrivateKey')) {
        // console.log('FATAL ERROR: jwtPrivateKey is not defined');
        // process.exit(1);
        // OR
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined');
    }
}