/*
Working wih recursion - baby steps.

I will be using the ## to gide you to where to do things, and wherewhever
something = undefined you need to change it to something else.
*/



function ten(array){
  /* ## our final function to help understand recursion is to do the following:
  using recursion take an array of numbers, and add them all togather. To do this,
  you will want to rip the back off the array recursively until it has a length of
  1.
  */
  //return array.reduce((a, b) => a + b, 0); <== Another way i saw online
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}
