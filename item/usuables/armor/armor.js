class Armor extends Item {
  constructor (name, icon, value, desc, damageresist, level) {
    super (name, icon, value, desc);
    this._damageresist = damageresist;
  }
  // name: this shows the monsters' name.
  // icon: the single character that shows up on the map
  // desc: the description of the item
  // damageresist: The amount of protection a piece of armor can provide for the player.
  // value: the amount of gold pieces that you need to pay for an item.

  get damageresist(){ return this._damageresist; }
  set damageresist(damageresist){ this._damageresist = damageresist; }

  /*
  text()
  returns a user friendly line of text for output to the screen
  @return {string} text for the output to the screen
  */
  text(){
    var retString = super.text();
    return "You see some armor on the ground.<br> It is " + retString + "It has a damage resist of " + this._damageresist;
  }
}
