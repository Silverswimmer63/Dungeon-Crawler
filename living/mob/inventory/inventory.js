//Class Inventory is for mobs that have an inventory
class Inventory extends Mob{
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon, attackDam);
    this._inventory = [];
  }
  // name: this shows the monsters' name.
  // icon: the single character that shows up on the map
  // desc: the description of the item
  // type: this determines what kind the item is. For example, you can see if it is armor, weapon, (vendor trash?) or potions.
  // hp: the amount of the life it has.
  // attackDam: The amount of damage monsters can attack you with.
  get inventory() { return this._inventory; }
  /*add(item)
  puts item in an inventory
  @param item {object} an object that inherits class item*/
  add(item){
    if (Array.isArray(item) == true) {
      for (var i = 0; i < item.length; i++) {
       this._inventory.push(item[i]);
    }
  }
  else{
    this._inventory.push(item);
  }
  }

  /*add(item)
  puts a item in a Inventory
  @param item {object an object it inherents from class item
  */

  /* 6 Update Inventory.get(item)
For reasons we will see soon, we will need to have this method be able to take individual items or take arrays of 1 or more items. So we must update .get(item)
it should check to see IF the parameter (item) is a single object or an array.
BECAUSE EVERYTHING IS AN OBJECT in Javascript, it should check to see if it is an array.
RESEARCH how to determine if something is an array in javascript
IF (????? item == ?????) then it is an array. If this is the case, add it to
the _inventory as multiple things. The _inventory is an array as well. The inventory
 may or may not have items on it already. The end product should be an array
 that only has items on it. We have talked about a lot of ways to do this.
*/
  add(item){
    if (Array.isArray(item)) {
      this._inventory.push(item);
    }
    else{
      this._inventory.push(item);
    }
  }

  /*drop(index)
  removes item for Inventory
  @param index {int} indx value of the item to be removed
  */
  drop(index){
    return this._inventory.splice(index, 1);
  }
}
