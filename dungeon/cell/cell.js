/* Class Cell an individual space on a grid. It can be open or closed, and
it can contain items or mobs or the player.
*/

class Cell{
  constructor(){
    this._image = "#";
    this._type = "wall"; // wall, hallway, room, border
    this._open = false; // if the cell allows movement
    this._inventory = []; //items in the cell
    this._occupied = []; // for livings in the cell
    this._door = false;
  }
  /* ---------------------------- Setters methods ----------------------------*/
  get image(){ return this._image; }
  set image(image){ this._image = image; }

  get door(){ return this._door; }
  /*set door(door = Utils.listCheck(this.door, [false, "open", "closed"],call="Utils.listCheck"))
  checks if the type is door and whether it is open or closed. Then it assigns an image that is determined if the door is open or closed.
  @param door {boolean}: is first checked by listCheck
  */
  set door(door = Utils.listCheck(this.door, [false, "open", "closed"],call="Utils.listCheck")){
    if (this.door == "open") { this.door.image = "O"; }
    if (this.door == "closed") { this.door.image = "D"; }
  }

  get type(){ return this._type; }
  /*set type(type)
  checks if the type is either wall, room, or hall. If it is a room or hall, then it will be open.
  @param type {"string"}: makes it easy to trace whether if something should be open or closed.
  */
  set type(type = Utils.listCheck(type, ["wall", "room", "hall"])){
    this._type = type;
    this._open = ["room", "hall"].includes(type);
    if(this._open) { this.image = " "; }
    this._door = false;
  }

  /*set & get open()
  checks to see if the cell is occupied or open. Then throws an error if set wrong.
  @return this._open {boolean}: this allows movement
  @param open {boolean}
  */
  get open(){
    if(this._occupied.length > 0){ return false; } // check to see if occupied
    if (this.door == "closed") { this.door = false; }
    return this._open; // otherwise return this._open;
  }
  set open(open){
    throw new Error("Open status should only be set by the cell type.");
  }

  get inventory(){ return this._inventory; }
  /*set inventory(inventory)
  checks if there is anything in inventory, setting it to itself or to an array if there is nothing.
  then throws an error if inventory is not empty
  @param inventory [array]: items in the cell
  */
  set inventory(inventory){
    if(this._inventory.length == 0){ this._inventory = inventory; }
    else if(inventory.length == 0){ this._inventory = [];}
    else{
      throw new Error("Cell.inventory can not be used when the inventory is not empty. Please use Cell.add to add to inventory.");
    }
  }

  get occupied(){ return this._occupied; }
  /* for the occupied setter-
  if there is a nonmob in the cell do not allow another nonmob
  if there is a mob in the cell do not allow annother mob
  if we try to add things we cant, throw an error that reads
  "Cell.occupied - cell already had a mob/nonmob and was given" + thing
  */
  set occupied(thing){ this._ocHandler(thing, "Cell.occupied"); }

  /* --------------------------- External methods ----------------------------*/
  /* add(thing)
  add will be used to update the cell when we do update cycles for the game.
  this will be used to take care of monsters moving in and out of the cell,
  and loot drops or discards being added to the cell. Will make sure that the
  param thing is one of the 3 appropiate classes.
  @param thing {mixed}: the thing or things to be added to the cell.
  */
  add(thing){
    let bad = true;
    if(thing instanceof Item){
      thing = [thing];
      bad = false;
    }
    if (thing instanceof Living){
      this._ocHandler(thing, "Cell.add");
      bad = false;
    }
    if(Array.isArray(thing)){
      for (let i = 0; i < thing.length; i++) {
        if(!(thing[i] instanceof Item)){
          throw new Error("Cell.add attemped to add nonItem(s) and Item(s) at the same time");
        }
      }
      bad = false;
      this._inventory = this._inventory.concat(thing);
    }
    if (bad == true){
      throw new Error("Cell.add recived illegal item.");
    }
  }

