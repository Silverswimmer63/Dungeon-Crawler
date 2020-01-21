
/*
Class map
This class is used to create and generate display of two dimwnsional maps.
@param height(int): height if the map(map y cord)*/
class Map{
  constructor(width, height){
    this._width = Utils.intCheck(width, "Map constructor");
    this._height =  Utils.intCheck(height, "Map constructor");
    this._fill = Cell;
    this._map =  this._generateMap();
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
    retMap += "|<br>";
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
  obj[key] ={};
  for (var j = 1; j <= this._width; j++) {
    var key2 = "x"+j;
    map[key][key2] = this.fill;
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
=======
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
  }
  /*3. add setters.
The setters for this function for width and height can be added now. However,
these will need to be a little more complex than with other setters we have used.
 They will need to do the following -
1. Check for value inputted being an int, and giving the correct error message
 if it is not.
2. now that the map has a new width or height, we have to remake it from scratch
or we will get errors. Remake the this._map.*/

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


}
