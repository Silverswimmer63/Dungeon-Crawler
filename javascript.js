/**** THESE NOTES WILL BE TRUE FOR THIS AND ALL FOLLOWING CODING ***
Because we will be working with many forks, and it is the goal that all function the same (although they may be
  programmed differently) be sure that all the following is true of everything you code -
1. All function names are as I define them.
2. All function returns are as I define them.
3. As 1 and 2 above, but for classes - getters, setters, class names, methods, properties, the whole works.
4. As 1 above, but for any variables outside of classes or functions.*/
/*
YOU CAN make helper functions for things you might do often. If you do so, you should, where possible,
 put them in the Utils static class in utils.js and let me know. This might be a good idea sometimes.

Following that, we are going to be working on the code in the following ways:

*** THESE FIRST FEW STEPS WILL BE DONE AS A GROUP ON THE MAIN BRANCH ***

WE ARE IDEALLY GOING TO BE DONE BY THE END OF 2ND PERIOD WITH THIS PORTION*/

/* 1. Fix the constants' names. they should be all 100% caps, with underscores between words.
You can tell some of them are wrong because they show up the wrong color in the editor.
ONLY REPLACE THE SMALL LETTERS WITH CAPS. Any other changes and peoples code will start not working right. */

/* 2. Clean up some of the asset names. For example, in itemAssets,
it is the case that the head and legs say things like "Iron Helmet" and "Iron Legs" whereas the body only says things like
"iron" those should say something like "Iron Breastplate" - we should have consistent name details and capitalization. */

/* 3. For right now, our dungeon is going to have 3 levels. We will be adding in a mechanism later in our process for the
first part of this week so we pick things that are level appropriate for the dungeon. In order to make that work when we
implement it, we will need to add a new key to every asset (both monsters & items) in the game - level.
The level should range from 0 - 3. Make the weakest things and worst items level: 0 and the strongest things
and best items level: 3. This way. later on, we can use some maths to have most of the dungeon's monsters and items at the
same level as the dungeon, but have some stuff that is weaker (lower level) and the rare monster a higher level.
Pretty much how this will work, is that we'll set up each level with a point total in monsters and stuff,
and the level of the item will modify the points. */

/*
Make a function called randomFoe();
for now, make this in javascript.js
It should do the following at first implementation -
1. Take the list of all the opponents.
2. Find out how long that list is.
3. Use that number and and randomness to get an index for that list.
4. Access (but do not remove) the object at that index to make a copy of that foe.
This means take the template, and use it to make a new monster of the correct class.
for example, if the class was Cowboy, it should make a new object of Class Cowboy.
5. Return that object.

You will know this works if the following happens in console when you try to run it:

var foo = randomFoe();
when you then type foo, you should have a random foe from the list you made.
*/

function randomFoe() {
  var index = Utils.randMath(0, allMobs.length - 1);
  var mon = allMobs[index];
  var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
  return retMon;
}

