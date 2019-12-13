/*Mythological Inventory
base class for Mythological mob
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param attackDam {int} the value of damage a Mythological does
@param type {string} the type of mob
@param hp {int} the amount of hp a nob has*/
class Mythological extends Inventory{
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon, attackDam);
  }
  text(){
    var retString = super.text();
    return retString;
  }
  /*text(){
    var retString = "This is " + this.name + "<br>";
    retString += "This monster is " + this.desc + "<br>";
    retString += "The monster has " + this.hp + " HP.<br>";
    retString += "The monster attack damage is " + this.attackDam + "<br>"
    retString += "When you kill the monster, monster drops " + this.drop + "<br>"
    return retString;
 }*/
}
