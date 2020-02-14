/*class cell is a individual space on the grid.
It can be open or closed and it can contain items
or mobs or the player.
*/
class Cell {
  constructor(){
    this._image = "#";
    this._type = "wall"//wall, hall, rooms, a wall but a tag
    this._open = false;// if the cell allows movement
    this._inventory = [];//items in the cell
    this._occupied = [];//for livings in the cell
  }
set open(open){ throw new Error("Open status should only be set by the cell type"); }

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

  set image(image){this._image = image}
  set type(type){
    type = Utils.listCheck(type,["wall","border", "room","hall"], "Cell.type");
    this._type = type;
    this._open = ["room","hall"].includes(type);

  // track which one it is
  // send the correct function.
}

/* remove(index)
remove will either remove the item from the cell inventory that exist at index
or if index = "mob" it will remove the monster
@param index {mixed}: either the index value of the item or the word "mob"
@return {object}: the item or mob
*/
remove(index){
  if(index == "mob"){
    var num = undefined;
    for (var i = 0; i < this.occupied.length; i++) {
        if (this.occupied[i] instanceof Mob) {
          num = i;
      }
    }
    if (num == undefined) {
      throw new Error("Cell.remove attempted to remove a Mob that did not exist")
    }
    return this.occupied.splice(num, 1)
  }
  if (Number.isInteger(index)) {
    if ((this.inventory.length == 0) || (index >= this.inventory.length)) {
      throw new Error("Cell.remove attempted to remove an Item that did not exist")
    }
    return this.inventory.splice(index, 1);
  }
  throw new Error("Cell.remove expected a number or mob and received " + index + ".")
}

//internal methods
/*_ocHandler(occupied, call="_ocHandler")
this to will do all of the interior work for set occupied.
@param occupied {mixed} an objec or array of objects
@param {string} call where toss error messeage
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
      throw new Error(" Cell.occupied was sent 2 mob(s) and can only take 1.")
    }
    if ((occupied[0] instanceof Nonmob) && (occupied[1] instanceof Nonmob)) {
      throw new Error(" Cell.occupied was sent 2 Nonmob(s) and can only take 1.")
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

  //toString and other overwrites
  toString(){
  let image = this._image; // default image
    if (this.inventory.length > 0) { image = this.inventory[0]; }
    if (this.inventory.length > 1){
      let order = [Item, Potion, Armor, Weapon]; // for lowest to best.
      for (let i = 0; i < order.length; i++) {
        let testCase = this._stringHandler(order[i]);
        if (testCase != undefined) { image = testCase; }
      }
  } //ignore this for showing this step
  if (this.occupied.length == 1) {image = this.occupied[0]; } // only 1 thing here
    if (this.occupied.length == 2) { // find the mob
      if (this.occupied[0] instanceof Mob) { image = this.occupied[0]; }
      else { image = this.occupied[1]; }
  }
  return "" + image;
  }

}

//toString and other overwrights
//let arr = [inventory[i]];
  toString(){
    let image = this._image; // default image
    if (this.inventory.length > 0) { image = this.inventory[0]; }
    if (this.inventory.length > 1){
      let order = [Item, Potion, Armor, Weapon]; // for lowest to best.
      for (let i = 0; i < order.length; i++) {
        let testCase = this._stringHandler(order[i]);
        if (testCase != undefined) { image = testCase; }
      }
    } //ignore this for showing this step
    if (this.occupied.length == 1) {image = this.occupied[0]; } // only 1 thing here
    if (this.occupied.length == 2) { // find the mob
    if (this.occupied[0] instanceof Mob) { image = this.occupied[0]; }
    else { image = this.occupied[1]; }
    }
  return "" + image;
  }

}
