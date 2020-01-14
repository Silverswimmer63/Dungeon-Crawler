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

  static objCheck(item, call="Utils.objCheck.js"){
    if ((typeof item == "object") && (item != null)) {
      return item;
    } else {
      throw new Error("The method " + call + " expected an object and recieved " + item + ".");
    }
  }

}
