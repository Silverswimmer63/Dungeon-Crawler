class Utils {
  /*randMath
  @param max {int}: the max you can have
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
    if (Number.isInteger(item)) {return item}
    else {
      throw new Error("The method " + call + " expected an integer and received " + item + ".");
    }
  }

  /* objCheck(item, call="Utils.objCheck")
  @param item: {mixed} an item to be checked if is an object
  @param call: {string} the Class/function/method where the check occured
  @retun {mixed} returns the item unless it is not an object
  */
  static objCheck(item, call="Utils.objCheck"){
    if ((item != null)&&(typeof item == "object")) {
      return item;
    }else {
      throw new Error("The method " + call + " expected an object and received " + item + ".");
    }
  }

  /* keyCheck(item, key, call= Utils.keyCheck)
  Performs two actions - 1 checks to see if item is an object. Throws an error
  if not, reporting it from location call. 2 checks to see if the object has
  the key or keys given in the second param. The second param is check to be an
  array or not, if not an array, it is made into a single item array so that it
  can use the same code order. If the object does not, it throws an error.
  @param item: {mixed} an item to be checked if it is an object
  @param key: {mixed} a string or array of strings to be checked as keys in item
  @param call: {string} the Class/function/method where the check occured
  @retun {mixed} returns the item if object with key(s)
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
      errStr += badKey[i];  //.6 Add the arrayCheck to the setter for rooms
      if ((badKey.length > 0)&&(i < badKey.length - 1)) {
        errStr += ", ";
      }
    }
    throw new Error(errStr+".")
  }

  /* listCheck(item, list, call)
  helper function to check to see if an item is on the list given to it.
  If it is not, it throws an error of the form
  call + "expected one of the following: " +<list items>+ " and got " + type + "."
  @param item: {mixed} the thing to be checked
  @param list: {array} an array of things to check the item against
  @param call: {text} where to call the error from  .6 Add the arrayCheck to the setter for rooms
  @return {mixed} The item if no error is thrown
  */
  static listCheck(item, list, call = "Utils.listCheck"){
      if (list.includes(item)) { return item; }
      throw new Error(call + "expected one of the following: " + list + " and got " + item + ".");
  }

  static arrayCheck(item, call="Utils.arrayCheck"){
    if ((item != null)&&(Array.isArray(item))) {
      return item;
    }else {
      throw new Error("The method " + call + " expected an array and received " + item + ".");
    }
  }

  /* coordCheck(seta, setb)
  takes 2 arrays of coordinates and checks them to see if there is a coordinate
  in one that is this in the other. If so it returns a true, if not, it returns a false.
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
  This function will produce an object with the keys of x and y, with values
  betweem xMin - xMax for the x key, & yMin and yMax for the y key
  @param xMin {int}: a number between 1 and xMax
  @param xMax {int}: a number greater than xMin
  @param yMin {int}: a number between 1 and yMax
  @param yMax {int}: a number greater than yMin
  @return {obj}: An obj with x & y keys
  */
  static randCoord(xMin, xMax, yMin, yMax, call = "Utils.randCoord"){
    var retObj = {};
    retObj.x = this.randMath(xMin, xMax, call);
    retObj.y = this.randMath(yMin, yMax, call);
    return retObj;
  }

  /* randRoom(width, height, roomMin, roomMax)
  Returns an array of 4 coordinate objects
  */
  static randRoom(width, height, roomMin, roomMax, call="Utils.randRoom"){
    roomMin -= 1;
    roomMax -= 1;
    var retArray = [];
    var start = this.randCoord(1, width-roomMin, 1, height-roomMin); // width & height - room Min
    var stop = this.randCoord(start.x + roomMin, Math.min(start.x + roomMax, width), start.y + roomMin, Math.min(start.y + roomMax, height));
    for (var i = start.x; i <= stop.x; i++) {
      for (var j = start.y; j <= stop.y; j++) {
        retArray.push({x: i, y: j})
      }
    }
    return retArray;
  }
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
    let xdis = this.dis(start.x, end.x);
    let ydis = this.dis(start.y, end.y);
    let obj = {};
    let retAry = [];
    if (ydis != 0) {
      var addTo = Math.min(start.y, end.y);
      for (var i = addTo+1; i < ydis+addTo; i++) {
        obj = {x:end.x, y:i};
        retAry.push(obj);
      }
    }
    if (xdis != 0) {
      var addTo = Math.min(start.x, end.x);
      for (var i = addTo+1; i < xdis+addTo; i++) {
        obj = {x:i, y:start.y};
        retAry.push(obj);
      }
    }
    return retAry;
  }
  /* hallCords(start, end)
  makes a line with chance of a turn between start and end
  @param start: {object} one of the two sets of coordinates on a hall
  @param end: {object} one of the two sets of coordinates on a hall
  @return: {array} an array of the coordinates between the two input coordinates
  */
  static hallCords(start, end){
    var maybe = Math.random();
    if((start.x == end.x)||(start.y == end.y)){return this. cordline(start, end);}
    else{
      var turn = {};
      if(maybe < .5){turn = {x:start.x, y:end.y};}
      if(maybe >= .5){turn = {x:end.x, y:start.y};}
      var retArr = this.cordline(start, turn);
      retArr.push(turn);
      retArr = retArr.concat(this.cordline(turn, end));
    }
    return retArr;
  }

  /*
    //connect two rooms by random points something something math.random
    let minX = Math.min(start.x, end.x);/*randRoom[0].y randRoom[randRoom.length].y
let minY = Math.min(start.y, end.y);//randRoom[0].x randRoom[randRoom.width].x
let maxX = Math.max(start.x, end.x);
let maxY = Math.max(start.y, end.y);
let retVar = [];
if ((start.x == end.x)||(start.y == end.y)) {
  //width and height need to connect to widthB and heightB
  this.cordline(start, end)
}else {
for (var i = minX +1; i < maxX +1; i++) {
  var newX = {x:i, y:minY}
  retVar.push(newX);
}
for (var j = minY +1; j < maxY +1; j++) {
var newY = {x:maxX, y:j};
retVar = retVar.concat(newY);
}
}
return retVar;
  }
  */
  /*
shuffleIndex(array){
arr = []
result = []
for(i<array){
arr.push(i)
}
for(i<array){
thing = 0
otherthing = 0
var rand = randomnum(0,max);
for(j<array){
if(rand == arr){
result.push()
thing++
}
else if(arr == array+1){

}
else{
otherthing++
}
}
if(otherthing >= 0 && thing !== array){
i--
}
}
return result
}
static = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}
*/
static helpingHalls(array) {
  var i = array.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = array[i];
     array[i] = array[j];
     array[j] = temp;
  }
  return array;
}
  /* shuffleIndex(array)
  @param array: {array} an array to shuffle the index of
  @return array: an array of number index (eg: array of length 5 might
  give you a result of [2, 3, 0, 1, 4])
  */
  static shuffleIndex(array){
let numArr = [];
for (var i = 0; i < array.length; i++) {
  numArr.push(i);
}
let retAry = this.helpingHalls(numArr)
return retAry;
  }


//maybe use something something addroom and shuffle because it uses helping halls which is ment to be an addition to hallCords
//choice random place in said rooms make a new room but only leave the border for a small path to make the halls
//choice a point off the border and then conect them using data from shuffleIndex
//maybe use randMath to decide a point on the border (use removeBorder maybe to decide the border area)
//for(length of shuffleIndex){use i to connect i and i + 1 this [i] connect this.room[i+1]}
//[10,14,7,3] lengthis 4 use for connect 14,14 to 7, 7 to 3
//use randCoord




}
