class Nospace extends Noinventory {
constructor(name, type, hp, desc, icon, attackDam){
  super(name, type, hp, desc, icon, attackDam);
}
}
text(){
  var retString = "This is " + this.name + "<br>";
  retString += "This guy is " + this.desc + "<br>";
  retString += "He has " + this.hp + " HP.<br>";
  retString += "His attack damage is " + this.attackDam + "<br>"
  return retString;
}
}
