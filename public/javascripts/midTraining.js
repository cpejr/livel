var button = document.getElementById("button_play");
var title= document.getElementById('atividade');
var contseries= document.getElementById('series');
var cronopausa= document.getElementById('pausa');
var series= 1;
var time =60*5,timepause=10;
var myInterval = -1,minutes,seconds;
$( ".pause" ).css( "display","none" );

button.addEventListener("click",function(event){
  if (myInterval == -1){
    myInterval = setInterval(function(){
      time--;
      minutes = parseInt(time / 60, 10);
      seconds = parseInt(time % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      title.innerHTML = minutes + ":" + seconds;
      $( ".pause" ).css( "display","block" );
      $( ".play" ).css( "display","none" );
      if(time<=0){
        if(time==0){
          series++;
          timepause=10;
        }
        contseries.innerHTML = series;
        title.innerHTML = "00:00";
        my =setTimeout(function(){
          timepause--;
          timepause = timepause < 10 ? "0" + timepause : timepause;
          cronopausa.innerHTML = "00:"+timepause;
          if(timepause<=1){
            time=60*5;
            cronopausa.innerHTML = "00:00";
          }
        },1000);
      }
    },1000);
  }
  else{
    clearInterval(myInterval);
    myInterval = -1;
    $( ".pause" ).css( "display","none" );
    $( ".play" ).css( "display","block" );
  }
});
