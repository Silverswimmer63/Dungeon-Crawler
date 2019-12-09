
/* 4 Make the function randomItem() in javascript.js
We have a randomFoe() function, randomItem() will look a lot like randomFoe()
but will be for items. This item should use the unified loot variable to pick an
item at random, take it's asset object, and turn that into an item of the appropriate
class. This should work almost exactly like the randomFoe() class, but some of the
keys will have to be changed for basic items. HOWEVER, for weapons, armor, and
potions (And I think that is all?) there will be keys that are not present in
simple items to deal with this, you will need to use instanceof in if statements.
You should have 3 if statements for those if(???? instanceof ????) and an else statement,
and make the object inside of the if statement. We will want an else statement at this time,
because we will only want 1 return at the end, because that will make life easier down the line.
@param - no parameters at this time.
@return {object} this function will return an object of the correct class with the correct object information. */

function randomItem(){}
  var index = Utils.randMath(0, allItems.length - 1);
  var itm = allItems[index];
  var retItm = new itm.type(itm.)
