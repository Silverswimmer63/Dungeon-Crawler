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
    var midOne = {x: Math.ceil(widthOne/2)+roomOne[roomOne.length-1].x, y: Math.ceil(heightOne/2)+roomOne[roomOne.length-1].y};
    var midTwo = {x: Math.ceil(widthTwo/2)+roomTwo[roomTwo.length-1].x, y: Math.ceil(heightTwo/2)+roomTwo[roomTwo.length-1].y};
    var distance = {x: Math.ceil(midOne.x-midTwo.x), y: Math.ceil(midOne.y-midTwo.y)};
    var hallCords = [];
    var hallYmath = 0;
    hallCords.push({x:Math.ceil(midOne.x), y:Math.ceil(midOne.y)});
    for(var i = 1; i < Math.abs(distance.y); i++){
      if(distance.y > 0){
       if(Math.ceil(midOne.y)-i >= 0){
       var posStatY = Math.ceil(midOne.y)-i;
       }
      hallCords.push({x:Math.ceil(midOne.x),y:Math.abs(posStatY)});
      }
      else if(distance.y < 0){
       var negStatY = Math.ceil(midOne.y)+i;
      hallCords.push({x:Math.ceil(midOne.x),y:Math.abs(negStatY)});

      }
          var hallYmath = hallCords.length - 1;
    }
    for(var j = 1; j < Math.abs(distance.x); j++){
     if(distance.x > 0){
      if(Math.ceil(midOne.x)-j >= 0){
       var posStatX = Math.ceil(midOne.x)-j;
      }
      hallCords.push({x:Math.abs(posStatX), y:hallCords[hallYmath].y});
     }   
     else if(distance.x < 0){
     var negStatX = Math.ceil(midOne.x)+j;
     hallCords.push({x:Math.abs(negStatX), y:hallCords[hallYmath].y});
     }       
    }
    return hallCords;
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


  /* coordCheck(seta, setb)
  takes 2 arrays of coordinates and checks them to see if there is a coordinate in one
  that is this in the other. If so it returns a true, if not, it returns a false.
*/
/* coordCheck(seta, setb)
takes 2 arrays of coordinates and checks them to see if there is a coordinate in one that is this in the other. If so it returns a true, if not, it returns a false.
*/
/*
3. add a step between making the room coordinates and changing the the map where you check each room in the map array to see
if any of them have the same coordinates, and if there is overlap, don't add the room
4. add the correct type of loop structure and other needed items to make said loop stop if the room can be added (per 3 above) or keep going if not added
5. modify the structure from 4 above so it stops after a room is added or after 200 tries, whichever comes first.
*/
  static coordCheck(seta, setb){
    for (var i = 0; i < seta.length; i++) {
      for (var j = 0; j < setb.length; j++) {
        if ((seta[i].x == setb[j].x) && (seta[i].y == setb[j].y)) {
          return true;
        }
      }
    }
    return false;
  }

  /*make a function in utils called removeBorder(room) that
  does what is being done right now in addRoom to trim the borders
*/
  static removeBorder(room, width, height){
    let border = room;
    let smalls = {x:width+1,y:height+1};
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
    return border;
  }

  /* make a function in utils called cordLine(start, end)
  that returns a set of coordinates between start (cords) and end (cords)
  If we had {x:1, y:1} and {x:1, y:6} we would get {x:1 y:2}, {x:1, y:3}.....
  START AT THE SMALLER ONE
  "start" and "end" but you need to min and max the values and go from min to max.
  -Which one we are working on!
  start at the small to bigger.
  Let's talk about that for
  -for(var i = smaller + 1; i < larger; i++){}
*/
/*
  1. make a function in utils called removeBorder(room) that does what is being
  done right now in addRoom to trim the borders.
  2. update addRoom to use this function where it is currently doing that.
*/
  static removeBorder(room, width, height){
    let border = room; // make a set of coordinates based on the map constraints
    let smalls = {x:width+1,y:height+1};
    let biggy = {x:0,y:0};
    for (var i = 0; i < border.length; i++) {
      if (border[i].x < smalls.x) {smalls.x = border[i].x;}
      if (border[i].y < smalls.y) {smalls.y = border[i].y;}
      if (border[i].x > biggy.x) {biggy.x = border[i].x;}
      if (border[i].y > biggy.y) {biggy.y = border[i].y;}
    }
    let coords = [];
    for (var i = 0; i < border.length; i++) {
      var isBorder = false;
      if ((border[i].x == biggy.x)||(border[i].y == biggy.y)||(border[i].x == smalls.x)||(border[i].y == smalls.y)) {
        isBorder = true;
      }
      if (!isBorder) {coords.push(border[i]);}
  }
  return coords;
}

static dis(start, end){
  let num = undefined;
  let max = Math.max(start,end);
  if (start != end) {
    if (max < start) {num = start - max;}
    if (max > start) {num = max - start;}
    if (max < end) {num = end - max;}
    if (max > end){num = max - end;}
    return num;
  }else {
    return start - end;
  }
}

  static cordline(start, end){
    let xdis = this.dis(start.x, end.x);// these are to add to start and end
    let ydis = this.dis(start.y, end.y);// this one is the same but just y
    let obj = {};
    let retAry = [];
    if (ydis != 0) {
      let addTo = Math.min(start.y, end.y);
      console.log(ydis-2);
      console.log(addTo);
      console.log(end.x);
      for (var i = addTo; i < ydis-2; i++) {
        console.log("fnjius");
        obj = {x:end.x,y:[i]}
        retAry.push(obj);
      }
    }
    if (xdis != 0) {
      let addTo = Math.min(start.y, end.y);
      for (var i = addTo.x; i < xdis-2; i++) {
        addTo.x ++;
      }
    }
    return retAry;
  }

}
