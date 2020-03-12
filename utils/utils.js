/* Class Utils
A set of utility functions that may want to be used all over the project
*/ 
class Utils {

  /* typeCheck(item, type, call);
  @param item: {mixed} an item to be checked for type
  @param type: {string} the type to check it is an instance of.
  @param call: {string} the location of the custom error thow.
  @return {mixed} returns the item unless it it tosses an error.
  */
  static typeCheck(item, type, call="Utils.typeCheck"){
    type = type.toLowerCase();
    // check type for whitelist to avoid typos, pick up some shorthand
    if(type === "bool"){ type = "boolean"; }
    if(type === "str"){ type = "string" ; }
    if(type === "class" || type === "constructor"){ type = "function"}
    if(type === "obj"){ type = "object"}
    if(type === "int"){ type = "integer"};
    var whitelist = ["int", "integer",  "function", "object", "number", "string", "boolean", "array"];
    var errorText = "The method " + call + " expected a(n) " + type + " and received " + item + ".";
    // check to see if the type is null, if so, return the error.
    if(item == null){ throw new Error(errorText); }
    // chuck out an error if the type is not on the whitelist.
    if(whitelist.indexOf(type) === -1){
      throw new Error("Unexpected type of variable '"+ type + "' for check in method " + call + ".");
    }
    // special case: array
    if(type == "array"){
      if(Array.isArray(item)){ return item; }
      else{ throw new Error(errorText); }
    }
    // special case: number is int
    if (["int", "integer"].indexOf(type) !== -1){
      if(Number.isInteger(item)){ return item; }
      else{ throw new Error(errorText); }
    }
    // base case
    if (typeof item == type){ return item; }
    // return base error
    else { throw new Error(errorText); }
  }

  /* intCheck(item, call)
  wrapper for typeCheck for ints
  @param item: {mixed} an item to be checked if is an integer
  @param call: {string} the Class/function/method where the check occured
  @retun {mixed} returns the item unless it is not an integer
  */
  static intCheck(item, call="Utils.intCheck"){
    if(Array.isArray(item)){
      let retArr = []
      for (var i = 0; i < item.length; i++) {
        retArr.push(this.typeCheck(item[i], "int", call));
        return retArr;
      }
    }
    return this.typeCheck(item, "int", call);
  }

  /* objCheck(item, call)
  wrapper for typeCheck for objects
  @param item: {mixed} an item to be checked if is an object
  @param call: {string} the Class/function/method where the check occured
  @retun {mixed} returns the item unless it is not an object
  */
  static objCheck(item, call="Utils.objCheck"){
    return this.typeCheck(item, "obj", call);
  }

  /* keyCheck(item, key(s), call)
  Performs two actions - 1 checks to see if item is an object. Throws an error
  if not, reporting it from location call.  2 checks to see if the object has
  the key or keys given in the second param. The second param is check to be an
  array or not, if not an array, it is made into a single item array so that it
  can use the same code order. If the object does not, it throws an error.
  @param item: {mixed} an item to be checked if it is an object
  @param key: {mixed} a string or array of strings to be checked as keys in item
  @param call: {string} the Class/function/method where the check occured
  @retun {mixed} returns the item if object with key(s)
  */
  static keyCheck(item, key, call="Utils.keyCheck"){
    item = this.objCheck(item, call); // check to see if it is an item.
    if(!Array.isArray(key)){key = [key]} // make the key an array if not
    // check for missing keys
    let missingKeys = [];
    for (var i = 0; i < key.length; i++) {
      if(!(key[i] in item)) { missingKeys.push(key[i]); }
    }
    if(missingKeys.length == 0) { return item; } // if no missing, returns good
    // make the error otherwise
    let errorText = "The method " + call + " expected an object with the key(s): ";
    for (var i = 0; i < key.length; i++) { // add the expected keys
      if(i > 0){ errorText += ", "; } // for more than one
      errorText += key[i];
    }
    errorText += ". It is missing the key(s): "
    for (var i = 0; i < missingKeys.length; i++) { // add the missing keys
      if(i > 0){ errorText += ", "; } // for more than one
      errorText += missingKeys[i];
    }
    errorText += ".";
    throw new Error(errorText);
  }

  /* listCheck(item, list, call)
  helper function to check to see if an item is on the list given to it.
  If it is not, it throws an error of the form
  call + "expected one of the following: " +<list items>+ " and got " + item + "."
  @param item: {mixed} the thing to be checked
  @param list: {array} an array of things to check the item against
  @param call: {text} where to call the error from
  @return {mixed} The item if no error is thrown
  */
  static listCheck(item, list, call="Utils.listCheck"){
    if(list.includes(item)){ return item; } //Short Circuit return
    throw new Error(call + " expected one of the following: " + list + ". It recived" + item + ".");
  }

  /* arrayCheck(item, call)
  wrapper for typeCheck for array
  @param item: {mixed} an item to be checked if is an array
  @param call: {string} the Class/function/method where the check occured
  @retun {mixed} returns the item unless it is not an array
  */
  static arrayCheck(item, call="Utils.arrayCheck"){
    return this.typeCheck(item, "array", call);
  }

