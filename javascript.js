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

2. add to addRoom functionality to push the room to the _rooms array directly

3. add a step between making the room coordinates and changing the the map where you check each room
 in the map array to see if any of them have the same coordinates, and if there is overlap, don't add the room

4. add the correct type of loop structure and other needed items to make said loop stop if the room
can be added (per 3 above) or keep going if not added

5. modify the structure from 4 above so it stops after a room is added or after 200 tries, whichever comes first.
  two for lops */
