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
B. IF it does then once you have made the monster (but before you return it), use randomItem() to make an item.
Then use the correct method from class Inventory to get that item for the inventory. */
function randomFoe() {
  var index = Utils.randMath(0, allMobs.length - 1);
  var mon = allMobs[index];
  var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
  if (retMon instanceof Inventory) {
    retMon.add(randomItem())
  } else {
    var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
  }
  return retMon;
}

/* 4 Make the function randomItem() in javascript.js
We have a randomFoe() function, randomItem() will look a lot like randomFoe() but will be for items.
This item should use the unified loot variable to pick an item at random, take it's asset object, and turn that into an item of the appropriate class.
This should work almost exactly like the randomFoe() class, but some of the keys will have to be changed for basic items.
HOWEVER, for weapons, armor, and potions (And I think that is all?)
there will be keys that are not present in simple items to deal with this, you will need to use instanceof in if statements.
You should have 3 if statements for those if(???? instanceof ????) and an else statement, and make the object inside of the if statement.
 We will want an else statement at this time, because we will only want 1 return at the end, because that will make life easier down the line.
@param - no parameters at this time.
@return {object} this function will return an object of the correct class with the correct object information. */

function randomItem() {
  var index = Utils.randMath(0, allItems.length - 1);
  var stuff = allItems[index];
  if (stuff.type instanceof Melee) {
    var retStuff = new stuff.type(stuff.name, stuff.desc, stuff.icon, stuff.value, this.type, this.damage)
  } if (stuff.type instanceof Ranged) {
      var retStuff = new stuff.type(stuff.name, stuff.desc, stuff.icon, stuff.value, this.type, this.damage, this.range)
  } if (stuff.type instanceof Armor) {
    var retStuff = new stuff.type(stuff.name, stuff.desc, stuff.icon, stuff.value, stuff.damageresist)
  } if (stuff.type instanceof Potion) {
    var retStuff = new stuff.type(stuff.name, stuff.desc, stuff.icon, stuff.value, stuff.type, stuff.damage)
  }else {
    var retStuff = new stuff.type(stuff.name, stuff.desc, stuff.icon, stuff.value, this.type)
  }
  return retStuff
}
