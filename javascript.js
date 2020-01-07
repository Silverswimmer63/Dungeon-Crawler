<<<<<<< HEAD
/*Make a function called randomFoe();
for now, make this in javascript.js
It should do the following at first implementation -
1. Take the list of all the opponents.
2. Find out how long that list is.
3. Use that number and and randomness to get an index for that list.
4. Access (but do not remove) the object at that index to make a copy of that foe.
This means take the template, and use it to make a new monster of the correct class.
for example, if the class was Cowboy, it should make a new object of Class Cowboy.
5. Return that object.
=======
>>>>>>> master

function randomItem(){
    var index = Utils.randMath(0, allItems.length - 1);
    var item = allItems[index];
    if (item.type instanceof Armor) { var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damageresist) }//inherits off; Armor will check all o them. INHERITANCE
    if (item.type instanceof Ranged) { var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damage, item.range) }
    if (item.type instanceof Melee) { var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damage) }
    if (item.type instanceof Potion) { var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damage) }
    else{ var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon) }
    return retItem;
}
  function randomFoe() {
      var index = Utils.randMath(0, allMobs.length - 1);
      var mon = allMobs[index];
      var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
      if (retMon instanceof Inventory) {
        retMon.add(randomItem());//last step add some monster inventory here
      }
      else{
        var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
      }
      return retMon;
}
/* 7 Update randomItem()
randomItem() will now take a parameter and return an array.
This will take some explaining, so please read the rational below fully before the instructions.
What we are going to do in randomItem() is make it check the level that has been assigned to it,
and then try to fill up the inventory with that combined level worth of stuff,
+ or - a little bit. We will want to program this ideally so that we often get worse loot,
and only rarely get better loot. We will also want to cap off how much better the loot can be.
The worse loot can "add up" to be the same level as the better loot or not, depending on the role of the random dye.

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
How can we do this?

A. We will need to track the total level of things made until it reaches or exceeds a target. A quick solution to this would be to make the target = level, however, that would allow us to add infinite level 0 items. So our target should be the level + 1, and we should look at item at their level + 1
B. We will need to put all the existing code inside some sort of loop. What loop will be best for this? Why?
C. Give it a chance to have less then perfect loot. For example, if they were level 2, they should have a 33.3333333333.... % chance to stop if they have only rolled 1 level 0 item, a 66.666666.... % chance of stopping at 1 level 1 item or 2 level 0 items, and so on. This should be done programmatically, using some math. To do this, we will have to track the current total of item levels of approved items, and the total + the most recently rolled item
D. Also give it a chance to roll 1 level over. So if the current total is over the target by 1, give it a small..... say 10% chance to keep the most recently rolled total items. If this is not successful, then ignore the most recently rolled item, and roll again. If it is over by 2 or more, re-roll.
E. when the target level (which is the level +1) is reached or exceeded but accepted, return the array of items.

@param level {int}: the target level of the item
@return {array} an array of objects of class Item or that inherit class Item
*/
<<<<<<< HEAD
function _makeFoe() {
  var index = Utils.randMath(0, allMobs.length - 1);
  var mon = allMobs[index];
  var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
  if (retMon instanceof Inventory) { retMon.add(randomItem()); }
  else { var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam); }
  return retMon;
}

function randomFoe(level) {
  var max = level +1;
  var retAry = [];
  if (Math.random() <= .2) { max = level +2; }
  while (true) {
    var remains = max;
    if (retAry.length != 0) {
      for (var i = 0; i < retAry.length; i++) {
        remains - (retAry[i].level +1);
      }
      if (remains = 0) { return retAry; }
      if (Utils.randMath(0, max) > remains) { return retAry; }
    }
    var goodItem = false;
    while (!goodItem) {
      var item = this._makeItem();
      if (item.level+1 <= remains) {
        return retAry.push(item);
        goodItem = true;
      }
    }
  }
}

/* 4 Make the function randomItem() in javascript.js
We have a randomFoe() function, randomItem() will look a lot like randomFoe() but will be for items.
This item should use the unified loot variable to pick an item at random, take it's asset object, and turn that into an item of the appropriate class.
This should work almost exactly like the randomFoe() class, but some of the keys will have to be changed for basic items.
HOWEVER, for weapons, armor, and potions (And I think that is all?) there will be keys that are not present in simple items to deal with this, you will need to use instanceof in if statements.
You should have 3 if statements for those if(???? instanceof ????) and an else statement, and make the object inside of the if statement.
We will want an else statement at this time, because we will only want 1 return at the end, because that will make life easier down the line.
@param - no parameters at this time.
@return {object} this function will return an object of the correct class with the correct object information.
*/


