/*Melee Weapon
is the basis for all melee weapons
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param value {int} the value of the item
@param damage {int} the value of damage a weapon does*/
class Melee extends Weapon {
  constructor (name, icon, value, desc, damage, level){
  super (name, icon, value, desc, damage, level);
  }
<<<<<<< HEAD

  /*text()
  returns a user frendly line of text for output to the screen
  @return {string} text for output to the screen
  */
=======
    /*text()
  retturns a user friendly line of text for output to the screen
  @return {string} text for output to the screen*/
>>>>>>> master
  text(){
    var retString = super.text();
    return retstring + " Is a weapon.";
  }
  toString(){
<<<<<<< HEAD
    var retStr = " you see a " + this.name + ". It is worth" + this.value + ".";
    retStr += "It can be described as: " + this.desc; + this.class + "it's a"
    return retStr
  }
=======
  var retStr = " you see a " + this.name + ". It is worth" + this.value + ".";
  retStr += "It can be described as: " + this.desc; + this.class + "it's a";
  return retStr;
>>>>>>> master
}
}