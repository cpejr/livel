var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'SignUp' });
});

router.get('/requestNumber', function(req, res, next) {
  res.render('requestNumber', { title: 'RequestNumber' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login'});
});

router.get('/trainings', function(req, res, next){
  res.render('trainings', {title: 'Trainings', layout: 'layoutMenu'})
});

module.exports = router;
