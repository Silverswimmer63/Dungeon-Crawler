/*Armor
is the basis of all types of armor
@param name {string} the name of the item
@param icon {string} the single character that shows up on the map
@param desc {string} the description of the item
@param value {int} the value of the item
@param damageresist {int} the value of resistance armor can take*/
class Armor extends Item {
  constructor (name, icon, desc, value, type, damageresist, level) {
    super (name, icon, desc, value, type, level);

    this._damageresist = damageresist;
  }
  // name: this shows the monsters' name.
  // icon: the single character that shows up on the map
  // desc: the description of the item
  // damageresist: The amount of protection a piece of armor can provide for the player.
  // value: the amount of gold pieces that you need to pay for an item.

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
