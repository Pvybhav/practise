const log = (req, res, next) =>{
    console.log("logger.js log function");
    next();
}
module.exports = log