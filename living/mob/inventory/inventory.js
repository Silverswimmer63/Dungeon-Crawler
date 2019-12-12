class Inventory extends Mob{
  constructor(name, type, hp, desc, icon, attackDam, drop){
    super(name, type, hp, desc, icon, attackDam);
    this._inventory = [];
  }
  get inventory() { return this._inventory; }

  /*add(item)
  puts an item in an Inventory
  @param item {obj} an object that inherist from class item
  */
  add(item){
   this._inventory.push(item);
  }

  /*drop(index)
  removes an item from an Inventory
  @param index {int} the index value of the item to be removed
  */
  drop(index){
    return this._inventory.splice(index, 1);
  }
}
