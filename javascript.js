//default javascript generated message for map
/*
1. Make a new map in javascript.js
2. Find a way to display the map using the function above.
*/
document.getElementById("map").innerHTML = "Map selected";

var demo = new Map(70,40);
document.getElementById("map").innerHTML = demo.map;

document.getElementById("drwbtn").onclick = function(){ document.getElementById("map").innerHTML = demo.map}
