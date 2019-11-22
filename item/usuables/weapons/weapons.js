class Weapon extends Item {
  constuctor (name, icon, desc, value, type, damage){
  super(icon, value, desc, value, type)
  this._damage = damage;
}
get damage() { return this._damage; }
set damage(damage) { this._damage = damage; }
}