/* 7 Update randomItem()
randomItem() will now take a parameter and return an array. This will take some explaining, so please read the rational below fully before the instructions.
What we are going to do in randomItem() is make it check the level that has been assigned to it,
and then try to fill up the inventory with that combined level worth of stuff, + or - a little bit.
We will want to program this ideally so that we often get worse loot, and only rarely get better loot.
We will also want to cap off how much better the loot can be. The worse loot can "add up" to be the same level as the better loot or not, depending on the role of the random dye.
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
How can we do this?
*/

/*A. We will need to track the total level of things made until it reaches or exceeds a target.
A quick solution to this would be to make the target = level, however, that would allow us to add infinite level 0 items.
So our target should be the level + 1, and we should look at item at their level + 1
B. We will need to put all the existing code inside some sort of loop. What loop will be best for this? Why?
C. Give it a chance to have less then perfect loot.
For example, if they were level 2, they should have a 33.3333333333.... % chance to stop if they have only rolled 1 level 0 item,
a 66.666666.... % chance of stopping at 1 level 1 item or 2 level 0 items, and so on.
This should be done programmatically, using some math.
To do this, we will have to track the current total of item levels of approved items, and the total + the most recently rolled item
D. Also give it a chance to roll 1 level over.
So if the current total is over the target by 1, give it a small..... say 10% chance to keep the most recently rolled total items.
If this is not successful, then ignore the most recently rolled item, and roll again. If it is over by 2 or more, re-roll.
E. when the target level (which is the level +1) is reached or exceeded but accepted, return the array of items.
*/

/*randomItem(level)
It will take the level of a monster and generate loot to fill the monsters inventory
Lower level loot will generate more often than higher level loot
Will be inside of a ________ loop
If the roll is over by one level, it has a 10% chance to keep the loot
if it doesnt fallwithin the 10%, the extra loot is just ignored
When the target level is reached the array of the items is returned
@param level {int}: the target level of the item
@return {array} an array of objects of class Item or that inherit class Item
*/

function _makeItem() {
  var index = Utils.randMath(0, allItems.length - 1);
  var item = allItems[index];
  if (item.type instanceof Armor) { var retItem = new item.type(item.name, item.icon, item.value, item.desc, item.level, item.damageresist); }
  if (item.type instanceof Weapon) { var retItem = new item.type(item.name, item.icon, item.value, item.type, item.level, item.damage); }
  if (item.type instanceof Potion) { var retItem = new item.type(item.name, item.icon, item.desc, item.value, item.level, item.damage); }
  else { var retItem = new item.type(item.name, item.value, item.desc, item.icon, item.level); }
  return retItem;
}

function randomItem(level) {
  var max = level +1;
  var retAry = [];
  if (Math.random() <= .2) { max = level +2; }
  while (true) {
    var remains = max;
    if (retAry.length != 0) {
      for (var i = 0; i < retAry.length; i++) {
        remains - (retAry[i].level +1);
      }
      if (remains = 0) { return retAry; }
      if (Utils.randMath(0, max) > remains) { return retAry; }
    }
    var goodItem = false;
    while (!goodItem) {
      var item = this._makeItem();
      if (item.level+1 <= remains) {
        return retAry.push(item);
        goodItem = true;
      }
    }
  }
}
=======

/* 8 Update randomFoe() so that it take a level. It should work exactly like randomItem() for this purpose.

@param level {int}: the target level of the item
@return {array} an array of objects of class Mob or that inherit class Mob
*/
/* method be able to take individual items or take arrays of 1 or more items. So we must update .get(item)
@return {array} an array of objects of class Mob or that inherit class Mob
it should check to see IF the parameter (item) is a single object or an array./*
BECAUSE EVERYTHING IS AN OBJECT in Javascript, it should check to see if it is an array.
RESEARCH how to determine if something is an array in javascript
IF (????? item == ?????) then it is an array. If this is the case, add it to the _inventory as multiple things. The _inventory is an array as well. The inventory may or may not have items on it already. The end product should be an array that only has items on it. We have talked about a lot of ways to do this.
*/
/*   TEST THIS  */
/*function randomItem(level) {
  var index = Utils.randMath(0, allItems.length - 1);
  var item = allItems[index];
  var chance = {high:55,medium:35, low:10};
  var randIdent = Utils.randMath(0,100);
  if (item.type instanceof Armor) {  var retItem = new item.type(item.name, item.value, item.desc, item.icon, item.damageresist); }
  if (item.type instanceof Weapon) { var retItem = new item.type(item.name, item.value, item.desc, item.icon, item.damage, item.range); }
  if (item.type instanceof Potion) { var retItem = new item.type(item.name, item.value, item.desc, item.icon, item.damage); }
  else { var retItem = new item.type(item.name, item.value, item.desc, item.icon); }
  return retItem;
}
*/
>>>>>>> master
