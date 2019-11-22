
class Ranged extends Weapon {
<<<<<<< HEAD
  constructor(name, icon, value, damage, desc, range) {
    super(name, icon, value, damage, desc);
=======
  constructor (name, icon, value, desc, damage, range){
  super (name, icon, value, desc, damage, range;
>>>>>>> 72bc656bd6029d4378f1e111333e6f5432eb040a
    this._range = range;
}
get range(){ return this._range; }
set range(range){ this._range = range; }
}
