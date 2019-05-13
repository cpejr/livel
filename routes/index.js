var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'SignUp'});
});

router.get('/requestNumber', function(req, res, next) {
  res.render('requestNumber', { title: 'Request Number' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/trainingTypes', function(req, res, next){
  res.render('trainingTypes', {title: 'Training Types', layout: 'layoutMenu'})
});

router.get('/midTraining', function(req, res, next){
  res.render('midTraining', {title: 'Mid Training', layout: 'layoutMenu'})
});

router.get('/trainingFinish', function(req, res, next){
  res.render('trainingFinish', {title: 'Training Finished!', layout: 'layoutMenu'})
});

router.get('/timeSchedule', function(req, res, next){
  res.render('timeSchedule', {title: 'Time Schedule', layout: 'layoutMenu'})
});

router.get('/countdownTraining', function(req, res, next){
  res.render('countdownTraining', {title: 'Countdown Training', layout: 'layoutMenu'})
});


module.exports = router;
