class Mythological extends Inventory{
  constructor(name, type, hp, desc, icon, attackDam, drop){
    super(name, type, hp, desc, icon, attackDam, drop);
  }
  text(){
    var retString = "This is " + this.name + "<br>";
    retString += "This monster is " + this.desc + "<br>";
    retString += "The monster has " + this.hp + " HP.<br>";
    retString += "The monster attack damage is " + this.attackDam + "<br>"
    retString += "When you kill the monster, monster drops " + this.drop + "<br>"
    return retString;
 }
}
