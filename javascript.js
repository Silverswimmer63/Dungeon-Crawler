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

function randomItem(){
  var index = Utils.randMath(0, allItems.length - 1);
  var item = allItems[index];
    if (item.type instanceof Armor) {var retItem = new item.type(item.name, item.value, item.desc, item.icon,item.damageresist);}
    if (item.type instanceof Weapon) {var retItem = new item.type(item.name, item.value, item.desc, item.icon,item.damage, item.range);}
    if (item.type instanceof Potion) {var retItem = new item.type(item.name, item.value, item.desc, item.icon, item.damage);}
      else { var retItem = new item.type(item.name, item.value, item.desc, item.icon);}
  return retItem;
}
