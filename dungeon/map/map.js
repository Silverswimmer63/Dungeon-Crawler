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
  /*add setters.
The setters for this function for width and height can be added now. However, these will need
to be a little more complex than with other setters we have used. They will need to do the following -
1. Check for value inputted being an int, and giving the correct error message if it is not.
2. now that the map has a new width or height, we have to remake it from scratch or we will get errors. Remake the this._map.
*/
get rooms(){ return this._rooms = [];}
set rooms(rooms){this._rooms =Utils.arrayCheck(rooms, "Map.rooms");}

get roomMax(){ return this._roomMax;}
set roomMax(roomMax){ this._roomMax = Utils.arrayCheck(roomMax, "Map.roomMax");}

get roomMin(){ return this._roomMin;}
set roomMin(roomMin){ this._roomMin = Utils.arrayCheck(roomMin, "Map.roomMin");}

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

  get rooms(){return this._rooms;}
  set rooms(rooms){
    if (this._rooms.length == 0) {
      this._rooms = Utils.arrayCheck(this._rooms,"Map.rooms");
    }else {
      for (var i = 0; i < this._rooms.length; i++) {
        Utils.arrayCheck(this._rooms[i],"Map.rooms - individual room");
        for (var j = 0; j < this._rooms[i].length; j++) {
          Utils.keyCheck(this.rooms[j],[x,y],"Map.rooms");
        }
      }
    }
  }

  get roomMin(){return this._roomMin;}
  set roomMin(roomMin){this._roomMin = Utils.intCheck(this.roomMin);}

  get roomMax(){return this._roomMax;}
  set roomMax(roomMin){this._roomMax = Utils.intCheck(this.roomMax);}
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
  return retMap += this._drawBorder();
}
/*Then we will update the map to have a setter for map,
this will use the two functions above to make sure that the setter
 is given an object with the keys width and
height, and use it to make a new map. After checking the values as well */
set map (dimensions){
  Utils.keyCheck(dimensions,["width", "height"], "Map.map");
  Utils.intCheck(dimensions.width,"Map.map");
  Utils.intCheck(dimensions.height,"Map.map");
  this._width = dimensions.width;
  this._height = dimensions.height;
  this._map =  this._generateMap();
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
for (var i = 1; i <= this._height; i++) {
  var key = "y"+i;
  map[key] ={};
  for (var j = 1; j <= this._width; j++) {
    var key2 = "x"+j;
    map[key][key2] = new this.fill;
   }
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
/*.1 in Map we are going to add a property for rooms called _rooms this should be a blank array by default
.2 Add a getter for rooms that returns the array in rooms
.3 Add a setter for rooms
.4 Add properties for map for max and min room size, make these 3 and 8 by default. Make getters and setters,
have the setters check to see if the value is an int in the setter.
.5 Make a new function in Utils called arrayCheck that does what all the other checkers do, but for arrays
.6 Add the arrayCheck to the setter for rooms
.7 make the setter for rooms check to see if the intended value is a blank array [ ]. If not, then check to
see if each item in the intended item is also an array make the call this time "Map.rooms - individual room"
.8 for each of the items from #7 above check each of the items inside of it to make sure they are all objects
 with the keys X and Y*/
/*_rooms(){
  var rooms = {};
  get rooms (){return this._rooms;}
   set rooms(rooms){
     this._rooms = Utils.keyCheck();

   }
 }*/

}
