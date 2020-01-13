class Utils {
  /*randMath(mix, max, call="Utils.randMath")
  returns an int detween the min and the max, inclusive checks for ints and param order
  */
  static randMath(min, max, call="Utils.randMath"){
    min = this.intCheck(min, call);
    max = this.intCheck(max, call);
    if(min >= max){
      throw new Error("Min must always be less than max in " + call +".")
    }
    //return Math.floor(Math.random() * (max - min + 1)) + min;
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
}
