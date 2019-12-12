
class Ranged extends Weapon {
  constructor (name, icon, value, desc, damage, range){
  super (name, icon, value, desc, damage);
    this._range = range;
  }
  get range(){ return this._range; }
  set range(range){ this._range = range}

  /*text()
  retturns a user friendly line of text for output to the screen
  @return {string} text for output to the screen*/
  text(){
    var retString = super.text();
    return retstring;
  }
}
