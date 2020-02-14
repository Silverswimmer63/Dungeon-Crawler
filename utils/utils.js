class Utils {
/*randMath
@param max {int} the max you can have
@param min {int} the min you can have ;
*/
  static randMath(min, max, call="Utils.randMath"){
    min = this.intCheck(min, call);
    max = this.intCheck(max, call);
    if (min > max) {
      throw new Error("min must always be less then max " + call + ".")
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static intCheck(item, call="Utils.intCheck.js"){
    if (Number.isInteger(item)) {return item;}
    else {
      throw new Error("The method " + call + " expected an integer and received " + item + ".");
    }
  }
  /*arrayCheck(testArray, call);
   *@param call {String} is to ell were the error is
   *@param testArray {Mixed} is the input to test
   */
  static arrayCheck(testArray, call = "Utils.arrayChecker"){
    if(Array.isArray(testArray) == true){
      return testArray;
    }
    else{
      throw new Error("The method "+ call + " Expected an array and received " + testArray + ".");
    }
  }
  /*@function objCheck(item, call="Utils.objCheck")
   *@param item: {mixed} an item to be checked if is an object
   *@param call: string} the Class/function/method where the check occured
   *@retun {mixed} returns the item unless it is not an object
   */
  static objCheck(item, call="Utils.objCheck"){
    if (( item != null)&&(typeof item == "object")) {
      return item;
    }else {
      throw new Error("The method " + call + " expected an object and received " + item + ".");
    }
  }

  /*keyCheck(item, key, call= Utils.keyCheck)
   *@param item: {mixed} an item to be checked if it is an object
   *@param key: {mixed} a string or array of strings to be checked as keys in item
   *@param call: {string} the Class/function/method where the check occured
   *@retun {mixed} returns the item if object with key(s)
   */
  static keyCheck(item, key, call= "Utils.keyCheck"){
    this.objCheck(item, call);
    if (!Array.isArray(key)) {
      key = [key];
    }
    var badKey = [];
    for (var i = 0; i < key.length; i++) {
      if (!(key[i] in item)) {
        badKey.push(key[i]);
      }
    }
    if (badKey.length == 0) {
      return item;
    }
    var errStr = "The method " + call + " expected an object with the key(s) ";
    for (var i = 0; i < key.length; i++) {
      errStr += key[i];
      if ((key.length > 0)&&(i < key.length - 1)) {
        errStr += ", ";
      }
    }
    errStr += ". It is missing the key(s) ";
    for (var i = 0; i < badKey.length; i++) {
      errStr += badKey[i];
      if ((badKey.length > 0)&&(i < badKey.length - 1)) {
        errStr += ", ";
      }
    }
    throw new Error(errStr+".");
  }
  
  /*listCheck(item, list, call)
   *@param item: {mixed} the thing to be checked
   *@param list: {array} an array of things to check the item against
   *@param call: {text} where to call the error from
   *@return {mixed} The item if no error is thrown
   */
  static listCheck(item, list, call="Utils.listCheck"){
    if (list.includes(item)) {return item;}
    throw new Error(call + "expected one of the following: " + list + " and got " + item + ".")
  }

  /*randRoom other
   *static randRoom(width, height, roomMin, roomMax){
   *  var retArray = [];
   *   var topL = this.randomCoord(1,width-roomMin,1,height-roomMin);
   *   var botR = this,randomCoord(1,width-roomMax,1,height-roomMax);
   *   return [topL,{x:botR.x,y:topL.y}, {x:topL.x,y:botR.y}, botR];
   *}
   */
  
  /* randRoom(width, height, roomMin, roomMax)
  Returns an array of 4 coordinate objects
  */
  static coordCheck(seta, setb){
    for (var i = 0; i < seta.length; i++) {
      for (var j = 0; j < setb.length; j++) {
        if((seta[i].x == setb[j].x) && (seta[i].y == setb[j].y)) {
          return true;
        }
      }
    }
    return false;
  }

  /*randCoord(xMin, xMax, yMin, yMax)
   *This function will produce an object with the keys of x and y, with values
   *betweem xMin - xMax for the x key, & yMin and yMax for the y key
   *
   *@param xMin {int}: a number between 1 and xMax
   *@param xMax {int}: a number greater than xMin
   *@param yMin {int}: a number between 1 and yMax
   *@param yMax {int}: a number greater than yMin
   *@return {obj}: An obj with x & y keys
   */
  static randCoord(xMin, xMax, yMin, yMax, call="Utils.randCoord"){
    var retObj = {};
    retObj.x = this.randMath(xMin, xMax, call);
    retObj.y = this.randMath(yMin, yMax, call);
    return retObj;
  }

  /* randRoom(width, height, roomMin, roomMax)
   *@returns {array} An array of coordinate objects for a square room.
   *@param {integer} width : width of the room.
   *@param {integer} height : height of the room.
   *@param {integer} roomMin : Min size of the room.
   *@param {integer} roomMax : Max size of the room.
   */
  static randRoom(width, height, roomMin, roomMax){
    roomMin -= 1;
    roomMax -= 1;
      var tpleft = this.randCoord(1,width-roomMin,1,height-roomMin);
      var btright = this.randCoord(tpleft.x+roomMin,Math.min(tpleft.x+roomMax,width),tpleft.y+roomMin,Math.min(tpleft.y+roomMax,height));
      var tpright = {x:btright.x,y:tpleft.y};
      var btleft = {x:tpleft.x,y:btright.y};
      var retAry = [];
      for (var i = tpleft.x; i <= btright.x; i++) {
      for (var j = tpleft.y; j <= btright.y; j++) {
        var obj = {x:i,y:j};
        retAry.push(obj);
      }
    }
    return retAry;
  }

  /*arrayCheck(item, call)
   *@param {mixed} item : any item input for a check
   *@param {string} call : call for the the Error
   *@returns {mixed} An Error or the item;
   */
  static arrayCheck(item, call="Utils.arrayCheck"){
    if ((item != null)&&(Array.isArray(item))) {
      return item;
    }else {
      throw new Error("The method " + call + " expected an array and received " + item + ".");
    }
  }


/*coordCheck(seta, setb)
 *takes 2 arrays of coordinates and checks them to
 *see if there is a coordinate in one that is this in the other.
 *If so it returns a true, if not, it returns a false.
 */
static coordCheck(seta, setb){
var tf = undefined;
  for(var i = 0; i<seta.length;i++){
    for(var j = 0; j<setb.length;j++){
      if((seta[i].x == setb[j].x) && (seta[i].y == setb[j].y)){
        return true;
      }
        tf=false;
    }
  }
  return tf;
}

static hallCheck(roomOne, roomTwo){
    var heightOne = roomOne[0].y - roomOne[roomOne.length-1].y;
    var widthOne = roomOne[0].x - roomOne[roomOne.length-1].x;
    var heightTwo = roomTwo[0].y - roomTwo[roomTwo.length-1].y;
    var widthTwo = roomTwo[0].x - roomTwo[roomTwo.length-1].x;
    var midOne = {x: (widthOne/2)+roomOne[0].x, y: (heightOne/2)+roomOne[0].y};
    var midTwo = {x: (widthTwo/2)+roomTwo[0].x, y: (heightTwo/2)+roomTwo[0].y};
    var distance = {x: midOne.x-midTwo.x, y: midOne.y-midTwo.y};
    var hallCords = [];
    console.log(heightOne);
    console.log(heightTwo);
    console.log(midTwo);
    console.log(midOne);

    for(var i = 1; i < Math.abs(distance.y+1); i++){
      if(distance.y > 0){
      hallCords.push({x:midOne.x,y:midOne.y+i});
      }
      else if(distance.y < 0){
      hallCords.push({x:midOne.x,y:midOne-i});
      }
    }
    console.log(hallCords.length)
    var hallYmath = hallCords.length - 1;
    for(var j = 1; j < Math.abs(distance.x+1); j++){
     if(distance.x > 0){
      hallCords.push({x:midOne.x + j, y:hallCords[hallYmath].y});
     }   
     else if(distance.x < 0){
     hallCords.push({x:midOne.x + j, y:hallCords[yDone].y});
     }       
    }
    console.log(hallCords.length)
    if(hallCords[hallCords.length-1].x == midTwo.x && hallCords[hallCords.length-1].y == midTwo.y){
      console.log("yayayyayayyayayayayy");
    }
 }
 static removeBorder(room,width,height,rooms){
      let smalls = {x:width+1,y:height+1};
      let biggy = {x:0,y:0};
      for (var i = 0; i < room.length; i++) {
        if (room[i].x < smalls.x) {
          smalls.x = room[i].x;
        }
        if (room[i].y < smalls.y) {
          smalls.y = room[i].y;
        }
        if (room[i].x > biggy.x) {
          biggy.x = room[i].x;
        }
        if (room[i].y > biggy.y) {
          biggy.y = room[i].y;
        }
      }
      let coords = [];
      for (var i = 0; i < room.length; i++) {
        var isBorder = false;
        if ((room[i].x == biggy.x)||(room[i].y == biggy.y)||(room[i].x == smalls.x)||(room[i].y == smalls.y)) {
          isBorder = true;
        }
        if (!isBorder) {
          coords.push(rooms[i]);
        }
      }
      for (let i = 0; i < rooms.length; i++) {
        if(!overlap) { overlap = Utils.coordCheck(room, rooms[i]);
        return coords;} // so we don't lose a true
      }

 }
}
