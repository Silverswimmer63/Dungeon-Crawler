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
        if((seta[i].x == setb[j].x) && (seta[i].y == setb[j].y)) {return true;}
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

/* coordCheck(seta, setb)
takes 2 arrays of coordinates and checks them to see if there is a coordinate in one that is this in the other.
 If so it returns a true, if not, it returns a false.
*/
/*for (var i = 0; i < array.length; i++) {
  if(seta[i][0] == x && seta[i][1] == y){
    return true;
  }
  for (var j = 0; j < array.length; j++) {
    if (setb[j][0]== x && setb[j][1]== y) {
      return false
    }
  }
}*/
static coordCheck(seta, setb){
for (let i = 0; i < seta.length; i++) {
  for (let j = 0; j < setb.length; j++) {
if((seta[i].x == setb[j].x) && (seta[i].y == setb[j].y)){
  return true;
    }
   }
   return false;
  }
 }
}
