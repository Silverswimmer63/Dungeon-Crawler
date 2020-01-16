/*class cell is an individual space on the grid
it can be open or closed and it can contain items
or mobs or the player
*/
class Cell {
  constructor(){
    this._image = "#";
    this._type = "wall";//wall, hall, rooms, border: a wall but a tag
    this._open = false;//if the cell allows movement
    this._inventory = [];//items in the cell
    this._occupied = [];//for living in the cell
  }

  get image(){ return this._image; }
  set image(image){ this._image = this.image; }

  get open(){
    if (this._occupied.length > 0) {
      return false;
    }else {
      return this.open;
    }
  }

  get inventory(){ return this._inventory; }
  set inventory(inventory){
    if (this.inventory == 0) {
      this._inventory = inventory;
    }else if (inventory) {
      this._inventory = [];
    }else {
      throw new Error("Cell.inventory can not be used when the inventory is not empty. Please use Cell.add to add to inventory.");
    }
  }

  /*the setter for type should do the following:
  in addition to setting the type - it should do the following-
  If the type is being set to wall or border it should set _open to false
  if the type is being set to room or hall it should set _open to false
  If the type is ANYTHING else it should toss its own error "Cell.type expected one of the following: wall, hall, border, or room and got" + type
  */
  get type(){ return this._type; }
  set type(type){
    if (type == "wall" || type == "border") {
      this._open = false;
      this._type = type;
    }else if (type == "room" || type == "hall") {
      this.open = true;
      this._type = type;
    }else {
      throw new Error("Cell.type expected one of the following: wall, hall, border, or room and got" + type + ".");
    }
  }

  /*for the occupied setter-
  if there is a nonmob in the cell do not allow another nonmob
  if there is a mob in the cell do not allow annother mob
  if we try to add things we cant, throw an error that reads
  "Cell.occupied - cell already had a mob/nonmob and was given" + thing
  */
  get occupied(){ return this._occupied; }
  set occupied(occupied){
    for (var i = 0; i < occupied.length; i++) {
      if (!(occupied[i] instanceof Living)) { throw new Error("Cell.occupied expects at most one mob and one nonMob and was given " + occupied[i] + ".")}
    }
    if (!Array.isArray(occupied)) { occupied = [occupied]; }
    if (occupied > 2){ throw new Error("Cell.occupied expects at most one mob and one nonMob and was given the array of length " + occupied.length); }
    for (var i = 0; i < occupied.length; i++) {
      var mob = false;
      var nonMob = false;
      for (var i = 0; i < this.occupied.length; i++) {
        if (this._occupied[i] instanceof Mob) { mob = true; }//this is setting out trackers
        if (this._occupied[i] instanceof Nonmob) { nonMob = true }
      }
      //asumes single item
      if (nonMob == true && occupied[i] instanceof Nonmob) {
        throw new Error(  "Cell.occupied - cell already had a nonmob and was given " + occupied.name);
      }else if (mob == true && occupied[i] instanceof Mob) {
        throw new Error(  "Cell.occupied - cell already had a mob and was given " + occupied.name);
      }else {
        this._occupied.push(occupied[i]);
      }
    }
  }


  toString(){
    return this._image;
  }
}
