/*
class Map
 this class is used to create and generate displays of 2 demensional maps.
 defult map is filled with unreachable spaces.
 @param width {int}: width of the map(max x cord)
 @param height {int}: height of the map(max y cord)
  */
class Map{
  constructor(width,height){
    this._width = Utils.intCheck(width, "Map constructor")
    this._height = Utils.intCheck(height, "Map constructor");
    this._fill = Cell;
    this._map = this._generateMap();
  }
/*3. add setters.
The setters for this function for width and height can be added now. However, these will need to be a little more complex than with other
setters we have used. They will need to do the following -
1. Check for value inputted being an int, and giving the correct error message if it is not.
2. now that the map has a new width or height, we have to remake it from scratch or we will get errors. Remake the this._map.
*/
  set width(width){
    this._width = Utils.intCheck(width, "Map.width");
    this._map = this._generateMap();
  }
  get width(){return this._width;}
  set height(height){
    this._height = Utils.intCheck(height, "Map.height");
    this._map = this._generateMap();
  }
  get height(){return this._height;}

  get fill(){return this._fill;}

  get map(){
    var retMap = "";
    retMap += this._drawBorder() + "<br>";
    for (var i = 1; i <= this.height; i++) {
      retMap += "|";
      for (var i = 1; i <= this.width; i++) {
        retMap += "" + this._map["y"+i]["x"+j];
      }
      retMap += "|<br>";
    }

    return retMap += this._drawBorder();
  }
  set map(dimensions){
    Utils.keyCheck(dimensions, ["width"], ["height"], "Map.map")
    Utils.intCheck(dimensions.width, "Map.map")
    Utils.intCheck(dimensions.height, "Map.map")
    this._width = dimensions.width;
    this._height = dimensions.height;
    this._map = this._generateMap();
  }

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
