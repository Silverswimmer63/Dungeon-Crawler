//Class Nospace is for the specification of the space without an inventory
class Nospace extends Noinventory {
constructor(name, type, hp, desc, icon, attackDam){
  super(name, type, hp, desc, icon, attackDam);
  }
}
// name: this shows the monsters' name.
// icon: the single character that shows up on the map
// desc: the description of the item
// type: this determines what kind the item is. For example, you can see if it is armor, weapon, (vendor trash?) or potions.
// hp: the amount of the life it has.
// attackDam: The amount of damage monsters can attack you with.
