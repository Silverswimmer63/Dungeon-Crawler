/*Ranged Weapon
is the basis for all melee weapons
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param value {int} the value of the item
@param damage {int} the value of damage a weapon does
@param range {int} the value of the range of a weapon*/
class Ranged extends Weapon {
  constructor (name, icon, value, desc, damage, range){
  super (name, icon, value, desc, damage);
    this._range = range;
  }

  // name: this shows the monsters' name.
  // icon: the single character that shows up on the map
  // desc: the description of the item
  // range: the distance a weapon can shoot at an enemy.
  // value: the amount of gold pieces that you need to pay for an item.
  // damage: The amount of damage the potion attack can deal on an enemy.

  get range(){ return this._range; }
  set range(range){ this._range = range}

<<<<<<< HEAD
  /*text()
  retturns a user friendly line of text for output to the screen
  @return {string} text for output to the screen*/
=======

  /*
  text()
  returns a user friendly line of text for output to the screen
  @return {string} text for the output to the screen
  */
>>>>>>> Bowen
  text(){
    var retString = super.text();
    return retstring;
  }
}
