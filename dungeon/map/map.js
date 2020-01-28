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
    this._roomMax = 3;
    this._roomMin = 8;
  }

  //getters
  get width(){return this._width;}
  get height(){return this._height;}
  get fill(){return this._fill;}
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
  get rooms(){return this._rooms;}
  get roomMax(){return this._roomMax}
  get roomMin(){return this._roomMin}

  //setters
  set width(width){
    this._width = Utils.intCheck(width, "Map.width");
    this._map = this._generateMap();
  }
  set height(height){
    this._height = Utils.intCheck(height, "Map.height")
    this._map = this._generateMap();
  }
  set fill(fill){this._fill = Utils.keyCheck(fill,"image","Map.fill");}
  set map(dimensions){
    Utils.keyCheck(dimensions,["width", "height"], "Map.map");
    Utils.intCheck(dimensions.width,"Map.map");
    Utils.intCheck(dimensions.height,"Map.map");
    this._width = dimensions.width;
    this._height = dimensions.height;
    this._map = this._generateMap();
  }
  set rooms(rooms){this._room = Utils.arrayCheck(rooms, "Map.rooms");}
  set roomMac(roomMax){this._roomMax = Utils.intCheck(roomMax);}
  set roomMin(roomMin){this._roomMin = Utils.intCheck(roomMin);}

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

  /*
  .2 Add a getter for rooms that returns the array in rooms
  .3 Add a setter for rooms
  .4 Add properties for map for max and min room size, make these 3 and 8 by default.
  Make getters and setters, have the setters check to see if the value is an int in the setter.
  .5 Make a new function in Utils called arrayCheck that does what all the other checkers do,but for arrays
  .6 Add the arrayCheck to the setter for rooms
  .7 make the setter for rooms check to see if the intended value is a blank array [ ].
  If not, then check to see if each item in the intended item is also an array make the call this time "Map.rooms - individual room"
  .8 for each of the items from #7 above check each of the items inside of it to make sure they are all objects with the keys X and Y
  */
}
