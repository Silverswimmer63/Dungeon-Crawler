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
    this._halls = [];
    this._roomMin = 3;
    this._roomMax = 10;
    this._numRooms = 25;
    this._map = this._generateMap();
  }
  get halls(){ return this._halls; }
  set halls(halls){ throw new Error("Feature not implemented at this time.") }

  get numRooms(){ return this._numRooms; }
  set numRooms(numRooms){ this._numRooms = Utils.intCheck(numRooms, "Map.numRooms"); }

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

_addHalls(map){
  var shuffle = Utils.shuffleIndex(this.rooms);
  for (var i = 0; i < shuffle.length-1; i++) {
    var array = this._makeHall(shuffle[i], shuffle[i+1]);
    this._halls.push(array);
    for (var j = 0; j < array.length; j++) {
      let cell = map["y" + array[j].y]["x" + array[j].x];
      cell.type = "hall";
    }
  }
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
      for (var i = 0; i < this._numRooms; i++) {
        this.addRoom(map);// addRoom expects this._map to exists.
    }
    this._addHalls(map);
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

  /*
  make a function in map -

  makeHall(indexA, indexB)
  gets rooms from indexes
  takes a random cord from the INSIDE of room A and a random cord from the inside of room B
  makes those the start and end cords
  makes the hall
  returns the hall
  */
  _makeHall(indexA, indexB){
    var remover = {roomA: Utils.removeBorder(this.rooms[indexA], this.width, this.height), roomB: Utils.removeBorder(this.rooms[indexB], this.width, this.height)};
    var setA = {min:{x:this.width,y:this.height}, max:{x:1, y:1}};
    var setB = {min:{x:this.width,y:this.height}, max:{x:1, y:1}};
    for (var i = 0; i < remover.roomA.length; i++) {
      setA.max.x = Math.max(setA.max.x, remover.roomA[i].x);
      setA.max.y = Math.max(setA.max.y, remover.roomA[i].y);
      setA.min.x = Math.min(setA.min.x, remover.roomA[i].x);
      setA.min.y = Math.min(setA.min.y, remover.roomA[i].y);
    }
    for (var i = 0; i< remover.roomB.length; i++) {
      setB.max.x = Math.max(setB.max.x, remover.roomB[i].x);
      setB.max.y = Math.max(setB.max.y, remover.roomB[i].y);
      setB.min.x = Math.min(setB.min.x, remover.roomB[i].x);
      setB.min.y = Math.min(setB.min.y, remover.roomB[i].y);
    }
    var aCoords = Utils.randCoord(setA.min.x, setA.max.x, setA.min.y, setA.max.y)
    var bCoords = Utils.randCoord(setB.min.x, setB.max.x, setB.min.y, setB.max.y)
    return Utils.hallCords(aCoords, bCoords);
  }

}
