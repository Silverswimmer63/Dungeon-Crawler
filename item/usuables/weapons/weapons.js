<<<<<<< HEAD
class Weapon extends Item{
  constructor(name, icon, desc, value, type, damage){
    super(name, icon, desc, value, type)
    this._damage = damage;
  }
get damage() { return this._damage; }
set damage(damage) { this._damage = damage; }
=======
class Weapon extends Item {
  constuctor (name, type, value, desc, icon){
  super(name, type, value, desc, icon, damage,)
  this._damage = damage;
}
  get damage() { return this._damage; }
  set damage(damage) { this._damage = damage; }
>>>>>>> 72bc656bd6029d4378f1e111333e6f5432eb040a
}
