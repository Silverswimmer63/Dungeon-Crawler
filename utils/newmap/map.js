class Map{
  constructor(width, height){
    this.width = Utills.intcheck(width, "Map constructor");
    this._height = Utills.intcheck(height, "Map constructor");
    this._fill = new Cell;
    this._map ={this._generateMap()};


  get fill{}{return this._fill;}
  get fill(fill){this._fill = Utils.keyCheck(this.fill,"image","Map.fill")
}
  /*
  3. add setters.
The setters for this function for width and height can be added now. However,
these will need to be a little more complex than with other setters we have used.
 They will need to do the following -
1. Check for value inputted being an int, and giving the correct error message if it is not.
2. now that the map has a new width or height, we have to remake it from scratch
 or we will get errors. Remake the this._map.
*/
set width(width){
  Utils.intCheck(width, "Map.width");
  this._map = this._generateMap();
}
set height(height){
  Utils.intCheck(height, "Map.height");
  this._map = this._generateMap();
}
  get width(){ return this._width }
  get height(){ return this._height }
  get fill(){return this._fill}
  get map (){
    var retMap = "";
    retMap += this._drawBorder() +"<br>";
    for (var i = 1; i < this.height; i++) {
      retMap += "|";
      for (var j = 1; j < this.width; j++) {
        retMap += "" + this._map["y" + i]["y" + i]
      }
      retMap += "|<br>";
    }
    return retMap += this._drawBorder()
}
/*
Then we will update the map to have a setter for map, this will use the two
functions above to make sure that the setter is given an object with the keys
width and height, and use it to make a new map. After checking the values as well
*/
set map(dimensions){
  Utils.keyCheck(dimensions, ["width", "height"       coords.push(border[i]);
     }
     }
get cell(){return this._cell}
get open(){return this._open}
get border(){return this._border}




set cell(cell){this._cell = cell}
set open(open){this._open = open}
set border(border){this._border = border}
     space.image = " ";
     space.type = "room";
     for (var i = 0; i < this.room.length; i++) {], "Map.map");
  Utils.intCheck(dimensions.width, "Map.map");
    Utils.intCheck(dimensions.height, "Map.map");
    this.width = dimensions.width;
    this.height = dimensions.height;
    this._map = this._generateMap();
}
/*
3. add setters.
The setters for this function for width and height can be added now. However,
these will need to be a little more complex than with other setters we have used.
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

/* add a step between making the room coordinates and changing the the map
where you check each room in the map array to see if any of them have the same
coordinates, and if there is overlap, don't add the room*/
/*
- which one will we use to check for overlap?
- which one can should we store in the room away?
1. We will fix the issue with the logic in addRoom.
2. We will fix up a few bugs in addRoom.
3. We will add a new parameter to the class room, _numRooms = 25
4. We will add getters and setters for numRooms, setter should check if the
input is an integer, it should also remake the map if this number is changed.
5. We will update the map generator to run the addRoom method for numRooms amounts of time.
6. We will work on cell. -
A. remove references to borders, we don't need those.
B. set it so that if the cell is set to open, than the cell image is set to " "
C. set the toSting in the cell to check to see if there is anything in inventory
or occupied. If there is something in either, have the cell use the toString for
those items the order of importance for now should just be
occupied (mob) > occupied (nonMob) > inventory (we will change that later to deal
with open and unopened doors, types of items, and so on.
D. alter addRoom to deal not change the cell image anymore.
*/
  addRoom(){
   var room = Utils.randRoom(this.width, this.height, this.roomMin +2, this.roomMax +2);
   for (var i = 0; i < room.length; i++) {
     var keyX = "x" + room[i].x;
     var keyY = "y" + room[i].y;
     var space = this._map[keyY][keyX];
     var max = {x:this.width+1, y:this.height+1};
     var min = {x:0, y:0};
   }
     for (var i = 0; i < border.length; i++) {
    if (border[i].x < min.x) {
min.x = border[i].x;
    }
    if (border[i].y < min.y) {
min.y = border[i].y;
    }
    if (border[i].x > max.x) {
      max.x = border[i].x;
    }
    if (border[i].y > max.y) {
      max.y = border[i].y;
    }
     }

     let coords = [];
     for (var i = 0; i < border.length; i++) {
       var isBorder = false;
       if ((border[i].x == max.x)||(border[i].y == min.x)||(border[i].x == min.x)||(border[i].y == min.y)) {
       iisBorder = true;
     }
     if (!iisBorder) {
       coords.push(border[i]);
     }
     }
   }
/*

  static addRoom(){
   var room = Utils.randRoom(this.width, this.height, this.roomMin +2, this.roomMax +2);
   for (var i = 0; i < room.length; i++) {
     var keyX = "x" + room[i].x;
     var keyY = "y" + room[i].y;
     var space = this._map[keyY][keyX];
     var max = {x:this.width+1, y:this.height+1};
     var min = {x:0, y:0};
   }
     for (var i = 0; i < border.length; i++) {
    if (border[i].x < min.x) {
min.x = border[i].x;
    }
    if (border[i].y < min.y) {
min.y = border[i].y;
    }
    if (border[i].x > max.x) {
      max.x = border[i].x;
    }
    if (border[i].y > max.y) {
      max.y = border[i].y;
    }
     }

     let coords = [];
     for (var i = 0; i < border.length; i++) {
       var isBorder = false;
       if ((border[i].x == max.x)||(border[i].y == min.x)||(border[i].x == min.x)||(border[i].y == min.y)) {
       iisBorder = true;
     }
     if (!iisBorder) {
       coords.push(border[i]);
     }
     }


     space.image = " ";
     space.type = "room";
     for (var i = 0; i < this.room.length; i++) {
     }
       for (var j = 0; j < this.room[i].length; j++) {
        let overlap = false;
      }
         for (let i = 0; i < this._rooms.length; i++) {
if(!overlap) { overlap = Utils.coordsCheck(coords, this._rooms[i]); } // so we don't lose a true
}
if (true) {

}
         if(this._rooms[i][j]=coords){
           throw new Error("not allowed")
         }
         else
         this._rooms.push(room);
  */
get cell(){return this._cell}
get open(){return this._open}
get border(){return this._border}

set cell(cell){this._cell = cell}
set open(open){this._open = open}
set border(border){this._border = border}
     space.image = " ";
     space.type = "room";
     for (var i = 0; i < this.room.length; i++) {
     }
       for (var j = 0; j < this.room[i].length; j++) {
        let overlap = false;
      }
         for (let i = 0; i < this._rooms.length; i++) {
if(!overlap) { overlap = Utils.coordsCheck(coords, this._rooms[i]); } // so we don't lose a true
}
if (true) {

}
         if(this._rooms[i][j]=coords){
           throw new Error("not allowed")
         }
         else


this._rooms.push(room);
 }

/* coordCheck(seta, setb)
takes 2 arrays of coordinates and checks them to see if there is a coordinate in one that is this in the other. If so it returns a true, if not, it returns a false.
*/
/*
3. add a step between making the room coordinates and changing the the map where you check each room in the map array to see
if any of them have the same coordinates, and if there is overlap, don't add the room
4. add the correct type of loop structure and other needed items to make said loop stop if the room can be added (per 3 above) or keep going if not added
5. modify the structure from 4 above so it stops after a room is added or after 200 tries, whichever comes first.
*/
_generateMap(){
  let map ={}
  for(let i = 1; i <= this._height; i==){
    map["y"+ i] = {}
  }
    for(let j = 1; j<= this.width; j++){
      map
    }
