/*VendorTrash
trash items
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param value {number} the value of the item
@param type {string} either the name of the collection the item belings to or trash*/
class VendorTrash extends Item {
  constructor(name, icon, desc, value, type, level){
    super(name, icon, desc, value, type, level);
  }
}
