const express = require('express');
const router = express.Router();

router.get("/", (req, res) => res.send("Welcome!"));

router.param('id', function (req, res, next, id) {
    console.log('CALLED ONLY ONCE');
    // next();
});

router.get('/user/:id', function (req, res, next) {
    console.log('although this matches');
    next();
});

router.get('/user/:id', function (req, res) {
    console.log('and this matches too');
    res.end();
});

module.exports = router;