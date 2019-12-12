class Inventory extends Mob{
  constructor(name, type, hp, desc, icon, attackDam, drop){
    super(name, type, hp, desc, icon, attackDam);

    this._inventory = [];
  }
  get inventory() { return this._inventory; }

  /*add(item)
  puts item in an inventory
  @param item {object} an object that inherits class item*/
  add(item){
   this._inventory.push(item);
  }

  /*drop(index)
  removes an item from the inventory
  @param index {int} index value of the item to be removed*/
  drop(index){
    return this._inventory.splice(index, 1);
  }


 this._inventory = [];

get inventory() { return this._inventory; }

 add(item){
   this._inventory
   inventory.push(item)
 }


}
