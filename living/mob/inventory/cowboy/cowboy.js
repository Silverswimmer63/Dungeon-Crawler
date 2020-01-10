//Class Cowboy is for the specification of the cowboys with an inventory
class Cowboy extends Inventory{
  constructor(name, type, hp, desc, icon, attackDam,level){
    super(name, type, hp, desc, icon, attackDam,level);
  }
}
// name: this shows the monsters' name.
// icon: the single character that shows up on the map
// desc: the description of the item
// type: this determines what kind the item is. For example, you can see if it is armor, weapon, (vendor trash?) or potions.
// hp: the amount of the life it has.
// attackDam: The amount of damage monsters can attack you with.
