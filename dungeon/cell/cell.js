/*
class Cell is an individual space on the grid
It can be opened or closed and can contain items or mobs or the player
*/
class Cell{
  constructor(){
    this._image = '#';
    this._type = "wall";// wall, hall, rooms, border: a wall, but a tag.
    this._open = false;// if the cell allows movement.
    this._inventory = [];// items in the cell.
    this._occupied = [];// for livings in the cell.
  }
  get type(){ return this._type; }
  set type(type){
    if (type == "wall" || type == "border") {
      this._type = type;
      this._open = false;
    }else if (type == "room" || type == "hall") {
      this._type = type;
      this._open = true;
    }else {
      throw new Error("Cell.type expected one of the following: wall, hall, border, or room and got " + type + ".");
    }
  }

  get image(){ return this._image; }
  set image(image){ this._image = this.image; }
  get inventory(){ return this._inventory; }
  set inventory(inventory){
    if (this.inventory == 0) {
      this._inventory = inventory;
    }else if (inventory) {
      this._inventory = [];
    }
    else {
      throw new Error("Cell.inventory can not be used when the inventory is not empty. Please use Cell.add to add to inventory.")
    }
  }
  get occupied(){ return this._occupied; }
  set occupied(occupied){
    if (!Array.isArray(occupied)) {
      occupied = [occupied];
    }
    if (occupied.length > 2) {
      throw new Error("Cell.occupied expects at most one mob and one nonmob and was given the array of length " + occupied.length + ".")
    }
    for (var i = 0; i < occupied.length; i++) {
      if (!occupied[i] instanceof Living) {
        throw new Error("Cell.occupied expects at most one mob and one nonmob and was givern " + occupied + ".")
      }
    }
    for (var i = 0; i < occupied.length; i++) {
      var mob = false;
      var nonMob = false;
      for (var i = 0; i < this._occupied.length; i++) {
          if (this.occupied[i] instanceof Mob) { mob = true; }
          if (this.occupied[i] instanceof Nonmob) { nonMob = true; }//this is setting our tracker/flag
      }
      //assumes singe item
      if (nonMob == true && occupied[i] instanceof Nonmob) {
        throw new Error("Cell.occupied - cell already had a nonmob and was given" + occupied.name + ".");
      }else if (mob == true && occupied[i] instanceof Mob) {
        throw new Error("Cell.occupied - cell already had a mob and was given" + occupied.name + ".");
      }else {
        this._occupied.push(occupied[i]);
      }
    }
  }
  get open(){
    if (this._occupied.length > 0) {
      return false;
    } else {
      return this._open;
    }
  }

  toString(){
    return this._image;
  }
}
