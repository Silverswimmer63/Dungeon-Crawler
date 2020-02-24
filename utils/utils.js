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
  .1 in Map we are going to add a property for rooms called _rooms this should be
  a blank array by default
  .2 Add a getter for rooms that returns the array in rooms
  .3 Add a setter for rooms
  .4 Add properties for map for max and min room size, make these 3 and 8 by default.
  Make getters and setters, have the setters check to see if the value is an int in the setter.
  .5 Make a new function in Utils called arrayCheck that does what all the other checkers do, but for arrays
  .6 Add the arrayCheck to the setter for rooms
  .7 make the setter for rooms check to see if the intended value is a blank array [ ]. If not,
  then check to see if each item in the intended item is also an array make the call this time "Map.rooms - individual room"
  .8 for each of the items from #7 above check each of the items inside of it to make sure they are all objects
  with the keys X and Y
  .9 to continue in Map.rooms - for each room make sure it has something in it, otherwise toss the error
  "In Map.rooms: One or more room arrays is empty."
  */
  static arrayCheck([], call = "Utils.arrayCheck"){
    if (( item != null)&&(Array.isArray(item))) {
      return item;
    }else {
      throw new Error("The method " + call + " expected an array and received " + item + ".");
    }
  }

  /* coordCheck(setA, setB)
takes 2 arrays of coordinates and checks them to see if there is a coordinate in
one that is this in the other. If so it returns a true, if not, it returns a false.
*/

  static coordCheck(setA, setB){
    for (var i = 0; i < setA.length; i++) {
    for (var j = 0; j < setB.length; j++) {
    if((setA[i].x == setB[j].x) && (setA[i].y == setB[j].y)) { return true; }
    }
  }
  return false;
}


/*
1. make a function in utils called removeBorder(room) that does what is being done right now in addRoom to trim the borders.
2. update addRoom to use this function where it is currently doing that.
3. make a function in utils called cordLine(start, end) that returns a set of coordinates between start (cords) and end (cords)
If we had {x:1, y:1} and {x:1, y:6} we would get {x:1 y:2}, {x:1, y:3}.....
START AT THE SMALLER ONE
"start" and "end" but you need to min and max the values and go from min to max.
-Which one we are working on!
start at the min to bigger.
Let's talk about that for
-for(var i = miner + 1; i < larger; i++){}
*/

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
    let obj = {};
    for (var i = min; i < largeS.length; i++) {

    }
  }
}
