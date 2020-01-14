/*
Class map
This class is used to create and generate displays of 2 dimential maps.
@param width {int}: width of the map(x coords)
@param height {int}: height of the map(y coords)
*/
class Map{
  constructor(width, height){
    this._width = Utils.intCheck(width);
    this._height = Utils.intCheck(height);
    this._fill = "#";
    this._map = this._generateMap();
  }

  get width(){ return this._width; }
  get height(){ return this._height; }
  get fill(){ return this._fill; }
  get map(){ return this._map; }


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
     retStr + "-";
   }
   return retStr + "+";
 }
}
