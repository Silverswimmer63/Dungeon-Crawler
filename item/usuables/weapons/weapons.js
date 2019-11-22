class Weapon extends Item {
  constuctor (name, type, value, desc, icon){
  super(name, type, value, desc, icon, damage,)
  this._damage = damage;
}
  get damage() { return this._damage; }
  set damage(damage) { this._damage = damage; }
}
