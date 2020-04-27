/*
A reveiw of basic JavasScript functions so we can switch gears.
Long Story Short Folks - It turns out when I grabbed whomever's code I grabbed
to make the inital git for the class rather than using mine because it seemed
like a good idea, there were deep, deep flaws inside some of the files. Looking
at the amount of work we'd have to redo... the project may be scrapped at this
point. So we are going to look at making some basic functions today and tommorow
so we can look at some more complex things we have yet to cover. A lot of this
should feel like review to most of you.

I will be using the ## to gide you to where to do things, and wherewhever
something = undefined you need to change it to something else.
*/

/* function one(text)
The string for this function should be all lowercase and have no period.
Your goal with this function is to simply put a period on the end of the string.
This could be one line of code or many.
*/
function one(text){
  // ## return the text plus a period - single line
  return text + "."
  /* (I did it both ways)
  //OR DO IT THE LONG WAY
  //make a new var called retString
  var retString = text;// ## make retString equal text.
  retString += ".";// ##add a period to the end of retString
  return retString;// ## return retString
  */
}

/* function two(text)
The string for this function should be all lowercase
This function should take a string and read the first letter of it, store that
letter away in a variable, but capitalized, then cut the letter off the front
of the string, then put the new capitalized version on in it's place.
*/
function two(text){
  var first = text.charAt(0); // ## make this equal to only the first letter in text
  first = first.toUpperCase(); // ## use (and look up if you forgot) a JavasScript bult in string method to make this capitalized
  // slice the rest of the string off from the first letter
  var rest = text.slice(1, text.length);// ## you are going to need to use another JavasScript built in function to get everything from the 2 index (i=1) to the end
  return first + rest;
}

/* function three(text)
This function should just take the text and call functions one and two on it, making sure
to update it as it goes, then return the new version.
*/
function three(text){
  text = one(text); // ## make it equal the product of one
  text = two(text); // ## make it equal the product of two
  return text;
}


/*
Working wih recursion - baby steps.

I will be using the ## to guide you to where to do things, and whenever
something = undefined you need to change it to something else.
*/
/* function four(number)
This function you are just going to finish the function as I ask you too, and then
once it is done, run it.
## ONCE YOU HAVE RUN IT, please, at the end of the file, tell me what you think the function is
is giving you, and how you think it is coming to that solution. You will want to test it
with numbers lower than 10 to try and come up with an idea of what the function is doing
*/

function four(number){
    // ## finish this if statement
    if (number == 0) { //## replace this with a check if number is zero
      // ## if this is true, then return 1
      return 1;
    }
    //there is only one more line for this function
    // ## have the function return number times four(number -1)
    return number *four(number -1);
}

function five(first, second){
  if(second == 0){ //}## replace this true with any statement that evaluates to if second is equal to 0
    return first; // ## this is our termination case, in this case return first
  }
  // if we didn't get 0 for second -
  // ## have the function return five(second, first modulo second);
  return five(second, first % second);
}

/*
## test this with a bunch of number pairs, and tell me what you think it does here.
yoy may want to play around with some logs to help you understand what it does.
--I believe that function will keep evaluating the first and second number until the second number (which pumps out the
remainder) is 0 (or when there is no remainder). Then, it takes the first number when your remainder is 0. For example,
if I have my first number as 5 and my second number 10 (five(5, 10)), then it will go return five(10, 5), because when
you divide 5 by  10 you get a remainder of 5. Then it goes through the equation again so that it returns five(5), because
when you divide 10 by 5, you would get a remainder of 0, so it goes to the if statement, returning the first number, which is 5.
*/

function six(numArray){
  if (numArray.length == 1){ //## replace with any check to see if the length of numArray is 1
    // ## return the number at index 0 (the only index left) of numArray
    return numArray[0];
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
-- This basically just adds all the numbers inside an array. For example, if you have an array of [5, 10, 45, 17], then it will
go through the function as followed: it will see that there is more than one item in the array so it 'pops' the last number (which
is 17) and adds it for the next number. The array goes through the function again and sees that there is still more than 1 item in
the array, so it will return the last number (this time it is 45), adds it to the last number (so you get 17+45 = 62) and repeats
again. This sees that there is still more than one item so it pops the last number (10) and adds it to 62 to get 72. It goes through
the functino one last time, sees that there is only one item so it goes into the if statement, return the only number left and adding
it(5) to 72 to get 77.
*/

function seven(num1, num2){
  if(num2 == 0){ //## replace this with any way to see if num2 is equal to zero
    return 1;
  }
  // ## change this return to be the product of num1 times seven(num1, num2-1)
  return num1 * seven(num1, num2-1);
}

/* ## What does the above function do? Test with the same num1 and a number of num2s,
ideally small ones. Write in this comment what the function does.
--I think this is basically turning the num1 into a base and num2 into an exponent. For example, if you have seven(3,2)
then 3 will become the base and 2 will be the exponent. So you basically do 3^2 to get 9. Another example is seven(4,3)
4^3 is 64.
*/

function eight(num1, num2){
  /* ## in this function you will write the code to do the same thing as above, but
  without using recursion. You also can not use the javaScript built in function to
  do this operation. You may work with others to make this function.
  */
  var number = num1;
  for (var i = 1; i < num2; i++){
    num1 *= number;
  }
  return num1;
}

function nine(number){
  /* ## use recursion to figure out if a number is even or odd. The only function
  you are allowed to use other than this function is Math.abs You may not use the
  remainder operator either (%).
  */
  if (number == 2) {
    return "This number is even"
  }
  if (number == 1) {
    return "This number is odd"
  }
  return nine(Math.abs(number -2))
}

function ten(array){
  /* ## our final function to help understand recursion is to do the following:
  using recursion take an array of numbers, and add them all togather. To do this,
  you will want to rip the back off the array recursively until it has a length of
  1.
  */
  if (array.length == 1) {
    return array[0];
  }
  return array.pop() + ten(array);
}
