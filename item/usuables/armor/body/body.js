/*Body Armor
is armor the player or mobs can wear
@param name {string} the name of the item
@param icon {string} the single character that shows up on the map
@param desc {string} the description of the item
@param value {int} the value of the item
@param damageresist {int} the value of resistance armor can take*/
class Body extends Armor {
  constructor (name, icon, value, desc, damageresist){
  super (name, icon, value, desc, damageresist);
  }
}
