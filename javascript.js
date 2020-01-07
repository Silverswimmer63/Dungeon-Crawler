
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
