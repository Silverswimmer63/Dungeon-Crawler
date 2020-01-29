/*this will make the map appear and do other things for the overall
 *UI of the game and moake the games for the most part playable :)
 */
//document.getElementById(elementID).innerHTMl = "replacement Text";
//default JS set value
document.getElementById("map").innerHTML = "Map Selected";
/*
1. Make a new map in javascript.js
2. Find a way to display the map using the function above.
*/
var demo = new Map(40,40);
document.getElementById("map").innerHTML = demo.map;
