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
/*
*** THESE NOTES WILL BE TRUE FOR THIS AND ALL FOLLOWING CODING ***
Because we will be working with many forks, and it is the goal that all function the same (although they may be programmed differently) be sure that all the following is true of everything you code -
1. All function names are as I define them.
2. All function returns are as I define them.
3. As 1 and 2 above, but for classes - getters, setters, class names, methods, properties, the whole works.
4. As 1 above, but for any variables outside of classes or functions.

YOU CAN make helper functions for things you might do often. If you do so, you should, where possible, put them in the Utils static class in utils.js and let me know. This might be a good idea sometimes.

Following that, we are going to be working on the code in the following ways:


*** THESE FIRST FEW STEPS WILL BE DONE AS A GROUP ON THE MAIN BRANCH ***

WE ARE IDEALLY GOING TO BE DONE BY THE END OF 2ND PERIOD WITH THIS PORTION  */

/* 1. Fix the constants' names. they should be all 100% caps, with underscores between words. You can tell some of them are wrong because they show up the wrong color in the editor. ONLY REPLACE THE SMALL LETTERS WITH CAPS. Any other changes and peoples code will start not working right. */

/* 2. Clean up some of the asset names. For example, in itemAssets, it is the case that the head and legs say things like "Iron Helmet" and "Iron Legs" whereas the body only says things like "iron" those should say something like "Iron Breastplate" - we should have consistent name details and capitalization. */

/* 3. For right now, our dungeon is going to have 3 levels. We will be adding in a mechanism later in our process for the first part of this week so we pick things that are level appropriate for the dungeon. In order to make that work when we implement it, we will need to add a new key to every asset (both monsters & items) in the game - level. The level should range from 0 - 3. Make the weakest things and worst items level: 0 and the strongest things and best items level: 3. This way. later on, we can use some maths to have most of the dungeon's monsters and items at the same level as the dungeon, but have some stuff that is weaker (lower level) and the rare monster a higher level. Pretty much how this will work, is that we'll set up each level with a point total in monsters and stuff, and the level of the item will modify the points. */

/*  **** THESE STEPS WILL BE DONE INDIVIDUALLY ****  */

/* 4 Make the function randomItem() in javascript.js
We have a randomFoe() function, randomItem() will look a lot like randomFoe() but will be for items.
This item should use the unified loot variable to pick an item at random, take it's asset object, and
turn that into an item of the appropriate class. This should work almost exactly like the randomFoe()
class, but some of the keys will have to be changed for basic items. HOWEVER, for weapons, armor, and
potions (And I think that is all?) there will be keys that are not present in simple items to deal
with this, you will need to use instanceof in if statements. You should have 3 if statements for those
if(???? instanceof ????) and an else statement, and make the object inside of the if statement. We will
want an else statement at this time, because we will only want 1 return at the end, because that will
make life easier down the line.
@param - no parameters at this time.
@return {object} this function will return an object of the correct class with the correct object information. */
/*   TEST THIS  */
/*
function randomFoe() {
var index = Utils.randMath(0, allMobs.length - 1);
var mon = allMobs[index];
var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
return retMon;
}
*/
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

/* 5 Update randomFoe() so that monsters with inventories have loot
A. use instanceof to see IF the said monster's class inherits the inventory class.
B. IF it does then once you have made the monster (but before you return it), use randomItem() to make an item.<<---do this next
Then use the correct method from class Inventory to get that item for the inventory. */
/*   TEST THIS  */

  function randomFoe() {
      var index = Utils.randMath(0, allMobs.length - 1);
      var mon = allMobs[index];
      if (mon.type instanceof inventory) { var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam, mon.drop); }
      else{ var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam); }
        return retMon;
