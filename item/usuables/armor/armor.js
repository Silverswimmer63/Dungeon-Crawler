class Armor extends Item {
  constructor (name, icon, value, desc, damageresist) {
    super (name, icon, value, desc);
    this._damageresist = damageresist;
  }
  get damageresist(){ return this._damageresist; }
  set damageresist(damageresist){ this._damageresist = damageresist; }
}
