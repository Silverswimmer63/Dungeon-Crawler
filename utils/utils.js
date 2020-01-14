class Utils {

  static randMath(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
/*
6. Test this method.

D. More updates to Utils.js - We are going update randMath while we are in here
to do some parameter checking as well. We will be using this method a lot to
make the rooms, so we will want to make sure we are giving it the correct things
 at all times.
*/
static intCheck2(item, call="Utils.initCheck.js") {
  if(Number.isInterger(item)){return item;}
  else{
    throw new error ("this error")
  }
}
/*
1. Check min and max to make sure they are integers. As you've not done this
before, I will give you an exact example of how this should look -
min = this.intCheck(min, "Utils.randMath");
What is going on here is that it will, by default, set min to min. however, if
min is not an integer, it will stop everything and throw the error "The method
Utils.randMath expected an integer and received (whatever you gave it)", letting
 us know that we've broken something simply by giving the method something other
  then a number (like a coordinate)
do the same as above with max

2. Check to make sure that min is less than max.
Check if min is greater than or equal to max, if so, throw a new error that reads:
"Min must always be less than max in Utils.randMath."
update the description of the method to include the call parameter.
Now we can use it all over the place and set the call to whatever method we are
using, to help check for errors. But by giving it the default value in the call
param, we can still use it the way we have always been using it.
*/
static randMath(min, max, call="utils.randMath"){
  min = this.intCheck(min, call);
  max = this.intcheck(max,call);
  if (min <= max){
    throw new Error ("min must always be less than max"+call+)
  }
}
/*
F. Making the basic map
1. add a new method to map called _generateMap();
This method will make a empty, totally unreachable map (or at least a data
storage of it) filled with our fill. You will need to use loops to make this
map per the spec, you will need to use 2 loops within eachother. The function should be made to meet this description -
You will need to start by making a variable to be returned.
You will want to make sure your loops go from 1 to the entire value of the width or height
you will need to look up how to make object keys from strings to do this.
Don't forget to use this

 _generateMap()
A method to make a map filled with items of the this._fill value. The "map" is
an object with a set of objects imbeded within it. All of the top level keys,
which each owns it's own object, will begin with the letter y (ex y1, y2), and
so on. The second level objects will be keyed in the same way, but with x
rather than y for their start. This is done so that we may access the map by
way of using map.y15.x22 to avoid x and y confusion. The values of the keys in
the inner objects will be the individual cells of the map.
*/
