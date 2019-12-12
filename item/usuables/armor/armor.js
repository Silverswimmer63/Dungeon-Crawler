class Armor extends Item {
  constructor (name, icon, value, desc, damageresist) {
    super (name, icon, value, desc);
    this._damageresist = damageresist;//gives a precent that the damage is reduced by
  }
  get damageresist(){ return this._damageresist; }
  set damageresist(damageresist){ this._damageresist = damageresist; }

  /*text()
  returns a user frendly line of text for output to the screen
  @return {string} text for output to the screen
  */
  text(){
    var retString = super.text();
    return "You see some armor on the ground.<br> It is " + retString + "It has a damage resist of " + this._damageresist;
  }
}
