
class Ranged extends Weapon {
  constructor (name, type, value, desc, damage, icon, range, level){
  super (name, type, value, desc, damage, icon, level);
    this._range = range;
  }
  get range(){ return this._range; }
  set range(range){ this._range = range}

  /* text()
  returns a user friendly line of text output to the screen
  @return {string} text for output to the screen
  */

  text(){
    var retString = super.text();
    return retstring;
  }
}
