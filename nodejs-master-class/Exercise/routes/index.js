const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.end("hi");
});

module.exports = router;