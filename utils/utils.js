class Utils {
/*randMath
@param max {int}: the max you can have
@param min {int} the min you can have ;
*/
  static randMath(min, max, call="Utils.randMath"){
    min = this.intCheck(min, call);
    max = this.intCheck(max, call);
    if (min >= max) {
      throw new Error("min must always be less then max " + call + ".")
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

}
/*
6. Test this method.

D. More updates to Utils.js - We are going update randMath while we are in here
to do some parameter checking as well. We will be using this method a lot to
make the rooms, so we will want to make sure we are giving it the correct things
 at all times.
*/
static intCheck2(item, call="Utils.intCheck.js") {
  if(Number.isInterger(item)){return item;}
  else{
    throw new error ("this method" + call + "expected an integer and received" + item)
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
