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

<<<<<<< HEAD
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
    let border = Utils.randRoom(this.width, this.height, this.roomMin +2, this.roomMax +2); // make a set of coordinates based on the map constraints
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
        var isBorder = false;
        if ((border[i].x == max.x) || (border[i].y == max.y) || (border[i].x == min.x) || (border[i].y == min.y)) {
=======
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
  coordinates, and if there is overlap, don't add the room
  border room check
  place none border room no border but after border room check
  */

  addRoom(){
    let num = 0;
    while (num < 200) {
      num ++;
      let overlap = false;
      let border = Utils.randRoom(this.width, this.height, this.roomMin+2, this.roomMax+2); // make a set of coordinates based on the map constraints
      let smalls = {x:this.width+1,y:this.height+1};
      let biggy = {x:0,y:0};
      for (var i = 0; i < border.length; i++) {
        if (border[i].x < smalls.x) {
          smalls.x = border[i].x;
        }
        if (border[i].y < smalls.y) {
          smalls.y = border[i].y;
        }
        if (border[i].x > biggy.x) {
          biggy.x = border[i].x;
        }
        if (border[i].y > biggy.y) {
          biggy.y = border[i].y;
        }
      }
      let coords = [];
      for (var i = 0; i < border.length; i++) {
        var isBorder = false;
        if ((border[i].x == biggy.x)||(border[i].y == biggy.y)||(border[i].x == smalls.x)||(border[i].y == smalls.y)) {
>>>>>>> JAKE
          isBorder = true;
        }
        if (!isBorder) {
          coords.push(border[i]);
        }
      }
      for (let i = 0; i < this._rooms.length; i++) {
        if(!overlap) { overlap = Utils.coordCheck(border, this._rooms[i]); } // so we don't lose a true
      }
      // todo: add a function to pull the outside trim and set to borders
<<<<<<< HEAD
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
=======
    if(!overlap){
      for (let i = 0; i < coords.length; i++) {
        let cell = this._map["y" + coords[i].y]["x" + coords[i].x];
        cell.image = " "; // todo update type to set the image then have ranked inventy
        cell.type = "room";
      }
      num = 200;
      this._rooms.push(coords);
    }
  }
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

/* _generateMap()
A method to make a map filled with items of the this._fill value. The "map" is
an object with a set of objects imbeded within it. All of the top level keys,
which each owns it's own object, will begin with the letter y (ex y1, y2), and
so on. The second level objects will be keyed in the same way, but with x
rather than y for their start. This is done so that we may access the map by
way of using map.y15.x22 to avoid x and y confusion. The values of the keys in
the inner objects will be the individual cells of the map.
>>>>>>> JAKE
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
