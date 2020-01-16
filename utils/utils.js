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

  static intCheck(item, call="Utils.intCheck.js"){
    if (Number.isInteger(item)) {return item}
    else {
      throw new Error("The method " + call + " expected an integer and received " + item + ".");
    }
  }

  static objCheck(item, call="Utils.objCheck.js"){
    if ((typeof item == "object") && (item != null)) {
      return item;
    } else {
      throw new Error("The method " + call + " expected an object and recieved " + item + ".");
    }
  }

  static keyCheck(item, key, call="Utils.keyCheck.js"){
    this.objCheck(item, call);
    if (!Array.isArray(key)) {
      key = [key]
    }
    var badKey = [];
    for (var i = 0; i < key.length; i++) {
      if (!(key[i] in item)) {
        badKey.push(key[i]);
      }
    }
  }

}
