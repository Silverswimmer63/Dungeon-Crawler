class Inventory extends Mob{
  constructor(name, type, hp, desc, icon, attackDam, drop){
    super(name, type, hp, desc, icon, attackDam);
    this._inventory = [];
  }
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
