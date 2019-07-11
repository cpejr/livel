require('dotenv').config();
const request = require('request-promise');

class requisitions{
  login(AlunoID, AlunoPwd){
      return new Promise((resolve, reject) =>{
          request({
            method: 'GET',
            url: `http://fitgroup.com.br/livel/livel_app.php?AuthToken=${process.env.AUTH_TOKEN}&Metodo=alunoLogin&AlunoID=${AlunoID}&AlunoPwd=${AlunoPwd}`,
            json: true,
            resolveWithFullResponse: true
          }).then((response) => {
            resolve (response.body);
          }).catch((err) => {
            console.log(err);
            reject (err);
          });
        });
  }
  treinoSemana(){
    return new Promise((resolve, reject) =>{
        request({
          method: 'GET',
          url: `http://fitgroup.com.br/livel/livel_app.php?AuthToken=${process.env.AUTH_TOKEN}&Metodo=treinoSemana`,
          json: true,
          resolveWithFullResponse: true
        }).then((response) => {
          resolve (response.body);
        }).catch((err) => {
          console.log(err);
          reject(err);
        });
      });
    }
}


module.exports = requisitions;