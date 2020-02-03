
/*
class Map
 this class is used to create and generate displays of 2 demensional maps.
 defult map is filled with unreachable spaces.
 @param width {int}: width of the map(max x cord)
 @param height {int}: height of the map(max y cord)
  */
class Map{
  constructor(width,height){
    this._width = Utils.intCheck(width, "map constructor");
    this._height = Utils.intCheck(height, "map constructor");
    this._fill = Cell;
    this._map = this._generateMap();
    this._rooms = [];
    this._roomMax = 8;
    this._roomMin = 3;
  }
  /*3. add setters.
The setters for this function for width and height can be added now. However,
these will need to be a little more complex than with other setters we have used.
 They will need to do the following -
1. Check for value inputted being an int, and giving the correct error message
 if it is not.
2. now that the map has a new width or height, we have to remake it from scratch
or we will get errors. Remake the this._map.*/
  /*
  make the setter for rooms check to see if the intended value is a blank array [ ]. If not,
  then check to see if each item in the intended item is also an array make the call this time "Map.rooms - individual room"
  */
  get rooms(){ return this._rooms = [];}
  set rooms(array){
    array = Utils.arrayCheck(rooms, "Map.rooms");
      if (array.length ==  0) {this._rooms = array;}// this is clearing out the rooms
    else {
      let room;
      for (room of array){
        Utils.arrayCheck(room, "Map.rooms individual room");
        if (room.length == 0) {
          throw new Error("In Map.rooms one or more room arrays is empty"); }
          let coords;
          for (coords of room) {
            Utils.keyCheck(coords, ["x", "y"], "Map.rooms individual cell");
          }
      }
      this._rooms = array;
   }
  }

  get roomMax(){ return this._roomMax;}
  set roomMax(roomMax){this._roomMax = Utils.intCheck(roomMax, "Map.roomMax");}

  get roomMin(){ return this._roomMin;}
  set roomMin(roomMin){this._roomMin = Utils.intCheck(roomMin, "Map.roomMin");}

  get width(){return this._width;}
  set width(width){
    this._width = Utils.intCheck(width, "Map.width");
    this._map = this._generateMap();
  }

  get height(){return this._height;}
  set height(height){
    this._height = Utils.intCheck(height, "Map.height")
    this._map = this._generateMap();
  }

  get fill(){return this._fill;}
  set fill(fill){this._fill = Utils.keyCheck(fill,"image","Map.fill")}

  get map(){
    var retMap = "";
    retMap += this._drawBorder() + "<br>";
    for (var i = 1; i <= this.height; i++) {
      retMap += "|";
      for (var j = 1; j <= this.width; j++) {
        retMap += this._map["y"+i]["x"+j];
      }
      retMap += "|<br>";
    }
    return retMap += this._drawBorder();
  }
/*
Then we will update the map to have a setter for map, this will use the two
 functions above to make sure that the setter is given an object with the keys
  width and height, and use it to make a new map. After checking the values as well
  */
  set map(dimensions){
    Utils.keyCheck(dimensions,["width", "height"], "Map.map");
    Utils.intCheck(dimensions.width,"Map.map");
    Utils.intCheck(dimensions.height,"Map.map");
    this._width = dimensions.width;
    this._height = dimensions.height;
    this._map = this._generateMap();
  }
/* _generateMap()
A method to make a map filled with items of the this._fill value. The "map" is
an object with a set of objects imbeded within it. All of the top level keys,
which each owns it's own object, will begin with the letter y (ex y1, y2), and
so on. The second level objects will be keyed in the same way, but with x
rather than y for their start. This is done so that we may access the map by
way of using map.y15.x22 to avoid x and y confusion. The values of the keys in
the inner objects will be the individual cells of the map.
*/

  _generateMap(){
    var map = {};
    for (var i = 1; i <= this.height; i++) {
      var key = "y"+i;
      map[key] = {};
      for (var j = 1; j <= this.width; j++) {
        var key2 = "x"+j;
        map[key][key2] = new this.fill;
      }
    }
    return map;//yay
  }

  /* _drawBorder()
  Makes a border top or bottom for the map. This border will be in the general
  design of +---------------+
  @return {string} a string border
  */
  _drawBorder(){
    var retStr = "+";
    for (var i = 0; i < this.width; i++) {
      retStr += "-";
    }
    return retStr + "+";
  }


/*addRooms()
add rooms will use the appropriate function in our program to generate a set
of coords based on our map. It will then go to the map, and update the cells
at the correct coords to watch the room.
*/

/*
add a step between making the room coordinates and changing the the map where you
check each room in the map array to see if any of them have the same coordinates,
and if there is overlap, don't add the room

Solution - part 1 - add a step between making the room coordinates and changing
the the map where you check each room in the map array to see if any of them have the same coordinates

for (let i = 0; i < this._rooms.length; i++) {
if(!overlap) { overlap = Utils.coordsCheck(coords, this._room[i]); } // so we don't lose a true
}
and if there is overlap, don't add the room

4. add the correct type of loop structure and other needed item(s) to make said
loop stop if the room can be added (per 3 above) or keep going if not added
this is going to continue to go through the loop until it can make a room
*/

addRoom(){
  let coords = Utils.randRoom(this.width, this.height, this.roomMin, this.roomMax); // make a set of coordinates based on the map constraints
  let overlap = false;
  let canAdd = false;
  for (let i = 0; i < this._rooms.length; i++) {
  if(!overlap) { overlap = Utils.coordCheck(coords, this._rooms[i]); } // so we don't lose a true
  }
  // todo: add a function to pull the outside trim and set to borders
  if(!overlap){
  for (let i = 0; i < coords.length; i++) {
  let cell = this._map["y" + coords[i].y]["x" + coords[i].x];
  cell._image = " "; // todo update type to set the image then have ranked inventy
  cell._type = "room";
  }
  while (!canAdd == false) {

  }
  canAdd = true;
  this._rooms.push(coords);
  }
  }

}
