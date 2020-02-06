class Map{
  constructor(width, height){
    this.width = Utills.intcheck(width, "Map constructor");
    this._height = Utills.intcheck(height, "Map constructor");
    this._fill = new Cell;
    this._map ={this._generateMap()};
  }
  get fill{}{return this._fill;}
  get fill(fill){this._fill = Utils.keyCheck(this.fill,"image","Map.fill")
}
  /*
  3. add setters.
The setters for this function for width and height can be added now. However,
these will need to be a little more complex than with other setters we have used.
 They will need to do the following -
1. Check for value inputted being an int, and giving the correct error message if it is not.
2. now that the map has a new width or height, we have to remake it from scratch
 or we will get errors. Remake the this._map.
*/
set width(width){
  Utils.intCheck(width, "Map.width");
  this._map = this._generateMap();
}
set height(height){
  Utils.intCheck(height, "Map.height");
  this._map = this._generateMap();
}
  get width(){ return this._width }
  get height(){ return this._height }
  get fill(){return this._fill}
  get map (){
    var retMap = "";
    retMap += this._drawBorder() +"<br>";
    for (var i = 1; i < this.height; i++) {
      retMap += "|";
      for (var j = 1; j < this.width; j++) {
        retMap += "" + this._map["y" + i]["y" + i]
      }
      retMap += "|<br>";
    }
    return retMap += this._drawBorder()
}
/*
Then we will update the map to have a setter for map, this will use the two
functions above to make sure that the setter is given an object with the keys
width and height, and use it to make a new map. After checking the values as well
*/
set map(dimensions){
  Utils.keyCheck(dimensions, ["width", "height"], "Map.map");
  Utils.intCheck(dimensions.width, "Map.map");
    Utils.intCheck(dimensions.height, "Map.map");
    this.width = dimensions.width;
    this.height = dimensions.height;
    this._map = this._generateMap();
}
/*
3. add setters.
The setters for this function for width and height can be added now. However,
these will need to be a little more complex than with other setters we have used.
get rooms(){ return this._rooms; }
set rooms(array){
  array = Utils.arrayCheck(array, "Map.rooms"); // first level array
  if (array.length == 0) { this._rooms = array; } // this is clearing out the rooms
  else {
    let room;
    for (room of array){
      Utils.arrayCheck(room, "Map.rooms individual room.")
      if (room.length == 0) { throw new Error("In Map.room: One or more room arrays is empty.") }
      let coords;
      for (coords of room){ // reminder coords are {x: value, y:value}
        Utils.keyCheck(coords, ["x", "y"], "Map.rooms individual cell")
      }
    }
    this._rooms = array;
  }
}

get roomMin(){ return this._roomMin; }
set roomMin(roomMin){ this._roomMin = Utils.intCheck(roomMin, "Map.roomMin"); }

get roomMax(){ return this._roomMax; }
set roomMax(roomMax){ this._roomMax = Utils.intCheck(roomMax, "Map.roomMax"); }

/* addRoom()
add room will use the appropriate functions in our program to generate a set of coordinates based on our map. It will then go to the map,
and update the cells at the correct coordinates to match the room.
*/

/* add a step between making the room coordinates and changing the the map
where you check each room in the map array to see if any of them have the same
coordinates, and if there is overlap, don't add the room*/
addRoom(){
  let made = false;
  let coords = Utils.randRoom(this.width, this.height, this.roomMin, this.roomMax); // make a set of coordinates based on the map constraints
  let overlap = false;

  while (made == false) {
  for (let i = 0; i < this._rooms.length; i++) {
    if(!overlap) { overlap = Utils.coordCheck(coords, this._rooms[i]); } // so we don't lose a true
  }
    // todo: add a function to pull the outside trim and set to borders
  if(!overlap){
    for (let i = 0; i < coords.length; i++) {
      let cell = this._map["y" + coords[i].y]["x" + coords[i].x];
      cell.image = " "; // todo update type to set the image then have ranked inventy
      cell.type = "room";
      made = true;
    }
  }
  this._rooms.push(coords);
}
}


/* coordCheck(seta, setb)
takes 2 arrays of coordinates and checks them to see if there is a coordinate in one that is this in the other. If so it returns a true, if not, it returns a false.
*/
/*
3. add a step between making the room coordinates and changing the the map where you check each room in the map array to see
if any of them have the same coordinates, and if there is overlap, don't add the room
4. add the correct type of loop structure and other needed items to make said loop stop if the room can be added (per 3 above) or keep going if not added
5. modify the structure from 4 above so it stops after a room is added or after 200 tries, whichever comes first.
*/
_generateMap(){
  let map ={}
  for(let i = 1; i <= this._height; i==){
    map["y"+ i] = {}
  }
    for(let j = 1; j<= this.width; j++){
      map 
    }
