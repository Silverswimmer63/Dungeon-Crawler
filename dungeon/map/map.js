/* Class Map (verson 0.1)
This class creates a map that is fully filled with closed or unusable spaces.
In the most basic form of this, these will be represented by the text string '#'
The map will be generated to x width by y height, which will be the only items
in the map constructor. Any and all changes to the map following this will be done
via methods in the map. The map will check inital conditions to make sure the
correct type of data. The fill will be hard coded, and when it is to be changed
to objects of class cell, that will also be hard coded into the map.
@param width {int} the x max value of the map
@param height {int} the y max value of the map
*/

class Map{
  constructor(width, height){
    this._width = Utils.intCheck(width, "Map constructor");
    this._height = Utils.intCheck(height, "Map constructor");
    this._fill = Cell;
    this._rooms = [];
    this._halls = [];
    this._roomMin = 3;
    this._roomMax = 10;
    this._roomNumber = 20;
    this._level = 0;
    this._startRoom = undefined;
    this._map = this._generateMap(); // needs to be at the bottom
    // later: add a level, and a name,
  }

  get width(){ return this._width; }
  set width(width){
    this._width = Utils.intCheck(width, "Map.width");
    this._map = this._generateMap();
  }

  get height(){ return this._height; }
  set height(height){
    this._height = Utils.intCheck(height, "Map.height");
    this._map = this._generateMap();
  }

  get halls() { return this._halls; }
  set halls(number) { this._addHalls(this._map, number); }

  get fill(){ return this._fill; }
  set fill(fill){ this._fill= Utils.keyCheck(fill, "image", "Map.fill"); }

  get map(){ // returns an html formated version of the map
    let retString = this._drawBorder() + "<br>";
    for (var i = 1; i <= this.height; i++) { // go though the y values
      retString += "|";
      for (var j = 1; j <= this.width; j++){ // go though the x values
        retString += "" + this._map["y" + i]["x" + j] ; // add the contents
      }
      retString += "|<br>";
    }
    return retString + this._drawBorder();
  }
  set map(dimensions){
    dimensions = Utils.keyCheck(dimensions, ["width", "height"], "Map.map");
    // not using setters to avoid exccess map generation
    dimensions.width = Utils.intCheck(dimensions.width, "Map.map");
    dimensions.height = Utils.intCheck(dimensions.height, "Map.map");
    // not using setters to avoid exccess type checking
    this._width = dimensions.width;
    this._height = dimensions.height;
    this._map = this._generateMap();
  }

  get rooms() { return this._rooms; }
  set rooms(array) {
    array = Utils.arrayCheck(array, "Map.rooms"); // first level array
    if (array.length == 0) { this._rooms = array; } // this is clearing out the rooms
    else {
      let room;
      for (room of array) {
        Utils.arrayCheck(room, "Map.rooms individual room."); // room check
        if(room.length == 0) { throw new Error("In Map.rooms: One or more room arrays is empty."); }
        let coords;
        for (coords of room) { // coords are {x: value, y: value}
          Utils.keyCheck(coords, ["x", "y"], "Map.rooms individual cell");
        }
      }
      this._rooms = array;
    }
  }

  get min() { return this._roomMin; }
  set min(number){ this._roomMin = Utils.intCheck(number, "Map.min"); }

  get max() { return this._roomMax; }
  set max(number){ this._roomMax = Utils.intCheck(number, "Map.max"); }

  get roomNumber() { return this._roomNumber; }
  set roomNumber(number){
    this._roomNumber = Utils.intCheck(number, "Map.roomNumber");
    this._map = this._generateMap();
  }

  get level() { return this._level; }
  set level(level){ this._level = Utils.typeCheck(level, "int", "Map.level"); }

  /* addRoom()
  add room will use the appropiate functions in our program to generate a set
  of coordinates based on our map. It will then go to the map, and update the
  cells at the correct coordinates to match the room.
  */
  addRoom(map=this._map){

    let canAdd = 0;
    while(canAdd < 200){
      let border = Utils.randRoom(this.width, this.height, this.min+2, this.max+2); // make a set of coordinates based on the map constraints
      // changed the above ^^ +2 not +1 because 2 borders!!
      let overlap = false;

      let coords = Utils.removeBorder(border, this.width, this.height); // trimmed room

      for (let i = 0; i < this._rooms.length; i++) {
        if(!overlap) { overlap = Utils.coordCheck(border, this._rooms[i]); } // so we don't lose a true
      }
      if(!overlap){
        for (let i = 0; i < coords.length; i++) {
          let cell = map["y" + coords[i].y]["x" + coords[i].x];
          cell.type = "room";
        }
        this._rooms.push(coords);
        canAdd += 200;
      }
      canAdd ++;
    }
  }

