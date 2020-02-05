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
    this._map = this._generateMap();
    this._rooms = [];
    this._roomMin = 3;
    this._roomMax = 8;
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
  
  /* set room alt
   *set rooms(rooms){
   * if(rooms == []){
   * this._rooms = Utils.arrayCheck(rooms, "Map.rooms");
   * }
   *   for(var i = 0; i < rooms.length; i++){
   *     for(var j = 0; j < rooms[i].length; j++){
   *       if((Number.isInteger(rooms[i][j].x) == true) && (Number.isInteger(rooms[i][j].y) == true)){
   *         if((rooms[i][j].x == undefined || isNaN(rooms[i][j].x) == true)||(rooms[i][j].y == undefined || isNaN(rooms[i][j].y) == true)){
   *           throw new Error("In Map.rooms: One or more room arrays is empty.");
   *         }
   *         this._rooms[i] = Utils.arrayCheck(rooms[i], "Map.rooms-Individual-Rooms");
   *         this._rooms[i][j] = Utils.objCheck(rooms[i][j], "Map.rooms-objCheck-Indiv-Rooms-Check");
   *       }
   *       else{
   *         throw new Error("Map.rooms-obj test checking expected an array with arrays with and object with the values x{int} and y{int} and got " + rooms[i][j][0] + ".");
   *       }
   *     }
   *   }
   *}
   */
 
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
