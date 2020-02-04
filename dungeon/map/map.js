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
    this._roomMin = 3;
    this._roomMax = 8;
  }
  /*3. add setters.
The setters for this function for width and height can be added now. However,
these will need to be a little more complex than with other setters we have used.
 They will need to do the following -
1. Check for value inputted being an int, and giving the correct error message
 if it is not.
2. now that the map has a new width or height, we have to remake it from scratch
or we will get errors. Remake the this._map.*/

  get width(){return this._width;}
  set width(width){
    this._width = Utils.intCheck(width, "Map.width");
    this._map = this._generateMap();
  }

  get height(){return this._height;}
  set height(height){
    this._height = Utils.intCheck(height, "Map.height")
    this._map = this._generateMap();
  }

  get fill(){ return this._fill; }

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
  /*Then we will update the map to have a setter for map, this will use the two
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

  get rooms(){ return this._rooms;}
  set rooms(rooms){
    //.7 make the setter for rooms check to see if the intended value is a blank array [ ].
    //If not, then check to see if each item in the intended item is also an array make the
    //call this time "Map.rooms - individual room"
    //8 for each of the items from #7 above check each of the items inside of
    //it to make sure they are all objects with the keys X and Y
    if (this._rooms.length == 0) {
      this._rooms = Utils.arrayCheck(this._rooms,"Map.rooms");//this is clearing out the rooms
    }else {
      for (var i = 0; i < this._rooms.length; i++) {
        Utils.arrayCheck(this._rooms[i],"Map.rooms - individual room");
        for (var j = 0; j < this._rooms[i].length; j++) {
          Utils.keyCheck(this.rooms[j],[x,y],"Map.rooms");
        }
      }
    }
    /*
    else {
      var room;
      for (room of array) {
        Utils.arrayCheck(room, "Map.rooms individual room.");
        if (room.length == 0) {
          throw new Error("in Map.rooms: one or more room arrays is empty.");
        }
        var coords;
        for (coords of rooms) {
          Utils.keyCheck(coords, ["x","y"], "Map.rooms individual room.")
          }
        }
      }
    }
    */

  }

  get roomMin(){ return this._roomMin; }
  set roomMin(roomMin){ this._roomMin = Utils.intCheck(number, "Map.min") }

  get roomMax(){ return this._roomMax; }
  set roomMax(roomMax){ this._roomMax = Utils.intCheck(number, "Map.max") }

  /*var room = Utils.randRoom(this.width, this.height, this.roomMin, this.roomMax);
  //add a step between making the room coordinates and changing the the map
  //where you checkeach room in the map array to see if any of them have the
  //same coordinates,and if there is overlap, don't add the room
  for (var i = 0; i < room.length; i++) {
    var keyX = "x" + room[i].x;
    var keyY = "y" + room[i].y;
    var space = this._map[keyY][keyX];
    space._image = " ";
    space._type = "room"
  }
  var overlap = false;
  for (var i = 0; i < this._rooms.length; i++) {
    if(!overlap) { overlap = Utils.coordCheck(room, this._rooms[i]); } // so we don't lose a true
  }
  if(overlap == false) { this._rooms.push(room); }
}*/
  /*addRoom()
  addRoom will use the appropriate functions in our program to generate a set of coords
  based on our map. It will then go to the map, and update the cells at the correct
  coords to match the room.
  */
  addRoom(){
    var numTry = 0;
    let border = Utils.randRoom(this.width -1, this.height -1, this.roomMin +1, this.roomMax +1); // make a set of coordinates based on the map constraints
    while (numTry < 200) {
      numTry ++;
      console.log(numTry);
      //let coords = Utils.randRoom(this.width, this.height, this.roomMin, this.roomMax);
      let overlap = false;
      var min = {x:this.width +1,y:this.height +1};
      var max = {x:0,y:0};
      for (var i = 0; i < border.length; i++) {
        if (border[i].x < min.x) {min.x = border[i].x}
        if (border[i].y < min.y) {min.y = border[i].y}
        if (border[i].x < max.x) {max.x = border[i].x}
        if (border[i].y < max.y) {max.y = border[i].y}
      }
      var coords = [];
      for (var i = 0; i < border.length; i++) {
        if ((border[i].x != max.x) || (border[i].y != max.y) || (border[i].x != min.x) || (border[i].y != min.y)) {
          coords.push(border[i]);
        }
      }
      for (let i = 0; i < this._rooms.length; i++) {
        if(!overlap) { overlap = Utils.coordCheck(border, this._rooms[i]); } // so we don't lose a true
      }
      // todo: add a function to pull the outside trim and set to borders
      if(!overlap){
        for (let i = 0; i < coords.length; i++) {
          let cell = this._map["y" + coords[i].y]["x" + coords[i].x];
          cell._image = " "; // todo update type to set the image then have ranked inventy
          cell._type = "room";
        }
        numTry = 200;
        this._rooms.push(coords);
        console.log(numTry);
      }
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
