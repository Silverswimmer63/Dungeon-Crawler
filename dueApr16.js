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
/* function four(number)
This function you are just going to finish the function as I ask you too, and then
once it is done, run it.
## ONCE YOU HAVE RUN IT, please, at the end of the file, tell me what you think the function is
is giving you, and how you think it is coming to that solution. You will want to test it
with numbers lower than 10 to try and come up with an idea of what the function is doing
*/


/*If you had done that, and read the last ## comment, you would have realized that this function was a factorial math calculator. For example, had you given it four(5) you would have gotten 120.
If you had done four(4) you would have gotten 24, four(3) yields 6, it is an obvious factorial progression.
This is because if the number is not 1 the return statement is evaluated to a recursive loop - this function calls itself in the return statement, meaning it will not evaluate the return until it reaches as case where it is not going to call itself anymore (in this case, number == 0);
If we did this with the number 4:
1. four(4) will not stop (number != 0) so it will evaluate to 4 * four(number -1) or 4 * four(3), the return will look like:
return 4 * four(3);
2. four(3) will then be calculated during the return of the above. that will evaluate to 3 * four(2). Now, this is happening inside the return above, so it's really so far looking like:
return 4 * 3 * four(2);
3. four(2) will then evaluate. This becomes 2 * four(1), which in turn is still all happening inside the first return. Which means it really looks like:
return 4 * 3 * 2 * four(1);
4. four(1) will then evaluate. This becomes 1 * four(0), which is is STILL happening all inside the first return. Which means it really looks like:
return 4 * 3 * 2 * 1 * four(0);
5. Finally four(0) evaluates, this is our termination/ending case, and this returns a 1, so now the original return looks like:
return 4 * 3 * 2 * 1 * 1 (we could have actually ended this with number == 1 return 1, but that I worried would confuse people.)
*/

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
