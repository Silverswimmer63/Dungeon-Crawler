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
    return Math.floor(Math.random() * (max + 1));
  }

/*
  1. In Utils.js
Make a new static method called intCheck(item, call) Here is the documentation for initCheck
/* intCheck(item, call="Utils.intCheck.js")
Checks to see if "item" is an integer. Throws a custom error if not.
@param item: {mixed} an item to be check if is an integer
@param call: {string} the Class/function/method where the check occured
@retun {mixed} returns the item unless it is not an integer

2. look up how to make a custom error message in javaScript
catch and throw error
3. look up how to check to see if something is an integer in javaScript
Number.isInteger()
4. In intCheck(item, call) check to see if the item is an integer. If so, return it.

5. If the item is not an integer, then throw your new Error. The text of this error should be :
"The method " + call + " expected an integer and received " + item + ".";

6. Test this method.
*/

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
    if (( item != null)&&(typeof item == "object")) {
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
      errStr += badKey[i];
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
@param call: {text} where to call the error from
@return {mixed} The item if no error is thrown
*/
  static listCheck(item, list, call="Utils.listCheck"){
    if (list.includes(item)) {return item;}
    throw new Error(call + "expected one of the following: " + list + " and got " + item + ".")
  }

  /* randCoord(xMin, xMax, yMin, yMax)
This function will produce an object with the keys of x and y, with values
betweem xMin - xMax for the x key, & yMin and yMax for the y key
@param xMin {int}: a number between 1 and xMax
@param xMax {int}: a number greater than xMin
@param yMin {int}: a number between 1 and yMax
@param yMax {int}: a number greater than yMin
@return {obj}: An obj with x & y keys
*/
  static randCoord(xMin, xMax, yMin, yMax, call="Utils.randCoord"){
    var retObj = {};
    retObj.x = this.randMath(xMin, xMax, call);
    retObj.y = this.randMath(yMin, yMax, call);
    return retObj;
  }
/*
  the lower x should be between 1 and the width of the map - min width of the room
  the higher x should be between the lower x + min and the lower x + max

  the lower y should be between 1 and the height of the map - min height of the room
  the higher y should be between the lower y + min and the lower y + max*/

  /* randRoom(width, height, roomMin, roomMax)
Returns an array of coordinate objects for a square room.
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

  static arrayCheck(item, call="Utils.arrayCheck"){
    if ((item != null)&&(Array.isArray(item))) {
      return item;
    }else {
      throw new Error("The method " + call + " expected an array and received " + item + ".");
    }
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
  if (Array.isArray(key)) {
    key = [key];
  }
  var badKey = [];
  for (var i = 0; i < key.length; i++) {
    if ((key[i] in item)!) {
      badKey.push(key[i]);
    }
  }
  if (badKey.length == 0) {
    return item;
  }
  var errStr = "the method" + call + "expected an object with the key(s)";
  for (var i = 0; i < key.length; i++) {
    errStr += key[i];
    if ((key.length > 0)&&(i < key.length - 1)){
      errStr += ", ";
    }
  }
  throw new Error(errStr + ".");
}
/* objCheck(item, call="Utils.objCheck")
@param item: {mixed} an item to be checked if is an object
@param call: {string} the Class/function/method where the check occured
@retun {mixed} returns the item unless it is not an object
*/
static objCheck(item, call="Utils.object"){
if ((typeof item == "object") && (item == null)){
  return item;
}else{
  throw new Error("the methiod of" + call)
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
static keyCheck(item, key, call= Utils.keyCheck){

}
/*
1. Check min and max to make sure they are integers. As you've not done this
before, I will give you an exact example of how this should look -
min = this.intCheck(min, "Utils.randMath");
What is going on here is that it will, by default, set min to min. however, if
min is not an integer, it will stop everything and throw the error "The method
Utils.randMath expected an integer and received (whatever you gave it)", letting
 us know that we've broken something simply by giving the method something other
  then a number (like a coordinate)
do the same as above with max

2. Check to make sure that min is less than max.
Check if min is greater than or equal to max, if so, throw a new error that reads:
"Min must always be less than max in Utils.randMath."
update the description of the method to include the call parameter.
Now we can use it all over the place and set the call to whatever method we are
using, to help check for errors. But by giving it the default value in the call
param, we can still use it the way we have always been using it.
*/
static randMath(min, max, call="utils.randMath"){
  min = this.intCheck(min, call);
  max = this.intcheck(max,call);
  if (min <= max){
    throw new Error ("min must always be less than max"+call+)
  }
}
/*
.1 in Map we are going to add a property for rooms called _rooms this should be a blank array by default
.2 Add a getter for rooms that returns the array in rooms
.3 Add a setter for rooms
.4 Add properties for map for max and min room size, make these 3 and 8 by default. Make getters
and setters, have the setters check to see if the value is an int in the setter.
.5 Make a new function in Utils called arrayCheck that does what all the other checkers do, but for arrays
.6 Add the arrayCheck to the setter for rooms
.7 make the setter for rooms check to see if the intended value is a blank
array [ ]. If not, then check to see if each item in the intended item is also an array
make the call this time "Map.rooms - individual room"
.8 for each of the items from #7 above check each of the items inside of it to
make sure they are all objects with the keys X and Y
*/
var rooms
get rooms(){return this._rooms;}

set(array) {
  array = Utils.arrayCheck(array, "map.rooms");
  if (array.length == 0){this._rooms = array;}
  else {
    let room;
    for (room of array){
      Utils.keyCheck(room, "Map.room individual room.");

    }
  }
}
//add room() will use  the apportiate function in our program to generate a set
//of coordantes based on our map. it  will then go to the map, and update the cells at the correctcordantes to match
function addRoom(){
for (var i = 0; i < this._randCoord; i++) {
  standin#1
}
//randcoord generate room size
standin#1{
  min: {x: 8, y: 8},
  max: {x: 30, y: 30}
}
//min and max set a cap on its size

  //overlap make sure rooms dont intersect
}
/*
F. Making the basic map
1. add a new method to map called _generateMap();
This method will make a empty, totally unreachable map (or at least a data
storage of it) filled with our fill. You will need to use loops to make this
map per the spec, you will need to use 2 loops within eachother. The function should be made to meet this description -
You will need to start by making a variable to be returned.
You will want to make sure your loops go from 1 to the entire value of the width or height
you will need to look up how to make object keys from strings to do this.
Don't forget to use this

 _generateMap()
A method to make a map filled with items of the this._fill value. The "map" is
an object with a set of objects imbeded within it. All of the top level keys,
which each owns it's own object, will begin with the letter y (ex y1, y2), and
so on. The second level objects will be keyed in the same way, but with x
rather than y for their start. This is done so that we may access the map by
way of using map.y15.x22 to avoid x and y confusion. The values of the keys in
the inner objects will be the individual cells of the map.
*/
