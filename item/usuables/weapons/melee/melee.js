class Melee extends Weapon {
  constructor (name, icon, value, desc, damage, level){
  super (name, icon, value, desc, damage);
  }

  // name: this shows the monsters' name.
  // icon: the single character that shows up on the map
  // desc: the description of the item
  // value: the amount of gold pieces that you need to pay for an item.
  // damage: The amount of damage the potion attack can deal on an enemy.

  /*
  text()
  returns a user friendly line of text for output to the screen
  @return {string} text for the output to the screen
  */
  text(){
    var retString = super.text();
    return retstring + " Is a weapon.";
  }
}
