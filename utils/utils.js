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


static intCheck(item, call="Utils.intCheck.js"){
    if(Number.isInteger(item)){return item;}
      else{throw new Error( "The method " + call + "and recived " + item + "." )}

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

    static listCheck(item,list,call="Utils.list"){
        if(list.includes(item)){
          call + "expected one of the following: " + list + " and got " + item + ".";
        }
      }
      //this function witll produce objects  with the keys of x AND Y   WITH VALUES BETWEEN XMIN-XMAX
      //

      static randCoord(xMin, xMax, yMin, yMax,call="Utils.randCoord"){
        var retObj = {};
        retObj.x = this.randMath(xMin,xMax);
        retObj.y = this.randMath(yMin,yMax);
        return retObj;


      /* randRoom(width, height, roomMin, roomMax)
Returns an array of 4 coordinate objects
*/
  static randRoom(width, height, roomMin, roomMax){
    var retArr = [];
    var start = this.randCoord(1,width-rMin, height-rMin);
    var stop = this.randCoord(tL.x + rMin,Math.min(tL.x + rMax), tL.y+ rMax,heigth));
    for (var i = start.x; i < stop.x; i++) {
      for (var j = start.y; j < stop.y; j++) {
        retArr.push({x:i,y:stop.j})

      }
    }
    // make an array to return
    // for every line(x or y):
    //find the values of the other coord(if x above then y here and vice versa)
    //put them into an object with they keys {x: numA y:numB}
    //put objects on the array
    // return array of objects
}
    return [tL ,{x:bR.x,y:tL.y},{x:tL.x,y:bR.y},bR]
  }




      }
 }
