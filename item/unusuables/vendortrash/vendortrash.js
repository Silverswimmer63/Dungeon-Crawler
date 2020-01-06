/*VendorTrash*/
class VendorTrash extends Item {
  constructor(name, type, value, desc, icon, level){
    super(name, type, value, desc, icon, level);
  }
}
// name: this shows the monsters' name.
// icon: the single character that shows up on the map
// desc: the description of the item
// type: this determines what kind the item is. For example, you can see if it is armor, weapon, (vendor trash?) or potions.
// value: the amount of gold pieces that you need to pay for an item.
