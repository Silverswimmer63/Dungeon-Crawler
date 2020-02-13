/*
class Cell is a individual space on the grid.
It can be open or closed and it can contain items
or mobs or the player.
*/
class Cell {
  constructor(){
    this._image = "#";
    this._type = "wall"//wall, hall, rooms: a wall but a tag
    this._open = false;// if the cell allows movement
    this._inventory = [];//items in the cell
    this._occupied = [];//for livings in the cell
  }
  //getters and setters
  get image(){ return this._image }
  set image(image){ this._image = image }

  get type(){ return this._type }
  set type(type){
    type = Utils.listCheck(type,["wall","room","hall"], "Cell.type");
    this._type = type;
    this._open = ["room","hall"].includes(type);
  }

  get open(){
    if (this._occupied.length>0) {
      return false;
    }
    else {
      this._image = " ";
      return this._open;
    }
  }
  set open(open){throw new Error("Open status should only be set by the cell type.")}

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
  set occupied(occupied){this._ocHandler(occupied, "Cell.occupied")}

  /*add(thing)
  add will be used to update the cell when we do update cycles for the game
  this will be used to take care of monsters moving in and out of the cell,
  and loot drops or discards being added to the cell. wil make sure that the
  param thing is one of the 3 appropriate classes.
  @param thing {mixed}: the thing or things to be added to the cell
  */
  add(thing){
    var bad = true;
    if (thing instanceof Item) {
      thing = [thing];
      bad = false;
    }
    if (thing instanceof Living) {
      this._ocHandler(thing,"Cell.add")
      bad = false;
    }
    if (Array.isArray(thing)) {
      for (var i = 0; i < thing.length; i++) {
        if (!(thing[i] instanceof Item)) {
          // if it is a array check to see if all are living or all are objects
          // if anything isnt a item pitch a fit(throw a error)
          throw new Error("Cell.add attempted to add nonItem(s) and item(s) at the same time")
        }
      }
      bad = false;
      this._inventory = this._inventory.concat(thing);
    }
    if (bad == true) {
      throw new Error("Cell.add recieved illegal item")
    }
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
        throw new Error("Cell.remove attempted to remove a Mob that does not exist.")
      }
      return this.occupied.splice(num,1);
    }
    if (Number.isInteger(index)) {
      if ((this.inventory.length == 0)||(index >= this.inventory.length)) {
        throw new Error("Cell.remove attempted to remove a Item that does not exist.")
      }
      return this.inventory.splice(index,1);
    }
    throw new Error("Cell.remove expected a number or mob and received " + index +".")
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

      if ((nonMob == true) && (occupied[i] instanceof Nonmob)) {
        throw new Error(call + " - cell already had a nonmob and was given " + occupied[i].name)
      }else if ((mob == true) && (occupied[i] instanceof Mob)) {
        throw new Error(call + " - cell already had a mob and was given " + occupied[i].name)
      }else {
        this._occupied.push(occupied[i]);
      }
    }
  }

  _stringHandler(className){
    let hits = []; // all the items in the inventory that are of the given class.
    for (let i = 0; i < this.inventory.length; i++) { // check for those things
      if(this.inventory[i] instanceof className){ hits.push(this.inventory[i]); }
    }
    if(hits.length == 0){ return undefined; } // base case

    let best = hits[0]; // base case - index 0
    for (let i = 0; i < hits.length; i++) { // value
      if(hits[i].value > best.value){ best = hits[i]; }
    }
    for (let i = 0; i < hits.length; i++) { // level
      if(hits[i].level > best.level){ best = hits[i]; }
    }
    return best;
  }

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
