var state = "pause";

function buttonPlayPress(){
    if (state == "pause"){
        state = "play";
        var button2 = d3.select("#button_play").classed('btn-change-purple', true); //Tira o roxo do botao
        var button = d3.select("#button_play").classed('btn-success', false); //atribui verde ao botao
        button.select("i").attr('class', "fa fa-pause btn-size"); //muda o icone para pause
    }
    else if(state=='play' || state=='resume'){
      state = 'pause';
      var button = d3.select("#button_play").classed('btn-success', true);
      var button2 = d3.select("#button_play").classed('btn-change-purple', false);
      button2.select("i").attr('class', "fa fa-play btn-size");
    }
}
