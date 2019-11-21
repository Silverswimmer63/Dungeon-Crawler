class Armor extends Item {
  constructor(name, icon, value, desc, damageResist) {
    super(name, icon, value, desc);
    this._damageResist = damageResist;//it is a number value for resistance
  }
