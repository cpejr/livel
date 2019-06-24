var express = require('express');
var router = express.Router();
const Requisition = require('../models/requisitions');
const auth = require('./middleware/auth');

var foto_perfil;
var nome_perfil;
Requisicao = new Requisition();

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
  Requisicao.login(credentials.AlunoID, credentials.AlunoPwd).then((result)=>{
    if(result === 1){
      res.render('login', { title: 'Login', logado: "Ocorreu um erro inespecífico" });
    }
    else{
    if(result.LOGIN.ID_Aluno > 0 && result.LOGIN.Status == 1){ //Quando tivermos usuarios e senha pra testar, mudar p/ if(result.LOGIN.ID_Aluno > 0 && result.LOGIN.Status == 1){
      console.log("Usuário está logado");
      console.log(result);
      req.session.usuario = true;
      foto_perfil = `http://fitgroup.com.br/livel/fotos/${result.ALUNO_INFO.AlunoFoto}`;
      nome_perfil = result.ALUNO_INFO.AlunoNome;
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

router.get('/trainingTypes', auth.isAuthenticated, function(req, res, next){
  Requisicao.treinoSemana().then((result)=>{
    if(result === 1){
      res.render('trainingTypes', {title: 'Training Types', foto_perfil, nome_perfil, layout: 'layoutMenu'});
    }
    else{
      console.log(result);
      var treinos = result.TREINO_SEMANA;
      res.render('trainingTypes', {title: 'Training Types', foto_perfil, nome_perfil, treinos, layout: 'layoutMenu'});
    }
  }).catch((error)=>{
    console.log(error);
    res.render('trainingTypes', {title: 'Training Types', foto_perfil, nome_perfil, layout: 'layoutMenu'});
  });
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
