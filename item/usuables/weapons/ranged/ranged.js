
class Ranged extends Weapon {
  constructor (name, icon, value, desc, damage, range){
  super (name, icon, value, desc, damage, range);
    this._range = range;
}
get range(){ return this._range; }
set range(range){ this._range = range; }
}
  get value(){return this._value; }
  set value(value) {this._value = value; }

  get icon(){return this._icon; }
  set icon(icon) {this._icon = icon; }

  get damage(){return this._damage; }
  set damage(damage) {this._damage = damage; }

  get desc(){return this._desc; }
  set desc(desc) {this._name = desc; }

    get range(){return this._range; }
    set range(range) {this._range = range; }

class Weapon extends Item {
  constructor(name, icon, value, damage, desc, range) {
    super(name, icon, value, desc);
    this._type = Both;
    this._name = name;
    this._icon = icon;
    this._value = value;
    this._damage = damage;
    this._desc = desc;
    this._range = range;
  }
  get name(){return this._name; }
  set name(name) {this._name = name; }

  get value(){return this._value; }
  set value(value) {this._value = value; }

  get icon(){return this._icon; }
  set icon(icon) {this._icon = icon; }

  get damage(){return this._damage; }
  set damage(damage) {this._damage = damage; }

  get desc(){return this._desc; }
  set desc(desc) {this._name = desc; }

    get range(){return this._range; }
    set range(range) {this._range = range; }
