/* function randomItem() makes a random item */
function randomItem(){
  var index = Utils.randMath(0, allItems.length -1);
  var item = allItems[index];
  if(item.type instanceof Armor){var retItem = new Item.type(item.name, item.value, item.desc, item.icon, item.damageresist);}
  if(item.type instanceof Weapon){var retItem = new Item.type(item.name, item.value, item.desc, item.icon, item.damage, item.range);}
  if(item.type instanceof Potion){var retItem = new Item.type(item.name, item.value, item.desc, item.icon, item.damage);}
  else{var retItem = new Item(item.name, item.value, item.desc, item.icon)}
  return retItem;
}
/* function randomFoe() makes a random foe and checks if it is allowed to have a
   inventory and adds an item onto the inventory*/
function randomFoe() {
  var index = Utils.randMath(0, allMobs.length - 1);
  var mon = allMobs[index];
  var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
    if(retMon instanceof Inventory){retMon.add(randomItem())}
    else{var retMon = new mon.type(mon.name, mon.desc, mon.icon, retMon.attackDam);}
  return retMon;
}
/* 6 Update Inventory.get(item)
For reasons we will see soon, we will need to have this method be able to take individual items or take arrays of 1 or more items. So we must update .get(item)
it should check to see IF the parameter (item) is a single object or an array.
BECAUSE EVERYTHING IS AN OBJECT in Javascript, it should check to see if it is an array.
RESEARCH how to determine if something is an array in javascript
IF (????? item == ?????) then it is an array. If this is the case, add it to the _inventory as multiple things. The _inventory is an array as well. The inventory may or may not have items on it already. The end product should be an array that only has items on it. We have talked about a lot of ways to do this.
*/
