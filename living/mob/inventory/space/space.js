class Space extends Inventory{
  constructor(name, type, hp, desc, icon, attackDam, drop){
    super(name, type, hp, desc, icon, attackDam, drop);
  }
  text(){
    var retString = "This is " + this.name + "<br>";
    retString += "This guy is " + this.desc + "<br>";
    retString += "He has " + this.hp + " HP.<br>";
    retString += "His attack damage is " + this.attackDam + "<br>"
    retString += "When you kill him, he drops " + this.drop + "<br>"
    return retString;
  }
}
