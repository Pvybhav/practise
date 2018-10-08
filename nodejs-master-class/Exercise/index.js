const express = require('express');
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

mongoose.connect('mongodb://localhost/vidly', {
        useNewUrlParser: true
    })
    .then(() => console.log("connected to MONGODB....!!!"))
    .catch(err => console.error("Could not connect to MONGODB"));

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
});