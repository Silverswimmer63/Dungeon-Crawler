/*
Class map
This class is used to create and generate displays of 2 dimential maps.
@param width {int}: width of the map(x coords)
@param height {int}: height of the map(y coords)
*/
class Map{
  constructor(width, height){
    this._width = Utils.intCheck(width), "Map constructor";
    this._height = Utils.intCheck(height), "Map constructor";
    this._fill = "#";
    this._map = this._generateMap();
  }
/*
add setters.
The setters for this function for width and height can be added now. However,
these will need to be a little more complex than with other setters we have used.
They will need to do the following -
1. Check for value inputted being an int, and giving the correct error message if it is not.
2. now that the map has a new width or height, we have to remake it from scratch or we will get errors.
 Remake the this._map.
*/
  get width(){ return this._width; }

  set width(width){
    this._width = Utils.intCheck(width, "Map.width")
    this._map = this._generateMap();
  }

  get height(){ return this._height; }

  set height(height){
    this._height = Utils.intCheck(height, "Map.height")
    this._map = this._generateMap();
  }

  get fill(){ return this._fill; }

  get map(){
    var retMap = "";
    retMap += this._drawBorder() + "<br>";
    for (var i = 1; i < this.Height+1; i++) {
      retMap += "|";
      for (var j = 1; j < this.width+1; j++) {
        retMap += "" + this._map["y"+i]["x"+j];
      }
      retMap += "|<br>";
    }
    return retMap += this._drawBorder();

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
   for (var i = 1; i < this.height+1; i++) {
     var key = "y"+i;
     map[key] = {};
     for (var j = 1; j < this.width+1; j++) {
       var key2 = "x"+j;
       map[key][key2] = this.fill;
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
