class Utils {
  /*randMath(mix, max, call="Utils.randMath")
  returns an int detween the min and the max, inclusive checks for ints and param order
  */
  static randMath(min, max, call="Utils.randMath"){
    min = this.intCheck(min, call);
    max = this.intCheck(max, call);
    if (min >= max){
      throw new Error("Min must always be less than max in " + call +".")
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  /* intCheck(item, call="Utils.intCheck.js")
  Checks to see if "item" is an integer. Throws a custom error if not.
  @param item: {mixed} an item to be check if is an integer
  @param call: {string} the Class/function/method where the check occured
  @retun {mixed} returns the item unless it is not an integer
  */
  static intCheck(item, call = "Utils.intCheck.js"){
    if (Number.isInteger(item)) { return item; }
    else{
      throw new Error("The method " + call + " expected an integer and received " + item + ".");
    }
  }

  /* objCheck(item, call="Utils.objCheck")
  @param item: {mixed} an item to be checked if is an object
  @param call: {string} the Class/function/method where the check occured
  @retun {mixed} returns the item unless it is not an object
  */
  static objCheck(item, call="Utils.objCheck"){
    if ((typeof item == "object") && (item != null)) {
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
      if ((!key[i] in item)) {
        badKey.push(key[i]);
      }
    }
    if (badKey.length == 0) {
      return item;
    }
    var errStr = "The method " + call + "exepected an object with the key(s) ";
    for (var i = 0; i < key.length; i++) {
      errStr += key[i];
      if ((key.length > 0) && (i < key.length -1)) {
        errStr += ", ";
      }
    }
    errStr += "it is missing the key(s)";
    for (var i = 0; i < badKey.length; i++) {
      errStr += badKey[i];
      if ((badKey.length > 0) && (i < badKey.length -1)) {
        errStr += ", ";
      }
    }
    throw new Error(errStr + ".");
  }





}
