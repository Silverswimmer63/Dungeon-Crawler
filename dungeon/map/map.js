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
    this._halls = [];
    this._roomMin = 3;
    this._roomMax = 10;
    this._numRooms = 30;
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
  get roomMin(){ return this._roomMin; }
  set roomMin(roomMin){ this._roomMin = Utils.intCheck(roomMin, "Map.roomMin"); }

  get roomMax(){ return this._roomMax; }
  set roomMax(roomMax){ this._roomMax = Utils.intCheck(roomMax, "Map.roomMax"); }

  get numRooms(){ return this._numRooms;}
  set numRooms(numRooms){ this._numRooms = Utils.intCheck(numRooms, "Map.numRooms");}
  /* addRoom()
  add room will use the appropriate functions in our program to generate a set of coordinates based on our map. It will then go to the map,
  and update the cells at the correct coordinates to match the room.
  */
  get halls(){
    return this._halls;
  }
  set halls(halls){
    console.log("this is a error just dont need it rn");
  }
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
  
  /* addHalls()
   *@param {array} map is to be able to change the map;
   *  addHalls adds all halls in one go and connects them randomly with starts of
   *X values or starting with changes of Y values
   */
  addHalls(map = this._map){
    var objArr = [];
    var arrayAmount = Utils.shuffleIndex(this._rooms.length)
    for(var i = 0; i < this._rooms.length; i++){
      var rand = Utils.randMath(1,2);
      for(var j = 1; j< 2; j++){
        if(i == 0){
          var roomone = this._rooms[arrayAmount[i]];
          var roomtwo = this._rooms[arrayAmount[i+1]];
        }
        else{
          var roomone = this._rooms[arrayAmount[i]];
          var roomtwo = this._rooms[arrayAmount[i-1]];
        }
          if(rand == 1){
      objArr.push(Utils.hallYstart(roomone,roomtwo));
          }
          else if(rand == 2){
      objArr.push(Utils.hallYstart(roomone,roomtwo));
          }
      }
    }
    var coordsArray = []
    for(var i = 0; i < objArr.length; i++){
      for(var j = 0; j < objArr[i].length; j++){
        coordsArray.push(objArr[i][j]);
      }
    }
    for(var i = 0; i < coordsArray.length-1; i++){
    let cell = map["y" + (coordsArray[i].y+1)]["x" + (coordsArray[i].x+1)];
    if(cell.type !== "room"){
        cell.image = " "; // todo update type to set the image then have ranked inventy
        cell.type = "hall";
    }
    if(cell.type == "hall"){
    this._halls.push(cell);
    }
    }
  }

/*
@param {start}: int
@param {end}: int
this takes the distnace between two numbers and returns it.
*/
  makeMonsters(perRoom, map = this._map){
    var mobItter = 0;
   while(mobItter < perRoom){
    for(var i = 0; i < this._rooms.length; i++){
    var monsters = Utils.monPlace(3);
    var monsterList = [];
    var mob = false;
    var nomob= false;
    for(var j = 0; j < monsters.length;j++){
      if(monsters[j].length > 1){
        if((monsters[j][0] instanceof Noinventory) && nomob == false){
          monsterList.push(monsters[j][0]);
          nomob = true;
          mob = true;
        }
        else if((monsters[j][0] instanceof Inventory) && mob == false){
          monsterList.push(monsters[j][0]);
          mob = true;
          nomob = true;
        }
      }
      else if((monsters[j] instanceof Inventory) && mob == false){
        monsterList.push(monsters[j]);
        mob = true;
        nomob = true;
      }
      else if((monsters[j] instanceof Noinventory) && nomob == false){
        monsterList.push(monsters[j]);
        nomob = true;
        mob = true;
      }
    }
    if(monsterList.length == 0){
      monsterList.push(monsters[0]);
    }
    var random = Utils.randMath(0, this._rooms[i].length-1);
    var room = this._rooms[i][random];
        let cell = map["y" + (room.y)]["x" + (room.x)];
        cell.occupied.push(monsterList);
    }
    mobItter++;
   }
  }
  makeLoot(perRoom, map = this._map){
    var itemItter = 0;
      while(itemItter < perRoom){
        for(var i = 0;i < this._rooms.length;i++){
         var items = Utils.itemPlace(3);
            var random = Utils.randMath(0, this._rooms[i].length-1);
            var room = this._rooms[i][random];
         for(var j = 0;j<items.length;j++){
            let cell = map["y" + (room.y)]["x" + (room.x)];
            cell.add(items[j]);
           }
          }
        itemItter++;
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
    for (var i = 0; i < this.numRooms; i++) {
      this.addRoom(map); //addRoom expacts this._map to exist
    }
      this.addHalls(map);
      this.makeMonsters(3, map);
      this.makeLoot(2,map)
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