  /* makeHall(indexA, indexB)
  gets rooms from indexes
  takes a random coord form the INSIDE of room A and a random coord from the inside of room B
  makes those the start and end coords
  makes the hall
  returns the hall
  */
  makeHall(indexA, indexB){

    let roomA = Utils.removeBorder(this.rooms[indexA], this.width, this.height,"Map.makeHall");
    let roomB = Utils.removeBorder(this.rooms[indexB], this.width, this.height,"Map.makeHall");

    let aVals = Utils.roomCorners(roomA, this.width, this.height);
    let bVals = Utils.roomCorners(roomB, this.width, this.height);

    let coordA = Utils.randCoord(aVals.x.min, aVals.x.max, aVals.y.min, aVals.y.max, "Map.makeHall");
    let coordB = Utils.randCoord(bVals.x.min, bVals.x.max, bVals.y.min, bVals.y.max, "Map.makeHall");
    // make the hall
    return Utils.hallCoords(coordA, coordB, "Map.makeHall");
  }

  /* _addHalls()
  Version 1.0 uses makeHall() and shuffleIndex to connect all the rooms to one another.
  Adds all of the resulting halls to this._halls
  Version 2.0 As version 1, but also sets all of the cells for the hall to type "hall"
  Version 3.0 As version 2, but also does not turn a cell to hall if it is a room
  Version 4.0 As version 3, but also add - a param named number with a default value of
  "max" if the value is "max" then set number to connections.length in the function
  in your for loop replace connections.length with number.
  */
  _addHalls(map, number="max"){
    let connections = Utils.shuffleIndex(this.rooms, "Map._addHalls");
    if(number == "max") { number = connections.length; }
    number = Utils.intCheck(number);
    for (var i = 0; i < number -1; i++) {
      let hall = this.makeHall(connections[i], connections[i+1]);
      for (let j = 0; j < hall.length; j++) {
        let cell = map["y" + hall[j].y]["x" + hall[j].x];
        if(cell.type != "room") { cell.type = "hall"; }
        cell.image = "X"
      }
      this._halls.push(hall);
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
  @ return {object} an object per the description above
  */
  _generateMap(){
    let map  = {}
    for (let i = 1; i <= this.height; i++) { // go though the y values
      map["y"+ i] = {} // give them the key values
      for (let j = 1; j <= this.width; j++){ // go though the x values
        map["y" + i]["x" + j] = new this.fill; // add the new key values
      }
    }
    for (let i = 0; i < this._roomNumber; i++) {
      this.addRoom(map); //addRoom expects this._map to exist.
    }
    this._addHalls(map);
    this.startRoom = Utils.randMath(0,Utils.shuffleIndex(this.rooms,"Map.startRoom").length);
    this._addSomthing(map, "Item");
    this._addSomthing(map, "Monster");
  return map; // this is where we make this._map
  }


  /* _drawBorder()
  Makes a border top or bottom for the map. This border will be in the general
  design of +---------------+
  @return {string} a string border
  */
  _drawBorder(){
    let retString = "+";
    for (var i = 0; i < this.width; i++) {
      retString += "-";
    }
    retString += "+";
    return retString;
  }

  _addSomthing(map, thing){
    for (var i = 0; i < this.rooms.length; i++) {
      if (i != this.startRoom) {
        if (Math.random() < .8225) {
          let corners = Utils.roomCorners(this.rooms[i], this.width, this.height);
          if (thing == "Monster") {
            var something = randomFoe(this.level);
          }else {
            var something = randomItem(this.level);
          }
          for (var j = 0; j < something.length; j++) {
            let boo = false;
            while (!boo) {
              let cords = Utils.randCoord(corners.x.min,corners.x.max,corners.y.min,corners.y.max);
              let cell = map["y" + cords.y]["x" + cords.x];
              if ((cell.occupied.length == 0) && (thing == "Monster")) {
                cell.add(something[j]);
                boo = true;
              }
              if (thing == "Item") {
                cell.add(something[j]);
                boo = true;
              }
            }
          }
        }
      }
    }
  }

// _fake(){
   /* for all the rooms
        check to see if the room is not the one where we have to start
        check to see if the chance is good
          get are corners using room corners/store
          get monsters and store them
            for the mosnters .length
            use a bool and asume its false to place the mosnters
              use a while bool = false after this to try to place monsters
              use randcord to get rand coordinates using room corners
              check the map at the y and x cooridnates to see if it is occupied
                if not occupied place monster
                map y x .add were going to have to create the keys
                monster[j]
                shut off the while loop;
   */
 //}


}
