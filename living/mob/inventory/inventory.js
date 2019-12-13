/*Inventory Mob
base class for inventory of mobs
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param attackDam {int} the value of damage a mob does
@param type {string} the type of mob
@param hp {int} the amount of hp a nob has
@param drop {obj} a possible drop from the mob*/
class Inventory extends Mob{
  constructor(name, type, hp, desc, icon, attackDam, drop){
    super(name, type, hp, desc, icon, attackDam);
    this._inventory = [];
  }
  get inventory() { return this._inventory; }

  add(item){
   this._inventory.push(item);
  }
  drop(index){
    return this._inventory.splice(index, 1);
  }
}
