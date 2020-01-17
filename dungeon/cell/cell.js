/*class Cell is a individual space on the grid.
It can be open or closed and it can contain items
or mobs or the player.
*/
class Cell {
  constructor(){
    this._image = "#";
    this._type = "wall"//wall, hall, rooms, border: a wall but a tag
    this._open = false;// if the cell allows movement
    this._inventory = [];//items in the cell
    this._occupied = [];//for livings in the cell
  }
  //getters and setters
  get image(){return this._image}
  set image(image){this._image = this.image}

  get type(){return this._type}
  set type(type){
    if (type == "wall" || type == "border") {
      this._open = false;
      this._type = type;
    }else if (type == "room" || type == "hall") {
      this._open = true;
      this._type = type;
    }else {
      throw new Error("Cell.type expected one of the following: wall, hall, border, or room and got " + type + ".");
    }
  }

  get open(){
    if (this._occupied.length>0) {
      return false;
    }else {
      return this._open;
    }
  }

  get inventory(){return this._inventory}
  set inventory(inventory){
    if (inventory.length == 0) {
      this._inventory = inventory;
    }else if (inventory) {
      this._inventory = [];
    }else {
      throw new Error("Cell.inventory can not be used when the inventory is not empty. Please use Cell.add to add to inventory.");
    }
  }

  get occupied(){return this._occupied}
  set occupied(occupied){ this._ocHandler(occupied, "Cell.occupied") }
  //external methods
  /*add(thing)
  add will be used to update the cell when we do update cycles for the game
  this will be used to take care of monsters moving in and out of the cell,
  and loot drops or discards being added to the cell. wil make sure that the
  param thing is one of the 3 appropriate classes.
  @param thing {mixed}: the thing or things to be added to the cell
  */
  add(thing){
    // determines if it is an object or array
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
          // if its an array, check to see if all are living or all are objects
          // if anything is not an item, throw an error
        throw new Error("Cell.add atempted to add nonItem(s) and item(s) at the same time");
        }
      }
      bad = false;
      this._inventory = this._inventory.concat(thing);
    }
    if (bad == true) { throw new Error("Cell.add recieved illegal item"); }
    // track which one it is
    //send to correct function
  }
  //Internal methods
  /*_ocHandler(occupied, call="Cell._ocHandler")
  this will do all the interiar work for set occupied
  @param {mixed} occupied an object or array of objects
  @param {string} call where to toss error messages
  */
  _ocHandler(occupied, call="Cell._ocHandler"){
    if (!Array.isArray(occupied)) {
      occupied = [occupied];
    }
    if (occupied.length > 2) {
      throw new Error(call + " expects at most one mob and one nonmob and was given the Array of length " + occupied.length + ".")
    }
    for (var i = 0; i < occupied.length; i++) {
      if (!(occupied[i] instanceof Living)) {
        throw new Error(call + " expects at most one mob and one not mon and was given " + occupied[i] + ".")
      }
    }
    if (occupied.length == 2) {
      if ((occupied[0] instanceof Mob) && (occupied[1] instanceof Mob)) {
        throw new Error(call + " was sent 2 " + "Mob" + "s and can only take 1.");
      }
      if ((occupied[0] instanceof Nonmob) && (occupied[1] instanceof Nonmob)) {
        throw new Error(call + " was sent 2 " + "Nonmob" + "s and can only take 1.");
      }
    }
    for (var i = 0; i < occupied.length; i++) {
      var mob = false;
      var nonMob = false;
      for (var j = 0; j < this._occupied.length; j++) {
        if (this._occupied[j] instanceof Mob) {mob = true;}// this is setting our trackers
        if (this._occupied[j] instanceof Nonmob) {nonMob = true;}
      }
      // Asumes single item

      if (nonMob == true && occupied[i] instanceof Nonmob) {
        throw new Error(call + " - cell already had a nonmob and was given " + occupied[i].name)
      }else if (mob == true && occupied[i] instanceof Mob) {
        throw new Error(call + " - cell already had a mob and was given " + occupied[i].name)
      }else {
        this._occupied.push(occupied[i]);
      }
    }
  }

  //toString and over overwrites
  toString(){
    return this._image;
  }
}
