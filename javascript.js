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
/* 8 Update randomFoe()
so that it take a level. It should work exactly like randomItem() for this purpose.

@param level {int}: the target level of the item
@return {array} an array of objects of class Mob or that inherit class Mob
*/

function randomFoe() {
  let max = level+1;
  if (Mob instanceof Inventory) {
  let retAry = [];
  if (Math.random() <= .1) {max = level +2; }
  while (true) {
    var remains = max;
    if (retAry.length != 0) {
      for (var i = 0; i < retAry.length; i++) {
        remains - (retAry[i].level+1);
      }
      if (remains == 0) {return retAry;}
      if (Utils.randMath(0,max) > remains) {return retAry;}
    }
    let goodMob = false;
    while (!goodMob) {
      let item = this._makeMob();
      if (item.level+1 <= remains) {
        retArray.push(item);
        goodItem = true;
     }
    }
   }
  }
 }

function _makeMob(){
  var index = Utils.randMath(0, allMobs.length - 1);
  var mon = allMobs[index];
  var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
  if( retMon instanceof Inventory ) { retMon.add(randomItem()); }
  else{ var retMon = new mon.type( mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam); }
  return retMon;
}

/* 7 Update randomItem()
randomItem() will now take a parameter and return an array. This will take some
explaining, so please read the rational below fully before the instructions.
What we are going to do in randomItem() is make it check the level that has been
assigned to it, and then try to fill up the inventory with that combined level worth of stuff, + or - a little bit. We will want to program this ideally so that we often get worse loot, and only rarely get better loot. We will also want to cap off how much better the loot can be. The worse loot can "add up" to be the same level as the better loot or not, depending on the role of the random dye.
For example - if the param level = 1 -
it should be able to have 1 or 2 level 0 items
1 level 1 item
or 1 level 2 item (small chance)
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

A. We will need to track the total level of things made until it reaches or exceeds
a target. A quick solution to this would be to make the target = level, however,
that would allow us to add infinite level 0 items. So our target should be the level + 1, and we should look at item at their level + 1
B. We will need to put all the existing code inside some sort of loop. What loop will be best for this? Why?
C. Give it a chance to have less then perfect loot. For example, if they were level 2,
they should have a 33.3333333333.... % chance to stop if they have only rolled 1
level 0 item, a 66.666666.... % chance of stopping at 1 level 1 item or 2 level
0 items, and so on. This should be done programmatically, using some math. To do
this, we will have to track the current total of item levels of approved items, and the total + the most recently rolled item
D. Also give it a chance to roll 1 level over. So if the current total is over the
target by 1, give it a small..... say 10% chance to keep the most recently rolled
total items. If this is not successful, then ignore the most recently rolled item, and roll again. If it is over by 2 or more, re-roll.
E. when the target level (which is the level +1) is reached or exceeded but accepted, return the array of items.


1.All mob levels should be +1 in order to not get infinite level 0 items.
2.Certain leveled enemies can only receive certain leveled items in order to keep the game balanced.
3.Bosses should have the highest percentage to drop the highest leveled loot.
   ex: mob lvl 1 may have 20% to drop a lvl 2 item, but boss lvl 1 has a 50% chance to drop
   lvl 2 items
4.Create loop to use percentage for leveled loot drops.
5.This percentage should allow the mobs to roll either one item of a higher level, or
multiple items of a level lower or equal to that mob's level.
6.when the item(s) has been rolled into the mob's inventory, and is !alive, then return the
array of the items.

@param level {int}: the target level of the item
@return {array} an array of objects of class Item or that inherit class Item
*/


function _makeItem(){
  var index = Utils.randMath(0, allItems.length - 1);
  var item = allItems[index];
    if (item.type instanceof Armor) {var retItem = new item.type(item.name, item.value, item.desc, item.icon,item.damageresist);}
    if (item.type instanceof Weapon) {var retItem = new item.type(item.name, item.value, item.desc, item.icon,item.damage, item.range);}
    if (item.type instanceof Potion) {var retItem = new item.type(item.name, item.value, item.desc, item.icon, item.damage);}
      else { var retItem = new item.type(item.name, item.value, item.desc, item.icon);}
  return retItem;
}


function randomItem(level){
  let max = level+1;
  let retArray = [];
  if (Math.random() <= .1) {max = level +2; }
  while (true) {
    var remains = max;
    if (retArray.length != 0) {
      for (var i = 0; i < retArray.length; i++) {
        remains - (retArray[i].level+1);
      }
      if (remains == 0) {return retArray;}
      if (Utils.randMath(0,max) > remains) {return retArray;}
    }
    let goodItem = false;
    while (!goodItem) {
      let item = this._makeItem();
      if (item.level+1 <= remains) {
        retArray.push(item);
        goodItem = true;
      }
    }
  }
}
