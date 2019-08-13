// https://jsfiddle.net/Daniel_Hug/pvk6p/
var state = "pause";
var n=0;
function cronometro(n){
  var h1 = document.getElementsByTagName('h1')[0],
  start = document.getElementById('comeca'),
  stop = document.getElementById('para'),
  t,time;
  time=n;

  function add() {
    time--;
    minutes = parseInt(time / 60, 10);
    seconds = parseInt(time % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    h1.textContent = minutes + ":" + seconds;
    console.log("restante"+time);
    timer();
  }
  function timer() {
    t = setTimeout(add, 1000);
  }
  timer();
  /* Start button */
  start.onclick = timer;
  return time;
  stop.onclick = function() {
    clearTimeout(t);
  }
}

function buttonPlayPress(){
var time,rest=0;
    if (state == "pause"){
        state = "play";
        var button2 = d3.select("#button_play").classed('btn-change-purple', true); //atribui o roxo do botao
        var button = d3.select("#button_play").classed('btn-success', false); //tira verde ao botao
        button.select("i").attr('class', "fa fa-pause btn-size"); //muda o icone para paus
        console.log("valor na start"+n);
        if(n==0){
          console.log("ENTRA NO START");
          time=60*2;
          rest=cronometro(time);
        }
    }
    else if(state=='play' || state=='resume'){
      state = 'pause';
      var button = d3.select("#button_play").classed('btn-success', true);
      var button2 = d3.select("#button_play").classed('btn-change-purple', false);
      button2.select("i").attr('class', "fa fa-play btn-size");
      console.log("valor no stop"+n);
      if(n==1){
        rest=cronometro(time);
        console.log("ENTRA NO STOP");
        console.log(rest);

      }
    }
    n++;

}
