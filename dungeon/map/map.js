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
    this._rooms = [];
    this._roomMin = 3;
    this._roomMax = 10;
    this._numRooms = 25;
    this._map = this._generateMap();

  }

  get numRooms(){ return this._numRooms; }
  set numRooms(numRooms){
    this._numRooms = Utils.intCheck(numRooms, "Map.numRooms");
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
    this._height = Utils.intCheck(height, "Map.height");
    this._map = this._generateMap();
  }

  get fill(){return this._fill;}
  set fill(fill){this._fill = Utils.keyCheck(fill,"image","Map.fill");}

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
  addRoom(map=this.map){
    let num = 0;
    while (num < 200) {
      num ++;
      let border = Utils.randRoom(this.width, this.height, this.roomMin+2, this.roomMax+2); // make a set of coordinates based on the map constraints
      let overlap = false;
      let coords = Utils.removeBorder(border, this.width, this.height);
      for (let i = 0; i < this._rooms.length; i++) {
        if(!overlap) { overlap = Utils.coordCheck(border, this._rooms[i]); } // so we don't lose a true
      }
      // todo: add a function to pull the outside trim and set to borders
    if(!overlap){
      for (let i = 0; i < coords.length; i++) {
        let cell = map["y" + coords[i].y]["x" + coords[i].x];
        cell.image = " "; // todo update type to set the image then have ranked inventy
        cell.type = "room";
      }
      num = 200;
      this._rooms.push(coords);
    }
  }
}

  makeHall(indexA, indexB){
    var rooms = {roomA:Utils.removeBorder(this.rooms[indexA], this.rooms[indexA].height, this.rooms[indexA].width), roomB:Utils.removeBorder(this.rooms[indexB], this.rooms[indexB].height, this.rooms[indexB].width)}
    var coords = {min:{x: 3, y: 3}, max:{x:10, y: 10}};
    for (var i = 0; i < rooms.roomA.length; i++) {
      coords.min.x = Math.min(coords.min.x, rooms.roomA[i].x)
      coords.min.y = Math.min(coords.min.y, rooms.roomA[i].y)
      coords.max.x = Math.max(coords.max.x, rooms.roomA[i].x)
      coords.max.y = Math.max(coords.max.y, rooms.roomA[i].y)
    }
    for (var i = 0; i < rooms.roomB.length; i++) {
      coords.min.x = Math.min(coords.min.x, rooms.roomB[i].x)
      coords.min.y = Math.min(coords.min.y, rooms.roomB[i].y)
      coords.max.x = Math.max(coords.max.x, rooms.roomB[i].x)
      coords.max.y = Math.max(coords.max.y, rooms.roomB[i].y)
    }
    return randCoord()
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
      for (var i = 0; i < this._numRooms; i++) {
        this.addRoom(map);// addRoom expects this._map tpo exists.
    }
    return map;// this is where we make this._map
    for (var i = 0; i < this.numRooms; i++) {
      this.addRoom(map);
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
