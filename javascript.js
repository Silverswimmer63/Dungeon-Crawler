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

/* 8 Update randomFoe() so that it take a level. It should work exactly like randomItem() for this purpose.

@param level {int}: the target level of the item
@return {array} an array of objects of class Mob or that inherit class Mob
*/
function randomFoe(level) {
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

/* 7 Update randomItem()
randomItem() will now take a parameter and return an array. This will take some explaining, so please read the rational below fully before the instructions.
What we are going to do in randomItem() is make it check the level that has been assigned to it, and then try to fill up the inventory with that combined level worth of stuff,
+ or - a little bit. We will want to program this ideally so that we often get worse loot, and only rarely get better loot.
We will also want to cap off how much better the loot can be. The worse loot can "add up" to be the same level as the better loot or not, depending on the role of the random dye.

@param level {int}: the target level of the item
@return {array} an array of objects of class Item or that inherit class Item
*/

function randomItem(level) {
  var max = level + 1;
  var retArr = [];
  if (Math.random() <= .2){max = level + 2}
  var rem = max;
  while (true) {
    if (retArr.length != 0) {
      var item = makeItem();
      for (var i = 0; i < retArr.length; i++) {
        rem -= (retArr[i].level + 1);
      }
      if (rem == 0) {return retArr}
      if (Utils.randomMath(0,max) > rem) {return retArr}
    }
    var goodItem = false;
    while (goodItem = false) {
      if (item.level + 1 <= rem) {
        retArr.push(item);
        goodItem = true;
      }
    }
  }
}

function _makeItem(){
   var index = Utils.randMath(0, allItems.length - 1);
   var item = allItems[index];
   if (item.type instanceof Armor) { var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damageresist, item.level) }//inherits off; Armor will check all o them. INHERITANCE
   if (item.type instanceof Ranged) { var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damage, item.range, item.level) }
   if (item.type instanceof Melee) { var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damage, item.level) }
   if (item.type instanceof Potion) { var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damage, item.level) }
   else{ var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.level) }
   return retItem;
}
