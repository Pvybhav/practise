
// _id: 5bbaeec1e92ae9133c653682

// 12 bytes
    // 1-4 --> timestamp
    // 5-7 --> machine identifier
    // 8-9 --> process identifier
    // 10-12 --> counter

const mongoose = require('mongoose');

const id = new mongoose.Types.ObjectId();
console.log(id.generationTime());

const isValid = mongoose.Types.ObjectId.isValid('dfjslfjjdsl');
console.log(isValid);