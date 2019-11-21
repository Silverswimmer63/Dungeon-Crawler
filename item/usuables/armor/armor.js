class Armor extends Item {
<<<<<<< HEAD
  constructor (name, icon, value, desc, damageresist) {
    super (name, icon, value, desc);
    this._damagerestst = damageresist;
  }
  get damageresist(){ return this._damagerestst; }
  set damageresist(damageresist){ this._damagerestst = damageresist; }
}
=======
  constructor(name, icon, value, desc, damageResist) {
    super(name, icon, value, desc);
    this._damageResist = damageResist;//it is a number value for resistance
  }
>>>>>>> e6efb17500d01b49be14c151da95cc9c3e492b32
