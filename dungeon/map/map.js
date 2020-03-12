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
    this._numRooms = 20;
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

  get halls(){return this._halls;}
  set halls(number){this._halls = this._addHalls(this._map, number);}
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
  Four -
  make a function in map -
  makeHall(indexA, indexB)
  gets rooms from indexes
  takes a random cord form the INSIDE of room A and a random cord from the inside of room B
  makes those the start and end cords
  makes the hall
  returns the hall
*/
  makeHall(indexA, indexB){
    let room = {roomA:Utils.removeBorder(this.rooms[indexA],this.width,this.height),roomB:Utils.removeBorder(this.rooms[indexB],this.width,this.height)};
    let paramsA = {min:{x:this.width,y:this.height},max:{x:1,y:1}};
    let paramsB = {min:{x:this.width,y:this.height},max:{x:1,y:1}};
    for (var i = 0; i < room.roomA.length; i++) {
      paramsA.min.x = Math.min(paramsA.min.x,room.roomA[i].x);
      paramsA.min.y = Math.min(paramsA.min.y,room.roomA[i].y);
      paramsA.max.x = Math.max(paramsB.max.x,room.roomA[i].x);
      paramsA.max.y = Math.max(paramsA.max.y,room.roomA[i].y);

    }
    let randCoordA = Utils.randCoord(paramsA.min.x,paramsA.max.x,paramsA.min.y,paramsA.max.y,"room.makeHall");
    for (var i = 0; i < room.roomB.length; i++) {
      paramsB.min.x = Math.min(paramsB.min.x,room.roomB[i].x);
      paramsB.min.y = Math.min(paramsB.min.y,room.roomB[i].y);
      paramsB.max.x = Math.max(paramsB.max.x,room.roomB[i].x);
      paramsB.max.y = Math.max(paramsB.max.y,room.roomB[i].y);
    }
    let randCoordB = Utils.randCoord(paramsB.min.x,paramsB.max.x,paramsB.min.y,paramsB.max.y,"room.makeHall");
    return Utils.hallCords(randCoordA,randCoordB);
  }

  /* _addHalls()
Version 1.0 uses makeHall() and shuffleIndex to connect all the rooms to one another.
Adds all of the resulting halls to this._halls
5. add _addHalls() to _generateMap()
_addHalls(map)
Version 2.0 As version 1, but also sets all of the halls to open and to hall be aware that you will need to pass it a parameter, map, from here on out.
_addHalls(map) Version 3.0 As version 2, but also does not turn a cell to hall if it is a room
_addHalls(map, number="max") Version 4.0 As version 3, but also add - a param named number with a default value of
"max" if the value is "max" then set number to connections.length in the function
in your for loop replace connections.length with number.


then change the setter to take the param number, and then use _addHalls to add number halls to the map
*/
  _addHalls(map, number = "max"){
    let shuff = Utils.shuffleIndex(this.rooms);
    if (number = "max") {number = shuffle.length}
    for (var i = 0; i < number-1; i++) {
     var hall = this.makeHall(shuff[i],shuff[i+1]);
     this.halls.push(hall);
     for (var j = 0; j < hall.length; j++) {
       let cell = map["y" + hall[j].y]["x" + hall[j].x];
       cell.type = "hall";
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
  /* _addMonsters()
  1. give each room a 82.25% chance to have a monster roll for it.   randNum
  2. it will then store those reults     store in an array
  3. will then place them on the map, being mindful not using the same place twice.     check for other monsters and maps
  */
  /* _addItems()
1. give each room a 82.25% chance to have a item roll for it.
2. it will then store those results
3. will then place them on the map, being mindful not using the same place twice.
*/
//for loop all rooms, check room if its start room, check chance to spawn monster,
//check coerners using room chorners, put a if in the for, use randFoe to call to the monsters,
//need another for statment for monsters, [0]track using a boolean to see if we can spawn,
//tack if we place in true or false use while, check cordinates with randCoord and room cords and then ,
//check the location, something cell.ocupied, check the cordinats if the cell is ocupied,
//if not occupied(map.y, map.x .add monster from for loop j), change driving bool
  _addMonsters(mon){
    var mat = Utils.randMath()
    var roo = Map.addRoom()
    for (var i = 0; i < this._rooms.length; i++) {
      //check if its the start room

      if(Math.random() < .8225)
      var rooms = Utils.roomCorners(this._rooms[i], this.width, this.height)
      var coords = Utils.randCoord(rooms.x.min, rooms.x.max, rooms.y.min, rooms.y.max);
      var foe = this._randFoe();

      }
      for (var j = 0; j < array.length; j++) {
       //use a boolean for monsters spawns
       //use roomCorners to see if it can spawn in said room
       /*track using a boolean to see if we can spawn,
       tack if we place in true or false use while, check cordinates with randCoord and room cords and then ,
       check the location, something cell.ocupied, check the cordinats if the cell is ocupied*/
       var
       
      }




      else {
          // give a 82.25% chance to spawn in room

    for (var i = 0; i < this._rooms.length; i++) {
      if (i != this._startroom) {
        if(Math.random() < .8225)
        var rooms = Utils.roomCorners(this._rooms[i], this.width, this.height)
        var coords = Utils.randCoord(rooms.x.min, rooms.x.max, rooms.y.min, rooms.y.max);
        var foe = this._makeFoe();
      }
      }
      for (var j = 0; j < .length; j++) {//store the resulting info in an array over here

      }
    }
  }

  }





//ahhhhhhhhhhhhhhhhhhhhhhhh stooooooooooooop pleeeesesseseseseseseseseseseseeeee
}



//everything I once loved is gone its all bleak and functional I scream and everyone hears me and is very confused and conserned as I morn the loss of my dumb notes and the death of my bad spacing
