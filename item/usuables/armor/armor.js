class Armor extends Item {
  constructor (name, icon, desc, value, type, damageresist, level) {
    super (name, icon, desc, value, type, level);
    this._damageresist = damageresist;
  }
  get damageresist(){ return this._damageresist; }
  set damageresist(damageresist){ this._damageresist = damageresist; }

  /*text()
  retruns a user friendly line of text for output
  @return {string} text for output ot the screen
  */
  text(){
    var retString = super.text();
    return "You see some armor on the ground.<br> It is " + retString + "It has a damage resist of " + this._damageresist;
  }
}
