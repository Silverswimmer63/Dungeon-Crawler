class Body extends Armor {
  constructor (name, icon, value, desc, damageresist){
  super (name, icon, value, desc, damageresist);
  }
  
toString(){
  var retStr = " you see a " + this.name + ". It is worth" + this.value + ".";
  retStr += "It can be described as: " + this.desc; + this.class + "it's a";
  return retStr;
}

}
