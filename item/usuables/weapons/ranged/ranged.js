/*Ranged Weapon
is the basis for all melee weapons
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param value {int} the value of the item
@param damage {int} the value of damage a weapon does
@param range {int} the value of the range of a weapon*/
class Ranged extends Weapon {
  constructor (name, icon, value, desc, damage, level, range){
  super (name, icon, value, desc, damage, level);
    this._range = range;//Creates a range value that is how far the weapon can shoot
  }

  get range(){ return this._range; }
  set range(range){ this._range = range}

  /*text()
<<<<<<< HEAD
  returns a user frendly line of text for output to the screen
  @return {string} text for output to the screen
  */
  text(){
    var retString = super.text();
    return retstring;
  }
  toString(){
    var retStr = " you see a " + this.name + ". It is worth" + this.value + ".";
    retStr += "It can be described as: " + this.desc; + this.class + "it's a"
    return retStr
=======
  retturns a user friendly line of text for output to the screen
  @return {string} text for output to the screen*/
  text(){
    var retString = super.text();
    return retstring;
>>>>>>> master
  }
  toString(){
  var retStr = " you see a " + this.name + ". It is worth" + this.value + ".";
  retStr += "It can be described as: " + this.desc; + this.class + "it's a";
  return retStr;
}

}
