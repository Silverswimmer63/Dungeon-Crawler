/*Melee Weapon
is the basis for all melee weapons
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param value {int} the value of the item
@param damage {int} the value of damage a weapon does*/
class Melee extends Weapon {
  constructor (name, icon, value, desc, damage){
  super (name, icon, value, desc, damage);
  }

  /*text()
  retturns a user friendly line of text for output to the screen
  @return {string} text for output to the screen*/
  text(){
    var retString = super.text();
    return retstring + " Is a weapon.";
  }
}
