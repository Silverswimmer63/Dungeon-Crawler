
class Ranged extends Weapon {
  constructor(name, icon, value, damage, desc, range) {
    super(name, icon, value, damage, desc);
    this._range = range;
  }
  get range(){ return this._range; }
  set range(range){ this._range = range; }
}
