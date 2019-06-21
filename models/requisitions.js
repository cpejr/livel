const request = require('request-promise');

const AuthToken = 'FlnPoU230xGF'; //Colocar no .env depois

class requisitions{
    login(AlunoID, AlunoPwd){
        return new Promise((resolve) =>{
            request({
              method: 'GET',
              url: `http://fitgroup.com.br/livel/livel_app.php?AuthToken=${AuthToken}&Metodo=alunoLogin&AlunoID=${AlunoID}&AlunoPwd=${AlunoPwd}`,
              json: true,
              resolveWithFullResponse: true
            }).then((response) => {
              resolve (response.body);
            }).catch((err) => {
              console.log(err);
              resolve (1);
            });
          });
    }
}


module.exports = requisitions;