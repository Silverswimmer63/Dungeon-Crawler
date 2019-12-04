class Inventory extends Mob{
  constructor(name, type, hp, desc, icon, attackDam, drop){
    super(name, type, hp, desc, icon, attackDam);

  this._drop = drop

  }
  get drop() { return this._drop }
  set drop(drop) { this._drop = drop }
}
