<<<<<<< HEAD
//Default javascript generated message for map
document.getElementById("map").innerHTML = "Map Selected";

/*1. Make a new map in javascript.js
2. Find a way to display the map using the function above.
*/
var demo = new Map(70,40);
document.getElementById("map").innerHTML = demo.map;
=======
//default javascript generated message for map\

document.getElementById("map").innerHTML = "Map Selected";

var demo = new Map(70,40)
document.getElementById("map").innerHTML = demo.map;

>>>>>>> JAKE
document.getElementById("drwbtn").onclick = function(){ document.getElementById("map").innerHTML = demo.map; }
