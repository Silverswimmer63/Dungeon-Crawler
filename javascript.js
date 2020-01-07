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
/* 5 Update randomFoe() so that monsters with inventories have loot
A. use instanceof to see IF the said monster's class inherits the inventory class.
B. IF it does then once you have made the monster (but before you return it),
use randomItem() to make an item. Then use the correct method from class Inventory
to get that item for the inventory. */

/* 8 Update randomFoe() so that it take a level. It should work exactly like randomItem() for this purpose.

@param level {int}: the target level of the item
@return {array} an array of objects of class Mob or that inherit class Mob
*/
function randomFoe() {
  var index = Utils.randMath(0, allMobs.length - 1);
  var mon = allMobs[index];
  var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam, mon.drop);
   if (retMon instanceof Inventory) {
     retMon.add(randomItem());
   }
   else{
     var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.icon, mon.attackDam);
   }
  return retMon;
}
/* 4 Make the function randomItem() in javascript.js
We have a randomFoe() function, randomItem() will look a lot like randomFoe() but will be for items. This item should
use the unified loot variable to pick an item at random, take it's asset object, and turn that into an item of the appropriate
class. This should work almost exactly like the randomFoe() class, but some of the keys will have to be changed for basic
items. HOWEVER, for weapons, armor, and potions (And I think that is all?) there will be keys that are not present in
simple items to deal with this, you will need to use instanceof in if statements. You should have 3 if statements for
those if(???? instanceof ????) and an else statement, and make the object inside of the if statement. We will want an
else statement at this time, because we will only want 1 return at the end, because that will make life easier down the line.
@param - no parameters at this time.
@return {object} this function will return an object of the correct class with the correct object information. */

/* 7 Update randomItem()
randomItem() will now take a parameter and return an array. This will take some explaining, so please read the rational below fully before the instructions.
What we are going to do in randomItem() is make it check the level that has been assigned to it, and then try to fill up the inventory with that combined level worth of stuff, + or - a little bit. We will want to program this ideally so that we often get worse loot, and only rarely get better loot. We will also want to cap off how much better the loot can be. The worse loot can "add up" to be the same level as the better loot or not, depending on the role of the random dye.
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
function randomItem() {
var index = Utils.randMath(0, retItem.length + 1);
var item = retItem[index];
var retItem = undefined;
var max = level+1
var small = 33.33333333334;
var big = 66.66666666666;
if (item.type instanceof Armor) {var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damageresist)}
if(item.type instanceof Ranged) {var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damage, item.range)}
if(item.type instanceof Melee) {var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damage)}
if(item.type instanceof Potion) {var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damage)}
else{ var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon) }
while (level <=  max) {
if (level == 0) {
  Mythological
}
function _makeItem(){}

function randomItem(level){
  varmax = level+1;
  var retAry =[];
  if (math.random()<= .2) {max = level + 2;}
  while (true) {
    var item = this.makeItem();
    var remain = max;
    if (retAry.length != 0) {
      for (var i = 0; i < retAray.length; i++) {
      remains -  (retAry[i].level+1);
      }
      if (remINS == 0) {return retAray;}
      if utils
    }
    if (item.level <= max);) {
      var goodItem= false;
      while (!goodItem){
        var item = this._makeItem();
        if (irem.level+1 <= remains){
          retARY.push(item);
          goodItem = true;
        }
      }
      retAry.push(item);
    }
  }
}
}
return retItem;
}
/* A. We will need to track the total level of things made until it reaches or exceeds a target. A quick solution to this would be to make the target = level, however, that would allow us to add infinite level 0 items. So our target should be the level + 1, and we should look at item at their level + 1
B. We will need to put all the existing code inside some sort of loop. What loop will be best for this? Why?
C. Give it a chance to have less then perfect loot. For example, if they were level 2, they should have a 33.3333333333.... % chance to stop if they have only rolled 1 level 0 item, a 66.666666.... % chance of stopping at 1 level 1 item or 2 level 0 items, and so on. This should be done programmatically, using some math. To do this, we will have to track the current total of item levels of approved items, and the total + the most recently rolled item
D. Also give it a chance to roll 1 level over. So if the current total is over the target by 1, give it a small..... say 10% chance to keep the most recently rolled total items. If this is not successful, then ignore the most recently rolled item, and roll again. If it is over by 2 or more, re-roll.
E. when the target level (which is the level +1) is reached or exceeded but accepted, return the array of items.

@param level {int}: the target level of the item
@return {array} an array of objects of class Item or that inherit class Item
*/
