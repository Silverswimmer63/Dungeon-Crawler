class Head extends Armor {
  constructor (name, type, value, icon, desc, damageresist, level){
    super (name, type, value, icon, desc, damageresist, level);
  }
toString(){
  var retStr = " you see a " + this.name + ". It is worth" + this.value + ".";
  retStr += "It can be described as: " + this.desc; + this.class + "it's a";
  return retStr;
}
}
