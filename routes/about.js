/**
 * Created by Shanu on 1/24/2016.
 */
var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About',
        name:'shanu'
    });
});

module.exports = router;
