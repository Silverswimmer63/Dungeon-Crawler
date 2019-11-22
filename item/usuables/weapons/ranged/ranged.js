
class Ranged extends Weapon {
  constructor (name, icon, value, desc, damage, range){
  super (name, icon, value, desc, damage, range);
    this._range = range;
}
get range(){ return this._range; }
set range(range){ this._range = range; }
}
