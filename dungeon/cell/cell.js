/*class Cell is a individual space on the grid
it can be open or closed and it can contain items
or mobs or the player
*/
class Cell{
  constructor(){
    this._image = "#";
    this._type = "wall";//wall, hall, rooms, border: a wall but a tag
    this._open = false;//if the cell allows movement
    this._inventory = [];//item is the cell
    this._occupied = null;// fro living in the cell
  }
  get image(){return this._image;}
  get type(){return this._image;}
  get open(){
    if (this._occupied.length > 0) {
     return false;
    }else {
      return ths._open;
    }
  }
  /*the setter for type should do the following:
in addition to setting the type - it should do the following-
If the type is being set to wall or border it should set _open to false
if the type is being set to room or hall it should set _open to true
If the type is ANYTHING else it should toss its own error "Cell.type
expected one of the following: wall, hall, border, or room and got" + type */
/*add a setter for inventory that does the following:
if inventory is empty, allows you to set the inventory
if inventory is not empty then have the following error:
"Cell.inventory can not be used when the inventory is not empty. Please use Cell.add to add to inventory."*/
set image(image){this._image = this.image}
  set type(type){
    if (type == "wall"|| type == "border") {
      this._type = type;
      this._open = false;
    }else  if (type == "room"|| type == "hall") {
      this._type = type;
      this._open = true;
    }else {
      throw new Error ("Cell.type expected one of the following: wall, hall, border, or room and got" + type + ".");
    }
  }
  set inventory(inventory){
    if (this.inventory == 0) {
      this._inventory =inventory;
    }else if (inventory) {
      this._inventory = [];
    }else {
      throw new Error("Cell.inventory can not be used when the inventory is not empty. Please use Cell.add to add to inventory.");
    }
  }
  toString(){
    return this._image;
  }
}
