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
    this._halls = [];/*
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
    this._numRooms = 30;
    this._map = this._generateMap();
  }

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

  get numRooms(){ return this._numRooms;}
  set numRooms(numRooms){ this._numRooms = Utils.intCheck(numRooms, "Map.numRooms");}
  /* addRoom()
  add room will use the appropriate functions in our program to generate a set of coordinates based on our map. It will then go to the map,
  and update the cells at the correct coordinates to match the room.
  */

  /* add a step between making the room coordinates and changing the the map
  where you check each room in the map array to see if any of them have the same
  coordinates, and if there is overlap, don't add the room
  border room check
  place none border room no border but after border room check
  */

  addRoom(map=this.map){
    let num = 0;
    while (num < 200) {
      num ++;
      let overlap = false;
      let border = Utils.randRoom(this.width, this.height, this.roomMin+2, this.roomMax+2); // make a set of coordinates based on the map constraints
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

/*
@param {start}: int
@param {end}: int
this takes the distnace between two numbers and returns it.
*/


  /* coordCheck(seta, setb)
  takes 2 arrays of coordinates and checks them to see if there is a coordinate in one that is this in the other. If so it returns a true, if not, it returns a false.
  */
  /*
  3. add a step between making the room coordinates and changing the the map where you check each room in the map array to see
  if any of them have the same coordinates, and if there is overlap, don't add the room
  4. add the correct type of loop structure and other needed items to make said loop stop if the room can be added (per 3 above) or keep going if not added
  5. modify the structure from 4 above so it stops after a room is added or after 200 tries, whichever comes first.
  */

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

  get halls(){ return this._halls }
  set halls(halls){ throw new Error("Feature not implemented at this time.") }

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

  _addHalls(){
    var shuff = Utils.shuffleIndex(this.rooms, "Map._addHalls");
    for (var i = 0; i < shuff.length -1; i++) {
      var hall = this._makeHall(shuff[i], shuff[i+1])
      this.halls.push(hall);
    }
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
    this._addHalls();
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
//everything I once loved is gone its all bleak and functional I scream and everyone hears me and is very confused and conserned as I morn the loss of my dumb notes and the death of my bad spacing
