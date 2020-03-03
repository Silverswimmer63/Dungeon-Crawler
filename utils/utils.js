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

  /*objCheck(item, call="Utils.objCheck")
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

  static arrayCheck(item, call="Utils.arrayCheck"){
    //use isArray
    if (Array.isArray(item)){ return item; }
    throw new Error(call + " expected and array and received " + item)
  }

  /*make a function in utils called removeBorder(room) that
  does what is being done right now in addRoom to trim the borders
*/
  static removeBorder(room, width, height, call="Utils.removeBorder"){
    var border = room;
    var smalls = {x:width+1,y:height+1};
    var biggy = {x:0,y:0};
    for (var i = 0; i < border.length; i++) {
      if (border[i].x < smalls.x) { smalls.x = border[i].x; }
      if (border[i].y < smalls.y) { smalls.y = border[i].y; }
      if (border[i].x > biggy.x) { biggy.x = border[i].x; }
      if (border[i].y > biggy.y) { biggy.y = border[i].y; }
    }
    var coords = [];
    for (var i = 0; i < border.length; i++) {
      var isBorder = false;
      if ((border[i].x == biggy.x)||(border[i].y == biggy.y)||(border[i].x == smalls.x)||(border[i].y == smalls.y)) {
        isBorder = true;
      }
      if (!isBorder) { coords.push(border[i]); }
    }
    return coords;
  }

  /* make a function in utils called cordLine(start, end)
  that returns a set of coordinates between start (cords) and end (cords)
  If we had {x:1, y:1} and {x:1, y:6} we would get {x:1 y:2}, {x:1, y:3}.....
  START AT THE SMALLER ONE
  "start" and "end" but you need to min and max the values and go from min to max.
  -Which one we are working on!
  start at the small to bigger.
  var's talk about that for
  -for(var i = smaller + 1; i < larger; i++){}
*/
  static dist(start, end){
    var num = undefined;
    var max =  Math.max(start, end);
    if (start != end) {
      if (max < start) { num = start - max; }
      if (max > start) { num = max - start; }
      if (max < end) { num = end - max; }
      if (max > end) { num = max - end; }
      return num;
    }else {
      return start - end;
    }
  }

  /*static cordLine(start, end){
    //var xdist = this.dist(start.x, end.x);
    //var ydist = this.dist(start.y, end.y);
    var xmin = Math.min(start.x, end.x);
    var xmax = Math.max(start.x, end.x);
    var ymin = Math.min(start.y, end.y);
    var ymax = Math.max(start.y, end.y);
    var obj = {};
    var retArr = [];
    if (ydist != 0) {
      //var addTo = Math.min(start.y, end.y);
      for (var i = addTo; i < ydist-2; i++) {
        obj = {x:end.x,y:[i]}
        retArr.push(obj);
      }
    }
    if (xdist != 0) {
      //var addTo = Math.min(start.y, end.y);
      for (var i = addTo.x; i < xdist-2; i++) {
        addTo.x ++;
      }
    }
    return retArr;
  }
*/
  static cordLine(start, end, call="Utils.cordLine"){
    let xdis = this.dist(start.x, end.x);// these are to add to start and end
    let ydis = this.dist(start.y, end.y);// this one is the same but just y
    let obj = {};
    let retAry = [];
    if (ydis != 0) {
      let addTo = Math.min(start.y, end.y);
      for (var i = addTo+1; i < ydis+addTo; i++) {
        obj = {x:end.x,y:i};
        retAry.push(obj);
      }
    }
    if (xdis != 0) {
      let addTo = Math.min(start.x, end.x);
      for (var i = addTo+1; i < xdis+addTo; i++) {
        obj = {x:i,y:start.y};
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
  static hallCords(start, end, call="Utils.hallCords"){
    var xmin = Math.min(start.x, end.x);
    var xmax = Math.max(start.x, end.x);
    var ymin = Math.min(start.y, end.y);
    var ymax = Math.max(start.y, end.y);
    if ((start.x == end.x) || (start.y == end.y)) {
      return this.cordLine(start, end);
    }else {
      var turn = {};
      var choice = Math.random();
      if (choice < .5) { turn = {x:start.x, y:end.y} }
      if (choice >= .5) { turn = {x:end.x, y:start.y} }
      var retArr = this.cordLine(start, turn);
      retArr.push(turn);
      retArr = retArr.concat(this.cordLine(turn, end));
    }
  return retArr;
  }

  /* shuffleIndex(array)
  @param array: {array} an array to shuffle the index of
  @return array: an array of number index (eg: array of length 5 might
  give you a result of [2, 3, 0, 1, 4])
*/
  /* shuffleIndex(array){
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

        }else{
          otherthing++
        }
      }
        if(otherthing >= 0 && thing !== array){
          i--
        }
      }
      return result
}*/
  static shuffleIndex(array){
    var arr = [];
    var result = [];
    for (var i = 0; i < array; i++) {
      arr.push(i)
    }
    for (var i = 0; i < array; i++) {
      var thing = 0;
      var otherthing = 0;
      var rand = this.randMath(0, array)
      for (var j = 0; j < array; j++) {
        if (rand == arr[j]) {
          arr[j] = array +1;
          result.push(rand);
          thing++;
        }
        else if (arr[j] == array +1) {

        }else {
          otherthing++;
        }
      }
      if ((otherthing >= 1) && (thing !== array)) {
        i--;
      }
    }
    return result;
  }

}
