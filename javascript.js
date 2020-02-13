//default javascript generated message for map\

document.getElementById("map").innerHTML = "Map Selected";

var demo = new Map(70,40)//90,50 works well for a bigger map
document.getElementById("map").innerHTML = demo.map;

document.getElementById("drwbtn").onclick = function(){ document.getElementById("map").innerHTML = demo.map; }
