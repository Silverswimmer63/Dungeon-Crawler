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
This item should use the unified loot variable to pick an item at random, take it's asset object, and turn that into an item of the appropriate class.
This should work almost exactly like the randomFoe() class, but some of the keys will have to be changed for basic items.
HOWEVER, for weapons, armor, and potions (And I think that is all?) there will be keys that are not present in simple items to deal with this, you will need to use instanceof in if statements.
You should have 3 if statements for those if(???? instanceof ????) and an else statement, and make the object inside of the if statement.
We will want an else statement at this time, because we will only want 1 return at the end, because that will make life easier down the line.
@param - no parameters at this time.
@return {object} this function will return an object of the correct class with the correct object information. */
function randomItem() {
  var index = Utils.randMath(0, allItems.length - 1);
  var item = allItems[index];
  if (item.type instanceof Armor) {  var retItem = new item.type(item.name, item.value, item.desc, item.icon, item.damageresist); }
  if (item.type instanceof Weapon) { var retItem = new item.type(item.name, item.value, item.desc, item.icon, item.damage, item.range); }
  if (item.type instanceof Potion) { var retItem = new item.type(item.name, item.value, item.desc, item.icon, item.damage);}
  return retItem;
}
