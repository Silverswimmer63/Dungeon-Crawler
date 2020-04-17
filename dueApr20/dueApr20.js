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
  return text + ".";

}

/* function two(text)
The string for this function should be all lowercase
This function should take a string and read the first letter of it, store that
letter away in a variable, but capitalized, then cut the letter off the front
of the string, then put the new capitalized version on in it's place.
*/
function two(text){
  var first = text.charAt(0) // ## make this equal to only the first letter in text
  first = first.toUpperCase();// ## use (and look up if you forgot) a JavasScript bult in string method to make this capitalized

  // slice the rest of the string off from the first letter
  var rest = text.slice(1) // ## you are going to need to use another JavasScript built in function to get everything from the 2 index (i=1) to the end

  return first + rest;
}

/* function three(text)
This function should just take the text and call functions one and two on it, making sure
to update it as it goes, then return the new version.
*/
function three(text){
  text = this.one(text); // ## make it equal the product of one
  text = this.two(text); // ## make it equal the product of two
  return text;
}

/* function four(number)
This function you are just going to finish the function as I ask you too, and then
once it is done, run it.
## ONCE YOU HAVE RUN IT, please, at the end of the file, tell me what you think the function is
is giving you, and how you think it is coming to that solution. You will want to test it
with numbers lower than 10 to try and come up with an idea of what the function is doing
*/

function four(number){

    // ## finish this if statement
    if (number == 0) {
      return 1;
    }

    //there is only one more line for this function
  return number*4;
}

// its giving us a number greater then for always (unless its negative but i dont know if were counting those) or unless its zero
//because is its 0 you set it to one and if its any other number its just being mutliplied by four
// so it will always be higehr then four
