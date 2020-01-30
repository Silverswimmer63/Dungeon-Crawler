/*default javascript*/
/*
1. Make a new map in javascript.js
2. Find a way to display the map using the function above.
*/
document.getElementById("map").innerHTML = "Map Selected";
var demo = new Map(70, 40);
document.getElementById("map").innerHTML = demo.map;

document.getElementById("drwbtn").onclick = function(){ document.getElementById("map").innerHTML = demo.map; }
/*1. add this line to the end of javascript.js
document.getElementById("drwbtn").onclick = function(){ document.getElementById("map").innerHTML = demo.map; }
*/