  /* remove(index)
  remove will either remove the item from the cell inventory that exist at index
  or if index = "mob" it will remove the monster
  @param index {mixed}: either the index value of the item or the word "mob"
  @return {object}: the item or mob
  */
  remove(index){
    if(index == "mob"){
      let num = undefined;
      for (var i = 0; i < this.occupied.length; i++) {
        if (this.occupied[i] instanceof Mob) { num = i; }
      }
      if(num == undefined){
        throw new Error("Cell.remove attemped to remove a Mob that does not exist.");
      }
      return this.occupied.splice(num,1);
    }
    if(Number.isInteger(index)){
      if((this.inventory.length == 0) || (index >= this.inventory.length)){
        throw new Error("Cell.remove attempted to remove an Item that does not exist.");
      }
      return this.inventory.splice(index,1);
    }
    throw new Error("Cell.remove expected a number or mob and recived " + index + ".");
  }

  /*toggleDoor()
  makes the door open or closed along with its image, but if the door is false, it throws an error.
  */
  toggleDoor(){
    if (this.door == false) {
      throw new Error("Cell.toggleDoor attempted to open or close a door that does not exist");
    }
    if (this.door == "open") { this.door = "closed"; }
    if (this.door == "closed") { this.door = "open"; }
  }

  /* --------------------------- Internal methods ----------------------------*/
  /*_ocHandler(thing, call="Cell._ocHandler")
  This will do all of the interior work for set occupied.
  @param {mixed} thing an object or array of objects
  @pram {string}call where to toss error messages from.
  */
  _ocHandler(thing, call="Cell._ocHandler"){
    if (this.open != true) {
      throw new Error(call + " attempted to add " + thing + " to a closed cell.")
    }
    if(!Array.isArray(thing)){ thing = [thing]; } // check for an array
    if(thing.length > 2){
      throw new Error(call + " as most one mob and one nonmob and was given an array of legth" + thing.length +".");
    }
    for (let i = 0; i < thing.length; i++) { // check for correct type
      if(!(thing[i] instanceof Living)){
        throw new Error(call + " as most one mob and one nonmob and was given" + thing[i] + ".");
      }
    }
    if(thing.length == 2){
      let word = null;
      if((thing[0] instanceof Mob) && (thing[1] instanceof Mob)){ word = "mob"; }
      if((thing[0] instanceof Nonmob) && (thing[1] instanceof Nonmob)){ word = "nonmob";}
      if(word != null) { throw new Error(call + " was sent 2 " + word + "s and can only take 1."); }
    }
    for (let i = 0; i < thing.length; i++) { // check each one to make sure they can be added
      let hasMob = false;
      let hasNon = false;
      for (let j = 0; j < this._occupied.length; j++) { //setting our flags
        if(this._occupied[j] instanceof Mob){ hasMob = true; }  // undefined case for students i & j
        if(this._occupied[j] instanceof Nonmob) { hasNon = true; }
      }
      if (hasNon && (thing[i] instanceof Nonmob)) {
        throw new Error(call + " - cell already had a nonmob and was given " + thing[i].name + ".");
      }
      else if (hasMob && (thing[i] instanceof Mob))  {
        throw new Error(call + " - cell already had a mob and was given " + thing[i].name + ".");
      } else {
        this._occupied.push(thing[i]);
      }
    }
  }

  /*_stringHandler(className)
    deals with the issue of how to display when there is more than 1 item in
    the inventory.
    order of display: most important  - weapons, armor, potions, other -least
    order of display part 2: most important - level, value, index -least
    @param className: {class} the class to be be used for refining the search.
  */
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
        if (testCase != undefined) {
          image = testCase;
        }
      }
    } //ignore this for showing this step
    if (this.occupied.length == 1) {image = this.occupied[0]; } // only 1 thing here
    if (this.occupied.length == 2) { // find the mob
      if (this.occupied[0] instanceof Mob) { image = this.occupied[0]; }
      else { image = this.occupied[1]; }
    }
    if ((this.image == "D") || (this.image == "O")) {
      return "<span style=\"color:brown\">"+ this.image +"</span>"
    }
    return "" + image;
  }
}
