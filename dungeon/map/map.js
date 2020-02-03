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
   
 /*  addRoom alt
  *addRoom(){
  *  var room = Utils.randRoom(this.width, this.height, this.roomMin, this.roomMax);
  *  for (var i = 0; i < room.length; i++) {
  *    var keyX = "x" + room[i].x;
  *    var keyY = "y" + room[i].y;
  *    var space = this._map[keyY][keyX];
  *    space.image = " ";
  *    space.type = "room";
  *  }
  *}
  */
  
 /*
  *3. add a step between making the room coordinates and changing
  *the the map where you check each room in the map array
  *to see if any of them have the same coordinates
  *and if there is overlap, don't add the room
  *
  *4. add the correct type of loop structure and
  *other needed items to make said loop stop if the
  *room can be added (per 3 above) or keep going if not added
  *
  *5. modify the structure from 4 above so it stops after
  *a room is added or after 200 tries, whichever comes first.
  */

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
    let made = false;
    let coords = Utils.randRoom(this.width, this.height, this.roomMin, this.roomMax); // make a set of coordinates based on the map constraints
    let overlap = false;

    while (made == false) {
    for (let i = 0; i < this._rooms.length; i++) {
      if(!overlap) { overlap = Utils.coordCheck(coords, this._rooms[i]); } // so we don't lose a true
    }
      // todo: add a function to pull the outside trim and set to borders
    if(!overlap){
      for (let i = 0; i < coords.length; i++) {
        let cell = this._map["y" + coords[i].y]["x" + coords[i].x];
        cell.image = " "; // todo update type to set the image then have ranked inventy
        cell.type = "room";
        made = true;
      }
    }
    this._rooms.push(coords);
  }
}
/* My addRoom()
  addRoom(){
    for(var k = 0; k < 200;k++){
     let coords = Utils.randRoom(this.width, this.height, this.roomMin, this.roomMax);
      for(var i = 0; i < this._rooms.length; i++){
            Utils.coordCheck(this._rooms[i],coords);
            if(Utils.coordCheck(this._rooms[i],coords) == true){
              return false;
            }
      }
          for(var i = 0; i < coords.length; i++){
              let cell = this._map["y" + coords[i].y]["x" + coords[i].x];
              cell.image = " ";
              cell.type = "room";
          }
        this._rooms.push(coords);
      return true;
    }
  }  
*/

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
