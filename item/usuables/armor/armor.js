class Armor extends Item {
  constructor(name, icon, value, desc, damageResist) {
    super(name, icon, value, desc, damageResist);
    this._name = name;// the this keywodr means thet it is something the class owns
    this._icon = icon;
    this._value = value;
    this._desc = desc;
    this._damageResist = damageResist;//it is a number value for resistance
  }
