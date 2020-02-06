
class Ranged extends Weapon {
  constructor (name, type, value, desc, icon, damage, range, level){
  super (name, type, value, desc, icon, damage, level);
    this._range = range;
  }
  get range(){ return this._range; }
  set range(range){ this._range = range}

  /*text()
  retruns a user friendly line of text for output
  @return {string} text for output ot the screen
  */
  text(){
    var retString = super.text();
    return retstring;
  }
}
