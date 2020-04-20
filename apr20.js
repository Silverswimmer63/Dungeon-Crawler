/*
Working wih recursion - baby steps.

I will be using the ## to gide you to where to do things, and wherewhever
something = undefined you need to change it to something else.
*/

function four(number){

  // ## finish this if statement
  if (number == 0/* ## replace this with a check fi number is zero*/) {
    return 1;// ## if this is true, then return 1
  }

  //there is only one more line for this function
  return number * four(number-1);// ## have the function return number times four(number -1)
}

//this function will keep evaluating the first and second number until the second number is 0.
//Then, it takes the first number when your remainder is 0.
function five(first, second){
  if(second == 0/* ## replace this true with any statement that evaluates to if second is equal to 0 */){
    return first// ## this is our termination case, in this case return first
  }
  // if we didn't get 0 for second -
  return five(second, first%second);// ## have the function return five(second, first modulo second);

}

/*
## test this with a bunch of number pairs, and tell me what you think it does here.
yoy may want to play around with some logs to help you understand what it does.
*/

//adds up all of the numbers in the array, if theres only one it returns that
function six(numArray){
  if (numArray.length == 1/* ## replace with any check to see if the length of numArray is 1 */){
    return numArray[0]// ## return the number at index 0 (the only index left) of numArray
  }

  /*
  if there is still more than 1 item on the arrary:
  ## In the return, you will want to return the last number of numArray, while
  removing it (you will use numArray.youLookThisMethodUpIfYouForgotIt()) plus
  six(numArray);
  */
  return numArray.pop() + six(numArray); // ## change this with the instructions from above.

}

/*
## test this with a bunch of number arrays, and tell me what you think it does here.
yoy may want to play around with some logs to help you understand what it does.
*/
