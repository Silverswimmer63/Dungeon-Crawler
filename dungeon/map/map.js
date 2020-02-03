
/*
Class map
This class is used to create and generate display of two dimwnsional maps.
@param height(int): height if the map(map y cord)*/
class Map{
  constructor(width, height){
    this._width = Utils.intCheck(width, "Map constructor");
    this._height =  Utils.intCheck(height, "Map constructor");
    this._fill = Cell;
    this._map = this._generateMap();
    this._rooms = [];
    this._roomMin = 3;
    this._roomMax = 8;
  }

  get width(){return this._width;}
  set width(width){
    this._width = Utils.intCheck(width, "Map.width");
    this._map = this._generateMap();
  }
  /*add setters.
The setters for this function for width and height can be added now. However, these will need
to be a little more complex than with other setters we have used. They will need to do the following -
1. Check for value inputted being an int, and giving the correct error message if it is not.
2. now that the map has a new width or height, we have to remake it from scratch or we will get errors. Remake the this._map.
*/
set width(width){
  this._width = Utils.intCheck(width, "Map.width");
  this._map =  this._generateMap();
}
set height(height){
  this._height = Utils.intCheck(width, "Map.height");
  this._map =  this._generateMap();
}
  get width(){ return this._width;}
  get height(){return this._height;}
  get fill(){return this._fill;}
   set fill(fill){
     this._fill = Utils.keyCheck(fill, "image", "Map.fill")
   }
  get map(){
    var retMap = "";
  retMap += this._drawBorder()+ "<br>";
  for (var i = 1; i < this.height; i++) {
    retMap += "|";
    for (var j = 1; i < this.width; j++) {
      retMap += ""+ this._map ["y"+i]["x"+j];
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
  /*
  addRoom(){
    var room = Utils.randRoom(this.width, this.height, this.roomMin, this.roomMax);
    for (var i = 0; i < room.length; i++) {
      var key = "x" + room[i].x;
      var key2 = "y" + room[i].y;
      var space = this._map[key2][key];
      space._image = " ";
      space._type = "room";
    }
      this._rooms.push(room);
  }
*/
  /* coordCheck(seta, setb)
  takes 2 arrays of coordinates and checks them to see if there is a coordinate in one that is this in the other. If so it returns a true, if not, it returns a false.
  */
  /*
  3. add a step between making the room coordinates and changing the the map where you check each room in the map array to see
  if any of them have the same coordinates, and if there is overlap, don't add the room
  4. add the correct type of loop structure and other needed items to make said loop stop if the room can be added (per 3 above) or keep going if not added
  5. modify the structure from 4 above so it stops after a room is added or after 200 tries, whichever comes first.
  */

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
    return map;
  }
  return map; //yay
}

/* _drawBorder()
Makes a border top or bottom for the map. This border will be in the general
design of +---------------+
@return {string} a string border
*/
 _drawBorder(){
   var retStr = "+";
   for (var i = 0; i < this.width; i++) {
     retStr +="-";
   }
   return retStr +"+";
 }
/*2. Now we will change the map getter to display the map as the user will see it
(we won't need to use the getter to access the raw map, as we can do that within the class and for debugging with the _map prop.
get map should return a string of the map. This string should start with the upper border,
add a pipe (|) to each side of the map, and end with another copy of the top/bottom border.
It should add line breaks where appropriate as well.

3. add setters.
The setters for this function for width and height can be added now. However,
these will need to be a little more complex than with other setters we have used. They will need to do the following -
1. Check for value inputted being an int, and giving the correct error message if it is not.
2. now that the map has a new width or height, we have to remake it from scratch or we will get errors. Remake the this._map.
*/
 addRoom(){
   var canAdd = false;
   while (!canAdd) {

   let coords = Utils.randRoom(this.width, this.height, this.roomMin, this.roomMax);
   let overlap = false;
   for (var i = 0; i < this._rooms.length; i++) {
     if(!overlap) { overlap = Utils.coordCheck(coords, this._rooms[i]); }
   }
   if (!overlap){
     let cell = this._map["y" + coords[i].y]["x" + coords[i].x];
     cell._image = " ";
     cell._type = "room";
     canAdd = true;
   }
   this._rooms.push(coords);
 }
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
    return retStr += "+";
  }


}
