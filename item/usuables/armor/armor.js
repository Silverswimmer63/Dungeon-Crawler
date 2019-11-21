class Armor extends Item {
  constructor (name, icon, value, desc, damageresist) {
    super (name, icon, value, desc);
    this._damagerestst = damageresist;
  }
  get damageresist(){ return this._damagerestst; }
  set damageresist(damageresist){ this._damagerestst = damageresist; }
}
