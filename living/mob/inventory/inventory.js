class Inventory extends Mob{
  constructor(name, type, hp, desc, icon, attackDam, drop){
    super(name, type, hp, desc, icon, attackDam);

 this._inventory = [];

get inventory() { return this._inventory; }

 addInventory(item){
   this._inventory
   inventory.push(item)
 }

}
