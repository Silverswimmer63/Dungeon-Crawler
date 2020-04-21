/*
Working wih recursion - baby steps.

I will be using the ## to gide you to where to do things, and wherewhever
something = undefined you need to change it to something else.
*/

//this function gives you the power of a number
//num1 is the base number, num2 is the power its raised to
//anything raised to the 0 power is 1, this is why the if is there
function seven(num1, num2){
  if(num2 == 0 /* ## replace this with any way to see if num2 is equal to zero */){
    return 1;
  }

  // ## change this return to be the product of num1 times seven(num1, num2-1)
  return num1 * seven(num1, num2-1);
}

/* ## What does the above function do? Test with the same num1 and a number of num2s,
ideally small ones. Write in this comment what the function does. */

function eight(num1, num2){
  /* ## in this function you will write the code to do the same thing as above, but
  without using recursion. You also can not use the javaScript built in function to
  do this operation. You may work with others to make this function.
  */
  if (num2 == 0) {
    return 1;
  }
  var answer = num1;
  var next = num1;
  for (i = 1; i < num2; i++) {
    for (j = 1; j < num1; j++) {
      answer += next;
    }
    next = answer;
  }
  return answer;
  //multiply num1 by itself num2 amount of times
}
