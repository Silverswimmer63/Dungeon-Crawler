/*
Working wih recursion - baby steps.

I will be using the ## to gide you to where to do things, and wherewhever
something = undefined you need to change it to something else.
*/



function nine(number){
  /* ## use recursion to figure out if a number is even or odd. The only function
  you are allowed to use other than this function is Math.abs You may not use the
  remainder operator either (%).
  */
  if (number == 2) {
    return "This fool even";
  }
  if (number == 1) {
    return "This boi odd";
  }
  return nine(Math.abs(number-2));
}
