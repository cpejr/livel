var mes,mesanterior,mesAbreviado,mesanteriorAbreviado,anomesatual,anomesanterior;
data = new Date();

switch (data.getMonth()) {
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

function abreviacoes(mes){
  var mesAbreviacao;
  if(mes=="Janeiro"){
    mesAbreviacao= "JAN";
  }
  if(mes=="Fevereiro"){
    mesAbreviacao= "FEV";
  }
  if(mes=="Março"){
    mesAbreviacao= "MAR";
  }
  if(mes=="Abril"){
    mesAbreviacao= "ABR";
  }
  if(mes=="Maio"){
    mesAbreviacao= "MAI";
  }
  if(mes=="Junho"){
    mesAbreviacao= "JUN";
  }
  if(mes=="Julho"){
    mesAbreviacao= "JUL";
  }
  if(mes=="Agosto"){
    mesAbreviacao= "AGO";
  }
  if(mes=="Setembro"){
    mesAbreviacao= "SET";
  }
  if(mes=="Outubro"){
    mesAbreviacao= "OUT";
  }
  if(mes=="Novembro"){
    mesAbreviacao= "NOV";
  }
  if(mes=="Dezembro"){
    mesAbreviacao= "DEZ";
  }
  return mesAbreviacao;
}

mesAbreviado = abreviacoes(mes);
mesanteriorAbreviado = abreviacoes(mesanterior);

//Para fazer o gráfico
var ctxForca = document.getElementById('grafForca').getContext("2d");
var data1Forca,data2Forca;
data1Forca=100;
data2Forca=105;
var grafForca = new Chart(ctxForca, {
    type: 'bar',
    data: {
        labels: [mesanteriorAbreviado, mesAbreviado],
        datasets: [{
            data: [data1Forca, data2Forca],
            backgroundColor: [
              '#C6BBCE',
              '#532166'
            ],
            fontColor: [
              '#C6BBCE',
              '#532166'
            ],
            borderWidth: 1
        }]
    },
    options: {
      tooltips: {
         enabled: false
      },
      plugins: {
      datalabels: {
        color: '#FFFFFF',
        font: {
          weight: 800,
          size: 32,
        },
        align:'end',
        anchor: 'start'
        }
      },
      legend: {
        display: false
      },
      responsive: false,
      scales: {
        xAxes: [{
        gridLines: {
          display:false,
          color: '#F2F2F2'
        },
        ticks: {
          fontSize: 25,
          fontStyle: 700,
          fontColor:['rgba(44,44,44,0.8)','rgba(44,44,44,0.8)']

        },
        categoryPercentage: 0.95,
        barPercentage: 0.9,
        fontColor: [
          '#06BFB8',
          '#532166'
        ]
      }],
        yAxes: [{
        gridLines: {
          display:false,
          color: '#F2F2F2'
        },
        ticks: {
          fontColor: '#F2F2F2',
          beginAtZero: true
        }
      }],
        pointLabels: {
          fontSize: 30
        }
      }
    }
});

var ctxCardio = document.getElementById('grafCardio').getContext("2d");
var data1Cardio,data2Cardio;
data1Cardio=1500;
data2Cardio=2000;
var grafCardio = new Chart(ctxCardio, {
    type: 'bar',
    data: {
        labels: [mesanteriorAbreviado, mesAbreviado],
        datasets: [{
            data: [data1Cardio, data2Cardio],
            backgroundColor: [
              '#C6BBCE',
              '#532166'
            ],
            fontColor: [
              '#C6BBCE',
              '#532166'
            ],
            borderWidth: 1
        }]
    },
    options: {
      tooltips: {
         enabled: false
      },
      plugins: {
      datalabels: {
        color: '#FFFFFF',
        font: {
          weight: 800,
          size: 26,
        },
        align:'end',
        formatter: function(value) {
        	return value +'m'
        },
        anchor: 'start'
        }
      },
      legend: {
        display: false
      },
      responsive: false,
      scales: {
        xAxes: [{
        gridLines: {
          display:false,
          color: '#F2F2F2'
        },
        ticks: {
          fontSize: 25,
          fontStyle: 700,
          fontColor:['rgba(44,44,44,0.8)','rgba(44,44,44,0.8)']

        },
        categoryPercentage: 0.95,
        barPercentage: 0.9,
        fontColor: [
          '#06BFB8',
          '#532166'
        ]
      }],
        yAxes: [{
        gridLines: {
          display:false,
          color: '#F2F2F2'
        },
        ticks: {
          fontColor: '#F2F2F2',
          beginAtZero: true
        }
      }],
        pointLabels: {
          fontSize: 30
        }
      }
    }
});

var ctxPeso = document.getElementById('grafPeso').getContext("2d");
var data1Peso,data2Peso;
data1Peso=80;
data2Peso=76;
var grafPeso = new Chart(ctxPeso, {
    type: 'bar',
    data: {
        labels: [mesanteriorAbreviado, mesAbreviado],
        datasets: [{
            data: [data1Peso, data2Peso],
            backgroundColor: [
              '#C6BBCE',
              '#532166'
            ],
            fontColor: [
              '#C6BBCE',
              '#532166'
            ],
            borderWidth: 1
        }]
    },
    options: {
      tooltips: {
         enabled: false
      },
      plugins: {
      datalabels: {
        color: '#FFFFFF',
        font: {
          weight: 800,
          size: 26,
        },
        formatter: function(value) {
        	return value +'kg'
        },
        align:'end',
        anchor: 'start'
        }
      },
      legend: {
        display: false
      },
      responsive: false,
      scales: {
        xAxes: [{
        gridLines: {
          display:false,
          color: '#F2F2F2'
        },
        ticks: {
          fontSize: 25,
          fontStyle: 700,
          fontColor:['rgba(44,44,44,0.8)','rgba(44,44,44,0.8)']

        },
        categoryPercentage: 0.95,
        barPercentage: 0.9,
        fontColor: [
          '#06BFB8',
          '#532166'
        ]
      }],
        yAxes: [{
        gridLines: {
          display:false,
          color: '#F2F2F2'
        },
        ticks: {
          fontColor: '#F2F2F2',
          beginAtZero: true
        }
      }],
        pointLabels: {
          fontSize: 30
        }
      }
    }
});

var ctxGordura = document.getElementById('grafGordura').getContext("2d");
var data1Gordura,data2Gordura;
data1Gordura=13;
data2Gordura=13.5;
var grafGordura = new Chart(ctxGordura, {
    type: 'bar',
    data: {
        labels: [mesanteriorAbreviado, mesAbreviado],
        datasets: [{
            data: [data1Gordura, data2Gordura],
            backgroundColor: [
              '#C6BBCE',
              '#532166'
            ],
            fontColor: [
              '#C6BBCE',
              '#532166'
            ],
            borderWidth: 1
        }]
    },
    options: {
      tooltips: {
         enabled: false
      },
      plugins: {
      datalabels: {
        color: '#FFFFFF',
        font: {
          weight: 800,
          size: 26,
        },
        formatter: function(value) {
        	return value +'%'
        },
        align:'end',
        anchor: 'start'
        }
      },
      legend: {
        display: false
      },
      responsive: false,
      scales: {
        xAxes: [{
        gridLines: {
          display:false,
          color: '#F2F2F2'
        },
        ticks: {
          fontSize: 25,
          fontStyle: 700,
          fontColor:['rgba(44,44,44,0.8)','rgba(44,44,44,0.8)']

        },
        categoryPercentage: 0.95,
        barPercentage: 0.9,
        fontColor: [
          '#06BFB8',
          '#532166'
        ]
      }],
        yAxes: [{
        gridLines: {
          display:false,
          color: '#F2F2F2'
        },
        ticks: {
          fontColor: '#F2F2F2',
          beginAtZero: true
        }
      }],
        pointLabels: {
          fontSize: 30
        }
      }
    }
});

//Para deixar as bordas arredondadas
Chart.elements.Rectangle.prototype.draw = function() {

    var ctx = this._chart.ctx;
    var vm = this._view;
    var left, right, top, bottom, signX, signY, borderSkipped, radius;
    var borderWidth = vm.borderWidth;
    // Set Radius Here
    // If radius is large enough to cause drawing errors a max radius is imposed
    var cornerRadius = 20;

    if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top? 1: -1;
        borderSkipped = vm.borderSkipped || 'bottom';
    } else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left? 1: -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
    }

    // Canvas doesn't allow us to stroke inside the width so we can
    // adjust the sizes to fit if we're setting a stroke on the line
    if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize? barSize: borderWidth;
        var halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
        var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
        var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
        var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
            top = borderTop;
            bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
            left = borderLeft;
            right = borderRight;
        }
    }

    ctx.beginPath();
    ctx.fillStyle = vm.backgroundColor;
    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = borderWidth;

    // Corner points, from bottom-left to bottom-right clockwise
    // | 1 2 |
    // | 0 3 |
    var corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
    ];

    // Find first (starting) corner with fallback to 'bottom'
    var borders = ['bottom', 'left', 'top', 'right'];
    var startCorner = borders.indexOf(borderSkipped, 0);
    if (startCorner === -1) {
        startCorner = 0;
    }

    function cornerAt(index) {
        return corners[(startCorner + index) % 4];
    }

    // Draw rectangle from 'startCorner'
    var corner = cornerAt(0);
    ctx.moveTo(corner[0], corner[1]);

    for (var i = 1; i < 4; i++) {
        corner = cornerAt(i);
        nextCornerId = i+1;
        if(nextCornerId == 4){
            nextCornerId = 0
        }

        nextCorner = cornerAt(nextCornerId);

        width = corners[2][0] - corners[1][0];
        height = corners[0][1] - corners[1][1];
        x = corners[1][0];
        y = corners[1][1];

        var radius = cornerRadius;

        // Fix radius being too large
        if(radius > height/2){
            radius = height/2;
        }if(radius > width/2){
            radius = width/2;
        }

        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);

    }

    ctx.fill();
    if (borderWidth) {
        ctx.stroke();
    }
};



anomesatual = data.getFullYear();
anomesanterior =data.getFullYear();
textanomesatual = anomesatual;
textanomesanterior = anomesanterior;
var anomesresult =data.getFullYear();
textanomesresult = anomesresult;

if (data.getMonth()=='0'){
  anomesanterior =(data.getFullYear()-1);
  textanomesanterior = anomesanterior;
}
else{
anomesanterior =(data.getFullYear());
textanomesanterior = anomesanterior;
}