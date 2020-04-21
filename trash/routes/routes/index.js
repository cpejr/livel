// var express = require('express');
// var router = express.Router();
// var Chart = require('chart.js');
// const Requisition = require('../models/requisitions');
// const auth = require('../trash/auth');

// var foto_perfil;
// var nome_perfil;
// var aluno_treinos;
// Requisicao = new Requisition();

// /* GET home page. */

// router.get('/signup', function(req, res, next) {
//   res.render('signup', { title: 'SignUp'});
// });

// router.get('/requestNumber', function(req, res, next) {
//   res.render('requestNumber', { title: 'Request Number' });
// });

// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Login' });
// });

// router.post('/login', (req, res, next) => {
//   const credentials = req.body;
//   Requisicao.login(credentials.AlunoID, credentials.AlunoPwd).then((result)=>{
//     if(result.LOGIN.ID_Aluno > 0 && result.LOGIN.Status == 1){ //Quando tivermos usuarios e senha pra testar, mudar p/ if(result.LOGIN.ID_Aluno > 0 && result.LOGIN.Status == 1){
//       console.log("Usuário está logado");
//       console.log(result);
//       req.session.usuario = true;
//       foto_perfil = `http://fitgroup.com.br/livel/fotos/${result.ALUNO_INFO.AlunoFoto}`;
//       nome_perfil = result.ALUNO_INFO.AlunoNome;
//       aluno_treinos = result.ALUNO_TREINOS;

//       res.redirect('/trainingTypes');
//     }
//     else{
//       res.render('login', { title: 'Login', logado: "Usuário ou senha inválidos" });
//     }
//   }).catch((error)=>{
//     console.log(error);
//     res.render('login', { title: 'Login', logado: "Ocorreu um erro inespecífico!" });
//   });
// });

// router.get('/loginPassword', function(req, res, next) {
//   res.render('loginPassword', { title: 'Password' });
// });

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'LIVEL' });
// });

// router.get('/trainingTypes', auth.isAuthenticated, function(req, res, next){
//   Requisicao.treinoSemana().then((result)=>{
//       console.log(result);
//       var treinos = result.TREINO_SEMANA;
//       res.render('trainingTypes', {title: 'Training Types', foto_perfil, nome_perfil, treinos, aluno_treinos, layout: 'layoutMenu'});
//   }).catch((error)=>{
//     console.log(error);
//     res.render('trainingTypes', {title: 'Training Types', foto_perfil, nome_perfil, aluno_treinos, layout: 'layoutMenu'});
//   });
// });

// router.get('/midTraining', auth.isAuthenticated, function(req, res, next){
//   res.render('midTraining', {title: 'Mid Training', foto_perfil, nome_perfil, layout: 'layoutMenu',...req.session})
// });

// router.get('/timeScheduleSuperior', auth.isAuthenticated, function(req, res, next){
//   req.session.tipoTreino= "Superior";
//   res.render('timeSchedule', {title: 'Time Schedule', foto_perfil, nome_perfil, layout: 'layoutMenu'})
// });


// router.get('/timeScheduleInferior', auth.isAuthenticated, function(req, res, next){
//   req.session.tipoTreino= "Inferior";
//   res.render('timeSchedule', {title: 'Time Schedule', foto_perfil, nome_perfil, layout: 'layoutMenu'})
// });

// router.get('/countdownTraining', auth.isAuthenticated, function(req, res, next){
//   res.render('countdownTraining', {title: 'Countdown Training', foto_perfil, nome_perfil, ayout: 'layoutMenu'})
// });

// router.get('/profile', auth.isAuthenticated, function(req,res, next){
//   res.render('profile', {title: 'Profile', foto_perfil,nome_perfil, aluno_treinos, layout: 'layoutMenuBars'})
// });

// router.get('/body', function(req,res, next){
//   res.render('body', {title: 'body', foto_perfil, nome_perfil, aluno_treinos, layout: 'layoutBody'})
// });

// router.get('/rewards', auth.isAuthenticated, function(req, res, next) {
//   Requisicao.treinoSemana().then((result)=>{
//       console.log(result);
//       var treinos = result.TREINO_SEMANA;
//         res.render('rewards', { title: 'Rewards', foto_perfil, nome_perfil, treinos, aluno_treinos, layout: 'layoutMenu2' });
//   }).catch((error)=>{
//     console.log(error);
//       res.render('rewards', { title: 'Rewards', foto_perfil, nome_perfil, treinos, aluno_treinos, layout: 'layoutMenu2' });
//   });
// });


// router.get('/coach', function(req, res, next) {
//   res.render('coach', { title: 'coach', foto_perfil, nome_perfil, layout: 'layoutCoach' });
// });

// router.get('/coachAvaliation', function(req, res, next) {
//   res.render('coachAvaliation', { title: 'coachAvaliation', foto_perfil, nome_perfil, layout: 'layoutCoach' });
// });

// router.get('/coachTransfer', function(req, res, next) {
//   res.render('coachTransfer', { title: 'coachTransfer ', foto_perfil, nome_perfil, layout: 'layoutCoach' });
// });

// module.exports = router;
