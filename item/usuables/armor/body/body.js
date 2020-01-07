/*Body Armor
is armor the player or mobs can wear
@param name {string} the name of the item
@param icon {string} the single character that shows up on the map
@param desc {string} the description of the item
@param value {int} the value of the item
@param damageresist {int} the value of resistance armor can take*/
class Body extends Armor {
<<<<<<< HEAD
  constructor (name, icon, value, desc, damageresist){
    super (name, icon, value, desc, damageresist);
  }
toString(){
  var retStr = " you see a " + this.name + ". It is worth" + this.value + ".";
  retStr += "It can be described as: " + this.desc; + this.class + "it's a";
  return retStr;
}

=======
  constructor (name, icon, desc, value, type, damageresist, level){
  super (name, icon, desc, value, type, damageresist, level);
  }
>>>>>>> master
}
