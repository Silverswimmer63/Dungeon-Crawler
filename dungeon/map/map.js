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
  set rooms(array){
    array = Utils.arrayCheck(rooms, "Map.rooms");
    if (array.length == 0) { this._rooms = array; }
    else {
      for (var room of array) {
        Utils.arrayCheck(room, "Map.rooms individual room.");
        if (room.length == 0) { throw new Error("In Map.rooms: One or more room arrays is empty."); }
        for (var coords of room) {
          Utils.keyCheck(coords, ["x", "y"], "Map.rooms individual cell");
        }
      }
      this._rooms = array;
    }
  }
  set roomMac(roomMax){this._roomMax = Utils.intCheck(roomMax);}
  set roomMin(roomMin){this._roomMin = Utils.intCheck(roomMin);}

  /* addRoom()
  add room will use the appropriate function in our program and to generate a set
  of coordinates based on our map, It will then go to the map and update the cells
  at the correct coordinates to match the room
  */
  addRoom(){
    var retArr = [];
    var room = Utils.randRoom(this.width, this.height, this.roomMin, this.roomMax);
    for (var i = 0; i < room.length; i++) {
      var key = "x" + room[i].x;
      var key2 = "y" + room[i].y
      var space = this._map[key2][key];
      space.image = " ";
      space.type = "room";
      retArr.push(space);
    }
    return retArr
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
