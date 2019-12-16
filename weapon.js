/*
This is not part of the actual games
This is just an example
*/
class Weapon extends Item {
  constructor(name, icon, value, damage, desc) {
    super(name, icon, value, desc)
    this._damage = damage;
  }
  get damage(){
    return this._damage;
  }
  set damage(damage){
    this._damage = damage;
  }
}
