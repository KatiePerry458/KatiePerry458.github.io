function windChill(){
  var temp= parseFloat(document.getElementById("high").innerHTML);
  var speed= parseFloat(document.getElementById("speed").innerHTML);

  if (temp >= 50 || speed >=3) {
  35.74 + (0.6215*temp) - 35.75*(Math.pow(speed, 0.16)) + 0.4275*temp + (Math.pow(speed,0.16));
  }

  else{
    NaN
  }
}