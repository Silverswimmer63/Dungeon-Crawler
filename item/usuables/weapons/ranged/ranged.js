class Weapon extends Item {
  constructor(name, icon, value, damage, desc, range) {
    super(name, icon, value, desc);
this._name = name;
this._icon = icon;
this._value = value;
this._damage = damage;
this._desc = desc;
this._range = range;
  }
  get name(){return this._name; }
  get value(){ return this._value; }
  get icon(){ return this._icon; }
  get damage(){ return this._damage; }
  get desc(){ return this._desc; }
  get range(){ return this._range; }

  set name(name) {this._name = name; }
  set value(value){ this.value = value; }
  set icon(icon){ this._icon = icon; }
  set damage(damage){ this._damage = damage; }
  set desc(desc){ this._desc = desc; }
  set range(range){ this._range = range; }
}

class Ranged extends Weapons {
  constructor(name, icon, value, damage, desc, range) {
    super(name, icon, value, desc);
    this._name = name;
    this._value = value;
    this._icon = icon;
    this._value = value;
    this._damage = damage;
    this._desc = desc;
    this._range = range;
  }
  get type(){ return this._type; }
  get name(){ return this._name; }
  get value(){ return this._value; }
  get icon(){ return this._icon; }
  get damage(){ return this._damage; }
  get desc(){ return this._desc; }
  get range(){ return this._range; }
  set type(type){ this._type = type; }
  set value(value){ this._value = value; }
  set name(name){ this._icon = icon; }
  set damage(damage){ this._damage = damage; }
  set desc(desc){ this._desc = desc; }
  set range(range){ this._range = range; }
}
