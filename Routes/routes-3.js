const express = require('express');
const router = express.Router();

router.route('/users/:user_id')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log(".all called!");
        next();
    })
    .get(function (req, res, next) {
        res.send(req.params.user_id);
    })
    .put(function (req, res, next) {
        // just an example of maybe updating the user
        req.user.name = req.params.name;
        // save user ... etc
        res.json(req.user);
    })
    .post(function (req, res, next) {
        res.send("No implemented!");
    })
    .delete(function (req, res, next) {
        next(new Error('not implemented'));
    });

module.exports = router;