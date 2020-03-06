// default javascript generated message for map
document.getElementById("map").innerHTML = "Map Selected";


let demo = new Map(70, 40);
document.getElementById("map").innerHTML = demo.map;

// basic room redrawing
document.getElementById("drwbtn").onclick = function(){ document.getElementById("map").innerHTML = demo.map; }