  /* randMath(min, max)
  returns an Int between the min and the max, inclusive checks for ints and
  param order
  @param min {int} an integer
  @param max {int} an integer larger than min
  @param call {string} a string for error checking messages
  @return {int} a number between min and max
  */
  static randMath(min, max, call="Utils.randMath"){
    min = this.intCheck(min, call);
    max = this.intCheck(max, call);
    if(min > max){
      throw new Error("Min must always be less than max in " + call + ".");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /* randCoord(xMin, xMax, yMin, yMax, call)
  This function will produce an object with the keys of x and y, with values
  betweem xMin - xMax for the x key, & yMin and yMax for the y key
  @param xMin {int}: a number between 1 and xMax
  @param xMax {int}: a number greater than xMin
  @param yMin {int}: a number between 1 and yMax
  @param yMax {int}: a number greater than yMin
  @return {obj}: An obj with x & y keys
  */
  static randCoord(xMin, xMax, yMin, yMax, call="Utils.randCoord"){
    let retObj = {};
    retObj.x = this.randMath(this.intCheck(xMin, call), this.intCheck(xMax, call), call);
    retObj.y = this.randMath(this.intCheck(yMin, call), this.intCheck(yMax, call), call);
    return retObj;
  }

  /* randRoom(width, height, rMin, rMax)
  Returns an array of coordinate objects for a squre room
  static randRoom(width, height, rMin, rMax){
    var tL = this.randCoord(1, width-rMin, 1, height-rMin); // width & height - room Min
    var bR = this.randCoord(tL.x + rMin, Math.min(tL.x + rMax, width), tL.y + rMin, Math.min(tL.y + rMax, height));
    return [tL, {x: bR.x, y: tL.y}, {x: tL.x, y: bR.y}, bR];
  }
    */
  static randRoom(width, height, rMin, rMax, call="Utils.randRoom"){ // fix the room being 1 too big
    this.intCheck([width, height, rMin, rMax], call);
    rMin -= 1;
    rMax -= 1;
    let start = this.randCoord(1, width-rMin, 1, height-rMin); // width & height - room Min
    let stop = this.randCoord(start.x + rMin, Math.min(start.x + rMax, width), start.y + rMin, Math.min(start.y + rMax, height));
    let retArr = []; // make an array to return
    for (let i = start.x; i <= stop.x; i++) { // for every line(x or y):
      for (let j = start.y; j <= stop.y; j++) {
        retArr.push({x: i, y: j});
      }
    }
    return retArr;
  }

  static roomCorners(room, width, height){
    let corners = {x: {min: width, max: 0}, y: {min: height, max: 0} };
    for (var i = 0; i < room.length; i++) {
      corners.x.min = Math.min(room[i].x, corners.x.min);
      corners.x.max = Math.max(room[i].x, corners.x.max);
      corners.y.min = Math.min(room[i].y, corners.y.min);
      corners.y.max = Math.max(room[i].y, corners.y.max);
    }
    return corners;
  }

  /* collisionCheck(cell, set)
  checks to see if cell is a member of set based on the value of keys x & y
  */
  static collisionCheck(cell, set, call="Utils.collisionCheck"){ // cell = {x: val, y: val}
    // this.keyCheck(cell, ["x", "y"], call); //for debugging
    // this.arrayCheck(set, call); //for debugging
    for (let i = 0; i < set.length; i++) {
      this.keyCheck(set[i], ["x", "y"], call);
      if((set[i].x == cell.x) && (set[i].y == cell.y)) { return true; }
    }
    return false;
  }

  /* coodsCheck(seta, setb)
  checks dual directional collisions using keys x & y's values.
  */
  static coordCheck(seta, setb, call= "Utils.coordCheck"){
    //this.arrayCheck(seta, call); //for debugging
    for (let i = 0; i < seta.length; i++) {
      if(this.collisionCheck(seta[i], setb)) { return true; }
    }
    return false;
  }

  /* removeBorder(room, width, height)
  reduces the area given by 1 on each side
  @param room: {array} an array of coordinate objects
  @param width: {int} the width of the map
  @param height: {int} the height of the map
  @return {array} an array trimmed of all borders of given area
  */
  static removeBorder(room, width, height, call="Utils.removeBorder"){
    let border = this.arrayCheck(room, call); // make a set of coordinates based on the map constraints
    let max = {x: 0, y: 0};
    let min = {x: width+1, y: height+1};
    for (let i = 0; i < border.length; i++) {
      //this.keyCheck(border[i], ["x", "y"], call); //for debugging
      if(border[i].x < min.x){ min.x = border[i].x}
      if(border[i].y < min.y){ min.y = border[i].y}
      if(border[i].x > max.x){ max.x = border[i].x}
      if(border[i].y > max.y){ max.y = border[i].y}
    }
    let coords = [];
    for (let i = 0; i < border.length; i++) {
      let isBorder = false; // fix for in class issue
      if( (border[i].x == max.x) || (border[i].y == max.y)
       || (border[i].x == min.x) || (border[i].y == min.y) ){
         isBorder = true;
      }
      if(!isBorder){ coords.push(border[i]); }
    }
    return coords;
  }

  /* cordLine(start, end)
  returns a line between start and end cords
  @param start: {object} one of the two sets of coordinates on a line
  @param end: {object} one of the two sets of coordinates on a line
  @return: {array} an array of the coordinates between the two input coordinates
  */
  static cordLine(start, end, call="Utils.cordLine"){
    //this.keyCheck(start, ["x", "y"], call); //for debugging
    //this.keyCheck(end, ["x", "y"], call); //for debugging
    let xVals = {min : Math.min(start.x, end.x), max : Math.max(start.x, end.x)}
    let yVals = {min : Math.min(start.y, end.y), max : Math.max(start.y, end.y)}
    let line = [];
    if(xVals.min !== xVals.max) {
      for (var i = xVals.min + 1; i < xVals.max; i++) { line.push({x: i, y: yVals.min}); }
    } else {
      for (var i = yVals.min + 1; i < yVals.max; i++) { line.push({x: xVals.min, y: i}); }
    }
    return line;
  }

  /* hallCords(start, end)
  makes a line with chance of a turn between start and end
  @param start: {object} one of the two sets of coordinates on a hall
  @param end: {object} one of the two sets of coordinates on a hall
  @return: {array} an array of the coordinates between the two input coordinates
  */
  static hallCoords(start, end, call="Utils.hallCords"){
    // check to see if the hall is a stright line:
    if((start.x == end.x)|| (start.y == end.y)){ // hall is a stright line in either condition
      return this.cordLine(start, end);
    }
    else {
      let turn = {};
      let choice = this.randMath(1, 2, call); // pick one of the 2 other corners
      if(choice == 1){ turn = {x: start.x, y: end.y} }; // corner "A"
      if(choice == 2){ turn = {x: end.x, y: start.y} }; // corner "B"
      let retArr = this.cordLine(start, turn); // one side of turn
      retArr.push(turn); // students will forget this
      retArr = retArr.concat(this.cordLine(turn, end)); // other side of turn
      return retArr;
    }
  }

  /* shuffleIndex(array)
  @param array: {array} an array to shuffel the index of
  @return array: an array of number index (eg: array of length 5 might
  give you a result of [2, 3, 0, 1, 4])
  */
  static shuffleIndex(array, call="Utils.shuffleIndex"){
    //this.arrayCheck(array, call) //for debugging
    let pullFrom  = []; // for the indexes pre randomized
    // javaScript low rent version of a generator
    for (let i = 0; i < array.length; i++) { pullFrom.push(i); }
    let length = array.length; // We will need a while loop because errors.
    let retArr = [];  // for the return
    while(length > 0){
      let removeIndex = this.randMath(0, length-1);
      retArr.push(pullFrom.splice(removeIndex, 1)[0]); // kids gonna hate this
      length -= 1;
    }
    return retArr;
  }

  static addKey(objects, values, key){
    for (var i = 0; i < objects.length; i++) {
      objects[i][key] = values[i];
    }
  }

  static removeBorder(room, width, height){
    let border = room;
    let max = {x:0,y:0};
    let min = {x:width+1,y:height+1};
    for (var i = 0; i < border.length; i++) {
      if (border[i].x < min.x) { min.x = border[i].x; }
      if (border[i].y < min.y) { min.y = border[i].y; }
      if (border[i].x > max.x) { max.x = border[i].x; }
      if (border[i].y > max.y) { max.y = border[i].y; }
    }
    let coords = [];
    for (var i = 0; i < border.length; i++) {

      var isBorder = false;
      if ((border[i].x == max.x)||(border[i].y == max.y)
        ||(border[i].x == min.x)||(border[i].y == min.y)) {
        isBorder = true;

      }
      if (!isBorder) {
        coords.push(border[i]);
      }
    }
    return coords;
  }

  static coordLine(start, end){
    let minX = Math.min(start.x, end.x);
    let minY = Math.min(start.y, end.y);
    let largeX = Math.max(start.x, end.x);
    let largeY = Math.max(start.y, end.y);
    let retArr = [];
    for (var i = minX + 1; i < largeX; i++) {
      var newX = {x:i, y:minY};
      retArr.push(newX);
    }
    for (var i = minY + 1; i < largeY; i++) {
      var newY = {x:minX, y:i};
      retArr.push(newY);
    }
    return retArr;
  }

  /* hallCords(start, end)
makes a line with chance of a turn between start and end
@param start: {object} one of the two sets of coordinates on a hall
@param end: {object} one of the two sets of coordinates on a hall
@return: {array} an array of the coordinates between the two input coordinates
*/
  static hallCords(start, end, call="Utils.hallCords"){
    if ((start.x == end.x)||(start.y == end.y)) {
      return this.coordLine(start, end);
    }else {
      var turn = {};
      var choice = Math.random();
      if (choice < .5) { turn = {x:start.x, y:end.y} }
      if (choice >= .5) { turn = {x:end.x, y:start.y} }
      var retArr = this.coordLine(start, turn);
      retArr.push(turn);
      retArr = retArr.concat(this.coordLine(turn, end));
    }
    return retArr;
  }

}
