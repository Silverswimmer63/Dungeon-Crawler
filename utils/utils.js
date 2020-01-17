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

<<<<<<< HEAD
/*1. In Utils.js
Make a new static method called intCheck(item, call) Here is the documentation for initCheck
/* intCheck(item, call="Utils.intCheck.js")
wrapper for typeCheck for ints
@param item: {mixed} an item to be check if is an integer
@param call: {string} the Class/function/method where the check occured
@retun {mixed} returns the item unless it is not an integer
*/
/*
2. look up how to make a custom error message in javaScript
throw new Error("this is not an error")
=======
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
>>>>>>> origin/JAKE
3. look up how to check to see if something is an integer in javaScript
Number.isInteger()
4. In intCheck(item, call) check to see if the item is an integer. If so, return it.

5. If the item is not an integer, then throw your new Error. The text of this error should be :
"The method " + call + " expected an integer and received " + item + ".";

6. Test this method.
*/
<<<<<<< HEAD
static intCheck(item, call="Utils.initCheck.js") {
  if(Number.isInteger(item)) {return item;}
  else {
    throw new Error("The method " + call + " expected an integer and received " + item + ".");
  }
 }

/*1. Check min and max to make sure they are integers. As you've not done this before, I will give you an exact
 example of how this should look -
min = this.intCheck(min, "Utils.randMath");
What is going on here is that it will, by default, set min to min. however, if min is not an integer, it will stop everything and throw the error "The method Utils.randMath expected an integer and received (whatever you gave it)", letting us know that we've broken something simply by giving the method something other then a number (like a coordinate)
do the same as above with max

2. Check to make sure that min is less than max.
Check if min is greater than or equal to max, if so, throw a new error that reads:
"Min must always be less than max in Utils.randMath."

3. Test this method

4. Add the parameter call to randMath, give it the default value of "Utils.randMath"

5. Update all the places within the method where Utils.randMath is used as a string with the parameter call.

6 Test this method

7 update the description of the method to include the call parameter.
*/
static randMath(min, max, call ="Utils.randMath"){
  min = this.intCheck(min, call);
  max = this.intCheck(max, call);
if (min >= max) {
  throw new Error ("Min must alway be less the max in" + call+".");
}
return Math.Floor(Math.random() *(max - min + 1)) + min;
}

/* objCheck(item, call="Utils.objCheck")
=======

  static intCheck(item, call="Utils.intCheck.js"){
    if (Number.isInteger(item)) {return item}
    else {
      throw new Error("The method " + call + " expected an integer and received " + item + ".");
    }
  }

  /* objCheck(item, call="Utils.objCheck")
>>>>>>> origin/JAKE
@param item: {mixed} an item to be checked if is an object
@param call: {string} the Class/function/method where the check occured
@retun {mixed} returns the item unless it is not an object
*/
<<<<<<< HEAD
static objCheck(item, call="Utils.objCheck"){
if ((typeof item == "object")&& (item != null )) {
  return item;
}  else {
  throw new Error("The method " + call + " expected an integer and received " + item + ".");
}
 }

/* keyCheck(item, key, call= Utils.keyCheck)
=======

  static objCheck(item, call="Utils.objCheck"){
    if (( item != null)&&(typeof item == "object")) {
      return item;
    }else {
      throw new Error("The method " + call + " expected an object and received " + item + ".");
    }
  }

  /* keyCheck(item, key, call= Utils.keyCheck)
>>>>>>> origin/JAKE
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
<<<<<<< HEAD
static keyCheck(item, key, call= "Utils.keyCheck"){
this.objCheck(item, call);
if (!Array,isArray(key)) {
  key = [key];
}
var badKey= [];
  for (var i = 0; i < key.length; i++) {
if (!(key[i] in item)) {
  badKey.push(key[i]);
}
  }
  if (badKey.length == 0) {
    return item;
  }
  var errStr = "The method" + call + "expected an object with the key(s)";
  for (var i = 0; i < key.length; i++) {
    errStr += key[i];
    if ((badKey.length > 0 ) && (i < key.length -1)){
      errStr += ",";
    }
    errStr += ". Its is missing key(s)";
  for (var i = 0; i < badKey.length; i++) {
    errStr += badKey[i];
    if ((badKey.length > 0)&& (i < badKey.length - 1)) {
      errStr += ", ";
    }
  }
    throw new Error(errStr + ".");
    }
  }
=======

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

>>>>>>> origin/JAKE
}
