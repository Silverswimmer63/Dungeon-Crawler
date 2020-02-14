/*@class Map
 *this class is used to create and generate displays of 2 demensional maps.
 *defult map is filled with unreachable spaces.
 *@param width {int}: width of the map(max x cord)
 *@param height {int}: height of the map(max y cord)
 */
class Map{
  constructor(width,height){
    this._width = Utils.intCheck(width, "map constructor");
    this._height = Utils.intCheck(height, "map constructor");
    this._fill = Cell;
    this._rooms = [];
    this._roomMin = 3;
    this._roomMax = 8;
    this._numroom = 25;
    this._map = this._generateMap();
  }
  
  /*width Getters and Setters*/
  get width(){return this._width;}
  set width(width){
    this._width = Utils.intCheck(width, "Map.width");
    this._map = this._generateMap();
  }
  
  /*height Getters and Setters*/
  get height(){return this._height;}
  set height(height){
    this._height = Utils.intCheck(height, "Map.height");
    this._map = this._generateMap();
  }
  
  /*fill Getters and Setters*/
  get fill(){return this._fill;}
  set fill(fill){this._fill = Utils.keyCheck(fill,"image","Map.fill");}
  
  /*rooms Getters and Setters*/
  get rooms(){return this._rooms;}
  set rooms(array){
    array = Utils.arrayCheck(array,"Map.rooms");
    if(array.length == 0){ this._rooms = array;}
    else{
      let room;
      for(room of array){
        if(room.length == 0){
          throw new Error("In Map.rooms: one or more of the rooms are empty");
        }
        let coords;
        for(coords of room){
          Utils.keyCheck(coords, ["x","y"], "Map.rooms individual cell");
        }
      }
      this._rooms = array;
    }
  }
  /*roomMax and roomMin Getters*/
  get roomMax(){return this._roomMax;}
  get roomMin(){return this._roomMin;}
  
  /*roomMax and roomMin Setters*/
  set roomMax(roomMax){this._roomMax = Utils.intCheck(this.roomMax);}
  set roomMin(roomMin){this._roomMin = Utils.intCheck(this.roomMin);}
  
  /*map Getters and Setters*/
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
     get numroom(){
    return this._numroom;
  }
  set numroom(numroom){
    this._numroom = Utils.intCheck(numroom, "Map.numroom");
    this._map = this._generateMap();
  } 

  /*@function addRoom()
   *
   *add room will use the appropriate functions in our
   *program to generate a set of coordinates based on our map.
   *it will then go to the map, and upadate the cells
   *at the coordinates to match the room.
   *
   *@class addRoom() - adds rooms onto the map 
   *@returns {array} it will return an array of coords to set to locatioons on the map
   */
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
        let border = Utils.randRoom(this.width, this.height, this.roomMin+2, this.roomMax+2); // make a set of coordinates based on the map constraints
      num ++;
      let overlap = false;
      let border = Utils.randRoom(this.width, this.height, this.roomMin+2, this.roomMax+2); // make a set of coordinates based on the map constraints
      let smalls = {x:this.width+1,y:this.height+1};
      let biggy = {x:0,y:0};
      for (var i = 0; i < border.length; i++) {
        if (border[i].x < smalls.x) { smalls.x = border[i].x; }
        if (border[i].y < smalls.y) { smalls.y = border[i].y; }
        if (border[i].x > biggy.x) { biggy.x = border[i].x; }
        if (border[i].y > biggy.y) { biggy.y = border[i].y; }
      }
      let coords = [];
      for (var i = 0; i < border.length; i++) {
        var isBorder = false;
        if ((border[i].x == biggy.x)||(border[i].y == biggy.y)||(border[i].x == smalls.x)||(border[i].y == smalls.y)) {
          isBorder = true;
        }
        if (!isBorder) { coords.push(border[i]); }
      }
      for (let i = 0; i < this._rooms.length; i++) {
        if(!overlap) { overlap = Utils.coordCheck(border, this._rooms[i]); } // so we don't lose a true
      }
      // todo: add a function to pull the outside trim and set to borders
      if(!overlap){
        for (let i = 0; i < coords.length; i++) {
          let cell = map["y" + coords[i].y]["x" + coords[i].x];
          cell.open;
          cell.type = "room";
        }
        num = 200;
        this._rooms.push(coords);
      }
    }
  }
    }


  /*@function _generateMap()
   *@returns {array} an array of objects with objects
   */
gin/Euan
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
      this.addRoom(map); //addRoom expacts this._map to exist
    }
    return map;//this is where we make this._map
  }

  /*@function _drawBorder()
   *
   *Makes a border top or bottom for the map. This border will be in the general
   *design of +---------------+
   *
   *@return {string} a string border
   */
  _drawBorder(){
    var retStr = "+";
    for (var i = 0; i < this.width; i++) {
      retStr += "-";
    }
    return retStr += "+";
  }
}
