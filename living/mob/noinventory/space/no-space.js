class Nospace extends Noinventory {
constructor(name, type, hp, desc, icon, attackDam){
  super(name, type, hp, desc, icon, attackDam);
}
text(){
  var retString = "This monster is " + this.name + "<br>";
  retString += "This monster: " + this.desc + "<br>";
  retString += "The monster has " + this.hp + " HP.<br>";
  retString += "The monster's attack damage is " + this.attackDam + "<br>"
  return retString;
}
}
