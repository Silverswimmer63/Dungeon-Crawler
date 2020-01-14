class Utils{

  static randMath(min, max, call="Utils.randMath"){
    min = this.intCheck(min, call);
    max = this.intCheck(max, call);
    if( min >= max){
      throw new Error("Min must be always be less than max in" + call + ".");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /* intCheck(item, call="Utils.intCheck.js")
  Checks to see if "item" is an integer. Throws a custom error if not.
  @param item: {mixed} an item to be check if is an integer
  @param call: {string} the Class/function/method where the check occured
  @retun {mixed} returns the item unless it is not an integer


2. look up how to make a custom error message in javaScript

3. look up how to check to see if something is an integer in javaScript

4. In intCheck(item, call) check to see if the item is an integer. If so, return it.

5. If the item is not an integer, then throw your new Error. The text of this error should be :
"The method " + call + " expected an integer and received " + item + ".";

6. Test this method.
*/

  static intCheck(item, call="Utils.intCheck.js"){
    if(Number.isInteger(item)) { return item; }
    else{
      throw new Error("The method " + call + " expected an integer and received " + item + ".");
    }
  }
}
