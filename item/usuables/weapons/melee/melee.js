/*Melee Weapon
is the basis for all melee weapons
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param value {int} the value of the item
@param damage {int} the value of damage a weapon does*/
class Melee extends Weapon {
  constructor (name, icon, desc, value, type, damage, level){
  super (name, icon, desc, value, type, damage, level);
  }
  // name: this shows the weapons' name.
  // icon: the single character that shows up on the map
  // desc: the description of the item
  // damageresist: The amount of protection a piece of armor can provide for the player.
  // value: the amount of gold pieces that you need to pay for an item.


  /*text()
  retruns a user friendly line of text for output
  @return {string} text for output ot the screen
  */
  text(){
    var retString = super.text()
    return retString + " Is a weapon.";
  }
}
