//Class Mythological is for the specification of the Mythological with an inventory
  // name: this shows the monsters' name.
  // icon: the single character that shows up on the map
  // desc: the description of the item
  // type: this determines what kind the item is. For example, you can see if it is armor, weapon, (vendor trash?) or potions.
  // hp: the amount of the life it has.
  // attackDam: The amount of damage monsters can attack you with.
class Mythological extends Inventory{
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon, attackDam);
  }
<<<<<<< HEAD

  /*text(){
=======
  text(){
>>>>>>> master
    var retString = "This is " + this.name + "<br>";
    retString += "This monster is " + this.desc + "<br>";
    retString += "The monster has " + this.hp + " HP.<br>";
    retString += "The monster attack damage is " + this.attackDam + "<br>"
    retString += "When you kill the monster, monster drops " + this.drop + "<br>"
    return retString;
 }

}