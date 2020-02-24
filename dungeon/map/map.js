
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
    this._numRooms = 30;
    this._map = this._generateMap();
  }
  /*3. add setters.
The setters for this function for width and height can be added now. However,
these will need to be a little more complex than with other setters we have used.
 They will need to do the following -
1. Check for value inputted being an int, and giving the correct error message
 if it is not.
2. now that the map has a new width or height, we have to remake it from scratch
or we will get errors. Remake the this._map.*/

  get roomMin(){return this._roomMin;}
  set roomMin(roomMin){this._roomMin = Utils.intCheck(this.roomMin);}

  get roomMax(){return this._roomMax;}
  set roomMax(roomMax){this._roomMax = Utils.intCheck(this.roomMax);}

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

  set map(dimensions){

    Utils.keyCheck(dimensions,["width", "height"], "Map.map");
    Utils.intCheck(dimensions.width,"Map.map");
    Utils.intCheck(dimensions.height,"Map.map");
    this._width = dimensions.width;
    this._height = dimensions.height;
    this._map = this._generateMap();
  }
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
  set rooms(rooms){
    array =Utils.arrayCheck(rooms,"Map.rooms");
    if (array.length == 0) {this._rooms = array;}
    else {
      let room;
      for (room of array){
            Utils.arrayCheck(room, "Map.room individual room.");
        if (room.length == 0) {throw new Error ("In Map.room: One or more arrays is empty.");
          let coords;
          for (coords of room){
            Utils.keyCheck(coords,"");
          }
          }
        }
      }
    }
    /*
    4. We will add getters and setters for numRooms, setter should check if the input is an integer,
     it should also remake the map if this number is changed.
    5. We will update the map generator to run the addRoom method for numRooms amounts of time.
    6. We will work on cell. -
    A. remove references to borders, we don't need those.
    B. set it so that if the cell is set to open, than the cell image is set to " "
    C. set the toSting in the cell to check to see if there is anything in inventory or occupied.
    If there is something in either, have the cell use the toString for those items the order of importance
    for now should just be occupied (mob) > occupied (nonMob) > inventory
    (we will change that later to deal with open and unopened doors, types of items, and so on.
      D. alter addRoom to deal not change the cell image anymore.*/
      get numRooms(){return this._numRooms;}
      set numRooms(numRooms){
       this._numRooms=Utils.intCheck(numRooms,"Map.numRooms");}

    /*    Utils.arrayCheck(rooms,"Map.rooms");
      if (rooms.length == 0) {
        this._rooms = rooms;
      }else {
        for (var i = 0; i < rooms.length; i++) {
          Utils.arrayCheck(rooms[i],"Map.rooms - individual room");
            if (rooms[i].length == 0) {
              throw new Error("In Map.rooms: One or more room arrays is empty.")
            }
          for (var j = 0; j < rooms[i].length; j++) {
            Utils.keyCheck(rooms[i][j],["x","y"],"Map.rooms - individual cordinate");
          }
        }
      }*/

    /*Then we will update the map to have a setter for map, this will use the two
     functions above to make sure that the setter is given an object with the keys
      width and height, and use it to make a new map. After checking the values as well
      */

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
/*
6. We will work on cell. -
A. remove references to borders, we don't need those.
B. set it so that if the cell is set to open, than the cell image is set to " "
C. set the toSting in the cell to check to see if there is anything in inventory or occupied.
If there is something in either, have the cell use the toString for those items the order of
importance for now should just be occupied (mob) > occupied (nonMob) > inventory
(we will change that later to deal with
 open and unopened doors, types of items, and so on.
D. alter addRoom to deal not change the cell image anymore.*/

/*
3. add a step between making the room coordinates and changing the map where you check each room
 in the map array to see if any of them have the same coordinates, and if there is overlap, don't add the room

4. add the correct type of loop structure and other needed items to make said loop stop if the room
can be added (per 3 above) or keep going if not added

5. modify the structure from 4 above so it stops after a room is added or after 200 tries, whichever comes first.
  two for lops */
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
    return retStr + "+";
  }
}
/*.1 in Map we are going to add a property for rooms called _rooms this should be a blank array by default
.2 Add a getter for rooms that returns the array in rooms
.3 Add a setter for rooms
.4 Add properties for map for max and min room size, make these 3 and 8 by default. Make getters and setters,
have the setters check to see if the value is an int in the setter.
.5 Make a new function in Utils called arrayCheck that does what all the other checkers do, but for arrays
.6 Add the arrayCheck to the setter for rooms
.7 make the setter for rooms check to see if the intended value is a blank array [ ]. If not, then check to see
 if each item in the intended item is also an array make the call this time "Map.rooms - individual room"
.8 for each of the items from #7 above check each of the items inside of it to make sure they are all objects
with the keys X and Y
.9 to continue in Map.rooms - for each room make sure it has something in it, otherwise toss the error
"In Map.rooms: One or more room arrays is empty."
*/
