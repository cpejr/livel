var mes,mesanterior;
switch (new Date().getMonth()) {
  case 0:
    mesanterior="Dezembro";
    mes = "Janeiro";
    break;
  case 1:
    mesanterior="Janeiro";
    mes = "Fevereiro";
    break;
  case 2:
    mesanterior="Fevereiro";
    mes = "Março";
    break;
  case 3:
    mesanterior="Março";
    mes = "Abril";
    break;
  case 4:
    mesanterior="Abril";
    mes = "Maio";
    break;
  case 5:
    mesanterior="Maio";
    mes = "Junho";
    break;
  case  6:
    mesanterior="Junho";
    mes = "Julho";
    break;
  case  7:
    mesanterior="Julho";
    mes = "Agosto";
    break;
  case  8:
    mesanterior="Agosto";
    mes = "Setembro";
    break;
  case  9:
    mesanterior="Setembro";
    mes = "Outubro";
    break;
  case  10:
    mesanterior="Outubro";
    mes = "Novembro";
    break;
  case  11:
    mesanterior="Novembro";
    mes = "Dezembro";
    break;
}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
