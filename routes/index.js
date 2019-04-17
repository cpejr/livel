var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Home' });
});

router.get('/requestNumber', function(req, res, next) {
  res.render('requestNumber', { title: 'Home' });
});

module.exports = router;
