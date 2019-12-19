class Inventory extends Mob{
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon, attackDam);
    this._inventory = [];
  }
  // name: this shows the monster's name.
  // type: this determines what type of monster it is, either from space, cowboy, or mythological
  // hp: the amount of the life it has.
  // desc: the description of the monster
  // icon: the single character that shows up on the map
  // attackDam: The amount of damage monsters can attack you with.
  get inventory() { return this._inventory; }

  /*6 Update add(item)
  For reasons we will see soon, we will need to have this method be able to take individual items or take arrays of 1 or more
  items. So we must update add(item) it should check to see IF the parameter (item) is a single object or an array.
  BECAUSE EVERYTHING IS AN OBJECT in Javascript, it should check to see if it is an array.
  RESEARCH how to determine if something is an array in javascript
  IF (????? item == ?????) then it is an array. If this is the case, add it to the _inventory as multiple things.
  The _inventory is an array as well. The inventory may or may not have items on it already. The end product should be an array
  that only has items on it. We have talked about a lot of ways to do this.
  */
  /*   TEST THIS  */
  /*
  add(item)
  puts an item in an Inventory
  @param {object} an object inherit from class item
  */
  add(item){
    if (Array.isArray(item) == true) {
      for (var i = 0; i < item.length; i++) { this._inventory.push(item[i]); }
    }else{ this._inventory.push(item); }
  }

  /*
  drop(index)
  removes an item from an inventory
  @param index {int} index value for the item to be removed at
  */
  drop(index){
    return this._inventory.splice(index, 1);
    }
  }
