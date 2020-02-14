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
  addRoom(set = this._map){
    let num = 0;
    while (num < 200) {
        let border = Utils.randRoom(this.width, this.height, this.roomMin+2, this.roomMax+2); // make a set of coordinates based on the map constraints
      num ++;
      let overlap = false;
      var coords = Utils.removeBorder(border, this._height, this._width);
      console.log(coords);
      // todo: add a function to pull the outside trim and set to borders
    if(!overlap){
      for (let i = 0; i < coords.length; i++) {
        let cell = set["y" + coords[i].y]["x" + coords[i].x];
        cell.open;
        cell.type = "room";
      }
      num = 200;
      this._rooms.push(coords);
    }
  }
}


  /*@function _generateMap()
   *@returns {array} an array of objects with objects
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
    for(var i = 0; i < this._numroom; i++){
this.addRoom(map);
}
    return map;
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
