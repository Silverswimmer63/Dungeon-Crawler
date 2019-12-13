class Inventory extends Mob{
  constructor(name, type, hp, desc, icon, attackDam, drop){
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
  /*
  add(item)
  puts an item in an Inventory
  @param {object} an object inherit from class item
  */
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

  /*
  drop(index)
  removes an item from an inventory
  @param index {int} index value for the item to be removed at
  */
  drop(index){
    return this._inventory.splice(index, 1);
  }
}
