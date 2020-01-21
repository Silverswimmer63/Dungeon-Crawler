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
  set occupied(occupied){ this._ocHandler(occupied, "Cell.occupied") }
  get open(){
    if (this._occupied.length > 0) {
      return false;
    } else {
      return this._open;
    }
  }

/*
_ocHandler(occupied, call="Cell._ocHandler")
This will do all of the interior work for set occupied.
@param {mixed} thing an object or array of object
@param {string} call where to toss the error messages from.
*/
    _ocHandler(occupied, call="Cell._ocHandler"){
    if (!Array.isArray(occupied)) {
      occupied = [occupied];
    }
    if (occupied.length > 2) {
      throw new Error(call + " expects at most one mob and one nonmob and was given the array of length " + occupied.length + ".")
    }
    for (var i = 0; i < occupied.length; i++) {
      if (!occupied[i] instanceof Living) {
        throw new Error(call + " expects at most one mob and one nonmob and was given " + occupied + ".")
      }
    }
    if (occupied.length == 2) {
      if ((occupied[0] instanceof Mob) && (occupied[1] instanceof Mob)) {
        throw new Error(call + " was sent 2 " + "Mob" + "s and can only take 1.")
      }
      if ((occupied[0] instanceof Nonmob) && (occupied[1] instanceof Nonmob)) {
        throw new Error(call + " was sent 2 " + "Nonmob" + "s and can only take 1.")
      }
    }
    for (var i = 0; i < occupied.length; i++) {
      var mob = false;
      var nonMob = false;
      for (var j = 0; j < this._occupied.length; j++) {
          if (this.occupied[j] instanceof Mob) { mob = true; }
          if (this.occupied[j] instanceof Nonmob) { nonMob = true; }//this is setting our tracker/flag
        }
      }
      //assumes singe item
      if ((nonMob == true) && (occupied[i] instanceof Nonmob)) {
        throw new Error(call + " - cell already had a nonmob and was given " + occupied[i].name + ".");
      }else if ((mob == true) && (occupied[i] instanceof Mob)) {
        throw new Error(call + " - cell already had a mob and was given " + occupied[i].name + ".");
      }else {
        this._occupied.push(occupied[i]);
      }
    }

// external methods
/*add(thing)
add will be used to update the cell when we do update cycles for the game.
this will be used to take care of monsters moving in and out of the cell,
and loot drops or discards being added to the cell. With make sure that the
param thing is one of the 3 appropriate classes.
@param thing {mixed}: the thing or things to be added to the cell.
*/
add(thing){
  //determine if it is an object or an array
  var bad = true;
  if (thing instanceof Item) {
    thing = [thing];
    bad = false;
  }
  if (thing instanceof Living) {
    this._ocHandler(thing, "Cell.add");
    bad = false;
  }
  if (Array.isArray(thing)) {
    for (var i = 0; i < thing.length; i++) {
      if (!(thing[i] instanceof Item)) {
        //if it is an array check to see it all are living or all are objects
        //if anything isn't an item, it should fit (throw an error)
        throw new Error("Cell.add attempted to add non-item(s) and item(s) at the same time");
      }
    }
    bad = false;
    this._inventory = this._inventory.concat(thing);
  }
if (bad == true) {
  throw new Error("Cell.add received illegal item");
}
  //track which one it is.
  //send to correct function
}
// internal methods
// toString and other overwrites
    toString(){
        return this._image;
      }
    }
