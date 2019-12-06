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
