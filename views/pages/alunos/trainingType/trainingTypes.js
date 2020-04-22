function myFunction() {
  var str1 = "{{treinos.Periodizacao}}";
  var str2 = "T";
  var n = str1.localeCompare(str2);
  if(n==0){
    document.getElementById("boxRightUpperRadius1").style.display = "block";
    document.getElementById("Tensional").style.display = "block";
    document.getElementById("Tensionaltexto").style.display = "block";
    document.getElementById("boxRightUpperRadius3").style.display = "none";
    document.getElementById("Metabolico").style.display = "none";
    document.getElementById("Metabolicotexto").style.display = "none";
    document.getElementById("Tensional").style.position = "relative";
    document.getElementById("boxRightUpperRadius1").style.position = "relative";
    document.getElementById("Tensionaltexto").style.position = "relative";
  }
  else{
    document.getElementById("boxRightUpperRadius3").style.display = "block";
    document.getElementById("Metabolico").style.display = "block";
    document.getElementById("Metabolicotexto").style.display = "block";
    document.getElementById("boxRightUpperRadius1").style.display = "none";
    document.getElementById("Tensional").style.display = "none";
    document.getElementById("Tensionaltexto").style.display = "none";
    document.getElementById("Metabolico").style.position = "relative";
    document.getElementById("boxRightUpperRadius3").style.position = "relative";
    document.getElementById("Metabolicotexto").style.position = "relative";
  }
  document.getElementById("demo").innerHTML ;
}
