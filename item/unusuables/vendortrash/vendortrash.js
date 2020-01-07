/*VendorTrash*/
class VendorTrash extends Item {
  constructor(name, icon, desc, value, type, level){
    super(name, icon, desc, value, type, level);
  }
  toString(){
    var retStr = " you see a " + this.name + ". It is worth" + this.value + ".";
    retStr += "It can be described as: " + this.desc; + this.class + "it's a"
    return retStr
  }
}
// name: this shows the monsters' name.
// icon: the single character that shows up on the map
// desc: the description of the item
// type: this determines what kind the item is. For example, you can see if it is armor, weapon, (vendor trash?) or potions.
// value: the amount of gold pieces that you need to pay for an item.
