//default js generated message for a map.
var demo = new Map(70, 40);
document.getElementById("map").innerHTML = demo.map;

document.getElementById("drwbtn").onclick = function(){ document.getElementById("map").innerHTML = demo.map; }


/*
1. Make a new map in javascript.js
2. Find a way to display the map using the function above.
*/

/*
.1 in Map we are going to add a property for rooms called _rooms this should be
a blank array by default
.2 Add a getter for rooms that returns the array in rooms
.3 Add a setter for rooms
.4 Add properties for map for max and min room size, make these 3 and 8 by default.
Make getters and setters, have the setters check to see if the value is an int in the setter.
.5 Make a new function in Utils called arrayCheck that does what all the other checkers do, but for arrays
*/
