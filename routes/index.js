var express = require('express');
var router = express.Router();
const Requisition = require('../models/requisitions');

var foto_perfil;

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

router.post('/login', (req, res, next) => {
  const credentials = req.body;
  Requisicao = new Requisition();
  Requisicao.login(credentials.AlunoID, credentials.AlunoPwd).then((result)=>{
    if(result === 1){
      res.render('login', { title: 'Login', logado: "Ocorreu um erro inespecífico" });
    }
    else{
    if(result.LOGIN.ID_Aluno == 0 && result.LOGIN.Status == 0){ //Quando tivermos usuarios e senha pra testar, mudar p/ if(result.LOGIN.ID_Aluno > 0 && result.LOGIN.Status == 1){
      console.log("Usuário está logado");
      console.log(result);
      req.session.usuario = true;
      foto_perfil = "http://fitgroup.com.br/livel/fotos/1349.jpg";
      res.redirect('/trainingTypes');
    }
    else{
      res.render('login', { title: 'Login', logado: "Usuário ou senha inválidos" });
    }
    }
  }).catch((error)=>{
    console.log(error);
    res.render('login', { title: 'Login', logado: "Ocorreu um erro inespecífico!" });
  });
});

router.get('/loginPassword', function(req, res, next) {
  res.render('loginPassword', { title: 'Password' });
});

router.get('/trainingTypes', function(req, res, next){
  if(!req.session.usuario){
    res.redirect('/');
  }
  else{
    res.render('trainingTypes', {title: 'Training Types', foto_perfil, layout: 'layoutMenu'})
  }
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
