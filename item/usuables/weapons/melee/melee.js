//Class Melee makes the specifications for the Melee Weapons
class Melee extends Weapon {
  constructor (name, icon, value, desc, damage){
  super (name, icon, value, desc, damage);
  }
  text(){
    var retString = super.text();
    return retstring + " Is a weapon.";
  }
  toString(){
  var retStr = " you see a " + this.name + ". It is worth" + this.value + ".";
  retStr += "It can be described as: " + this.desc; + this.class + "it's a";
  return retStr;
}

}
