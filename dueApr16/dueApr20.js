/*
Working wih recursion - baby steps.

I will be using the ## to gide you to where to do things, and wherewhever
something = undefined you need to change it to something else.
*/


function four(number){

  // ## finish this if statement
  if (number == 0) {
    return 1;
  }

  //there is only one more line for this function
  return number * four(number -1);
}


function five(first, second){
  if(second == 0){
    return first;
  }
  if (second != 0) {
    return five(second, first % second)
  }

}

/*
## test this with a bunch of number pairs, and tell me what you think it does here.
you may want to play around with some logs to help you understand what it does.
*/

function six(numArray){
  if (numArray.length == 1){
  return numArray[0];
  }

  /*
  if there is still more than 1 item on the arrary:
  if (numArray.length > 1) {

  }
  ## In the return, you will want to return the last number of numArray, while
  removing it (you will use numArray.youLookThisMethodUpIfYouForgotIt()) plus
  six(numArray);
  */
  return numArray.splice(numArray.length-1) + six(numArray); // ## change this with the instructions from above.

}

/*
## test this with a bunch of number arrays, and tell me what you think it does here.
you may want to play around with some logs to help you understand what it does.
*/
