/*Ranged Weapon
is the basis for all melee weapons
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param value {int} the value of the item
@param damage {int} the value of damage a weapon does
@param range {int} the value of the range of a weapon*/
class Ranged extends Weapon {
  constructor (name, icon, desc, value, type, damage, range, level){
  super (name, icon, desc, value, type, damage, level);
    this._range = range;
  }

  get range(){ return this._range; }
  set range(range){ this._range = range}

  /*text()
  retruns a user friendly line of text for output
  @return {string} text for output ot the screen
  */


}
// name: this shows the weapons' name.
// icon: the single character that shows up on the map
// desc: the description of the item
// damageresist: The amount of protection a piece of armor can provide for the player.
// value: the amount of gold pieces that you need to pay for an item.
