/*
Class Map
this class is used to create and generate displays of 2 dimensional maps.
@param width {int}: width of the map(map x coord)
@param heigth {int}: height of the map(map y coord)
*/
class Map{
  constructor(width, height){
    this._width = Utils.intCheck(width);
    this._heigth = Utils.intCheck(height);
    this._fill = "#";
    this.map = this._generateMap();
  }

  get width(){ return this._width; }
  get heigth(){ return this._heigth; }
  get fill(){ return this.fill; }
  get map(){ return this.map; }

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
      var key = "y" + i;
      map[key] = {};
      for (var j = 1; j <= this.width; j++) {
        var key2 = "x" + j;
        map[key][key2] = this.fill;
      }
    }
    return map;
  }

}
