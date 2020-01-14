class Utils {

  static intCheck(item, call = "utils.initChecks.js"){
    if(Number.isInteger(item)){return item;}
    else{throw new Error("The method " + call + " expected an integer and received " + item + ".");}
  }
  
  static randMath(min, max, call = "Utils.randMath"){
  min = Utils.intChecks(min, call);
  max = Utils.intChecks(max, call);
    if(min >= max){
      throw new Error("Min must always be less than max in" + call + ".");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  /* objCheck(item, call="Utils.objCheck")
@param item: {mixed} an item to be checked if is an object
@param call: {string} the Class/function/method where the check occured
@retun {mixed} returns the item unless it is not an object
*/
  static objCheck(item, call= "Utils.objCheck"){
    if ((typeof item == "object")&&(typeof item == "null")) {
return item;
}
else{
      throw new Error("Item is not an object" + call + ".");
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
@return {mixed} returns the item if object with key(s)
*/
keyCheck(item, key, call="Utils.keyCheck"){
  
}
}
