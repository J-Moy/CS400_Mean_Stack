const express = require('express');
const router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
    res.render('ps3', { title: 'part a'});
});
*/

router.route('/')
    .get(function (req, res, next) {
        res.render('ps3', {title: 'part a'})
    })
    .post(function(req, res, next) {
        res.send( {str: `${req.body.str}`, str_length: `${req.body.str.length}`});
    })


module.exports = router;