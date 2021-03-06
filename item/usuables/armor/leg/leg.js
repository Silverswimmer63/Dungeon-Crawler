/*Leg Armor
is armor the player or mobs can wear
@param name {string} the name of the item
@param icon {string} the single character that shows up on the map
@param desc {string} the description of the item
@param value {int} the value of the item
@param damageresist {int} the value of resistance armor can take*/
class Leg extends Armor {
  constructor (name, icon, desc, value, type, damageresist, level){
  super (name, icon, desc, value, type, damageresist, level);
}

}
  // name: this shows the monsters' name.
  // icon: the single character that shows up on the map
  // desc: the description of the item
  // damageresist: The amount of protection a piece of armor can provide for the player.
  // value: the amount of gold pieces that you need to pay for an item.