/* 4 Make the function randomItem() in javascript.js
We have a randomFoe() function, randomItem() will look a lot like randomFoe() but will be for items.
This item should use the unified loot variable to pick an item at random, take it's asset object,
and turn that into an item of the appropriate class. This should work almost exactly like the randomFoe() class,
 but some of the keys will have to be changed for basic items. HOWEVER, for weapons, armor, and potions
(And I think that is all?) there will be keys that are not present in simple items to deal with this,
you will need to use instanceof in if statements. You should have 3 if statements for those
if(???? instanceof ????) and an else statement, and make the object inside of the if statement.
We will want an else statement at this time, because we will only want 1 return at the end,
because that will make life easier down the line.
@param - no parameters at this time.
@return {object} this function will return an object of the correct class with the correct object information.
TEST THIS*/
function randomItem() {
  var index = Utils.randMath(0, allItems.length - 1);
  var item = allItems[index];
  if (item.type instanceof Armor) {
var retItem= new item.type(item.name, item.value, item.desc, item.icon, item.damageresist);
}
if (item.type instanceof Weapon) {
var retItem= new item.type(item.name, item.value, item.desc, item.icon, item.damage, item.range);
}
if (item.type instanceof Potion) {
var retItem= new item.type(item.name, item.value, item.desc, item.icon, item.damage);
}
else{ var retItem = new item.type(item.name, item.value, item.desc, item.icon)
}
  return retItem;
}
/* 5 Update randomFoe() so that monsters with inventories have loot
A. use instanceof to see IF the said monster's class inherits the inventory class.
B. IF it does then once you have made the monster (but before you return it), use randomItem()
 to make an item. Then use the correct method from class Inventory to get that item for the inventory.
TEST THIS*/
function randomFoe() {
  var index = Utils.randMath(0, allMobs.length - 1);
  var mon = allMobs[index];
  var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
  if ( retMon instanceof Inventory){ retMon.add(randomItem()); }
   else { var retMon = new mon.type( mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam); }
  return retMon;
}
/* 7 Update randomItem()
randomItem() will now take a parameter and return an array.
This will take some explaining, so please read the rational below fully before the instructions.
What we are going to do in randomItem() is make it check the level that has been assigned to it,
and then try to fill up the inventory with that combined level worth of stuff, + or - a little bit.
We will want to program this ideally so that we often get worse loot, and only rarely get better loot.
We will also want to cap off how much better the loot can be. The worse loot can "add up" to be the same level as
the better loot or not, depending on the role of the random dye.
For example - if the param level = 1 -
it should be able to have 1 or 2 level 0 items
1 level 1 item
or 1level 2 item (small chance)
but never a level 3
For example - if the param level = 2 -
It should be able to have-
1-3 level 0 items
1 level 1 item and 1 level 1
2 level 1 items (small chance)
1 level 2 item
or 1 level 3 item (small chance)
and so on.
How can we do this?*/
/*
A. We will need to track the total level of things made until it reaches or exceeds a target.
A quick solution to this would be to make the target = level, however, that would allow us to add infinite level 0 items.
So our target should be the level + 1, and we should look at item at their level + 1
B. We will need to put all the existing code inside some sort of loop. What loop will be best for this? Why?
C. Give it a chance to have less then perfect loot. For example, if they were level 2, they should have a 33.3333333333....
% chance to stop if they have only rolled 1 level 0 item, a 66.666666....
% chance of stopping at 1 level 1 item or 2 level 0 items, and so on. This should be done programmatically,
using some math. To do this, we will have to track the current total of item levels of approved items, and the total +
the most recently rolled item
D. Also give it a chance to roll 1 level over. So if the current total is over the target by 1, give it a small.....
say 10% chance to keep the most recently rolled total items. If this is not successful, then ignore the most recently
rolled item, and roll again. If it is over by 2 or more, re-roll.
E. when the target level (which is the level +1) is reached or exceeded but accepted, return the array of items.

@param level {int}: the target level of the item
@return {array} an array of objects of class Item or that inherit class Item
*/function _makeItem() {
  var index = Utils.randMath(0, allItems.length - 1);
  var item = allItems[index];
  if (item.type instanceof Armor) {
var retItem= new item.type(item.name, item.desc, item.value, item.icon, item.damageresist);
if (item.type == Ranaged)
}
if (item.type instanceof Weapon) {
var retItem= new item.type(item.name, item.desc, item.value, item.icon, item.damage, item.range);
}
if (item.type instanceof Potion) {
var retItem= new item.type(item.name, item.desc, item.value, item.icon, item.damage);
}
else{ var retItem = new item.type(item.name, item.desc, item.value, item.icon)
}
  return retItem;
}

function randomItem(level) {
   var max = level+1
   var retAry = [];
if (Math.random()<= .1){max = level +2}
while (true) {
   var item = this._makeItem();
   var remains = max;
if (retAry.length!= 0) {
 for (var i = 0; i < retAry.length; i++) {
  remains -= (retAry(i).level+1);
   var item = this._makeItem();
  }
if (remains == 0){return retAry;}
if (Utils.randMath(0,max)> remains) {return retAry;}
}
  var item = this._makeItem
  var goodItem = this._makeItem()
while (!goodItem) {
if (item.level+1 <= remains) {
  retAry.push(item);
  goodItem = true;
   }
  }
 }
}
/* 8 Update randomFoe() so that it take a level. It should work exactly like randomItem() for this purpose.

@param level {int}: the target level of the item
@return {array} an array of objects of class Mob or that inherit class Mob
*/
function _makeFoe() {
  var index = Utils.randMath(0, allMobs.length - 1);
  var mon = allMobs[index];
  var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
  return retMon;
}

function randomFoe(level) {
   var max = level+1
   var retArry = [];
if (Math.random()<= .1){max = level +2}
while (true) {
   var item = this._makeItem();
   var remains = max;
if (retArry.length!= 0) {
 for (var i = 0; i < retArry.length; i++) {
  remains - (retArry(i).level+1);
   var item = this._makeItem();
  }
if (remains == 0){return retArry;}
if (Utils.randMath(0,max)> remains) {return retArry;}
}
  var item = this._makeItem
  var goodItem = this._makeItem()
while (!goodItem) {
if (item.level+1 <= remains) {
  retArry.push(item);
  goodItem = true;
   }
  }
 }
}
/*trying to input the mods
1. in the class Item add the param level and getters and setters.
2. add level to the constructor
3. add level to all the other constructors that are descendants of item
4. change _makeItem() so it makes the items with levels, which are in the asset files.
Boom it should work.
*/
