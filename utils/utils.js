class Utils {

  static randMath(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

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
3. look up how to check to see if something is an integer in javaScript
Number.isInteger()
4. In intCheck(item, call) check to see if the item is an integer. If so, return it.

5. If the item is not an integer, then throw your new Error. The text of this error should be :
"The method " + call + " expected an integer and received " + item + ".";

6. Test this method.
*/
static intCheck(item, call="Utils.initCheck.js") {
  if(Number.isInteger(item)) {return item;}
  else {
    throw new Error("The method " + call + " expected an integer and received " + item + ".");
  }
 }

/*1. Check min and max to make sure they are integers. As you've not done this before, I will give you an exact example of how this should look -
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
}
