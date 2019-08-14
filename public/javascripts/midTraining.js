// https://jsfiddle.net/Daniel_Hug/pvk6p/
var state = "pause";

function buttonPlayPress(){
    if (state == "pause"){
        state = "play";
        var button2 = d3.select("#button_play").classed('btn-change-purple', true); //atribui o roxo do botao
        var button = d3.select("#button_play").classed('btn-success', false); //tira verde ao botao
        button.select("i").attr('class', "fa fa-pause btn-size"); //muda o icone para pause
        var result,timet;
        var timeleft = 5*60;
        n++;
        var n=0;
        var h1 = document.getElementsByTagName('span')[0];
          start = document.getElementById('start'),
          stop = document.getElementById('stop'),
          clear = document.getElementById('clear'),
          timeleft=300,seconds = 0,minutes=0;
          function add() {
              timeleft=timeleft-1;
              minutes = parseInt(timeleft/60);
              seconds = parseInt(timeleft%60);
              h1.textContent =(minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

              timer();
          }
          function timer() {
              t = setTimeout(add, 1000);
          }
          timer();


          /* Start button */
          start.onclick = timer;

          /* Stop button */
          stop.onclick = function() {
              clearTimeout(t);
          }

          /* Clear button */
          clear.onclick = function() {
              h1.textContent = "00";
              seconds = 0; minutes = 0; hours = 0;
      }
    }
    else if(state=='play' || state=='resume'){
      state = 'pause';
      var button = d3.select("#button_play").classed('btn-success', true);
      var button2 = d3.select("#button_play").classed('btn-change-purple', false);
      button2.select("i").attr('class', "fa fa-play btn-size");
      function pare(){
        console.log('entro');
        clearInterval(downloadTimer);
      };
      pare();
      display = document.querySelector('.atividade');

    }
    console.log(n);
}
