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
    this._occupied = [];// fro living in the cell
  }
  //getters and setters
  get image(){return this._image}
  set image(image){this._image = this.image}

  get type(){return this._type}
  set type(type){
    Utils.listCheck(type, ["Wall","border","room","hall","Cell.type"])
      this._type = type;
      this._open = false;
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

/*  for the occupied setter-
if there is a nonmob in the cell do not allow another nonmob
if there is a mob in the cell do not allow annother mob
if we try to add things we cant, throw an error that reads
"Cell.occupied - cell already had a mob/nonmob and was given" + thing*/

  get occupied(){return this._occupied}
  set occupied(occupied){this._ocHandler(occupied, "Cell.occupied")}

  //external
  /*add()thing
  add will be used to udate the cell when we do update
  cycles for the game.
  this will be used to take care of monsters moving in and out of the cell
  and loot drops or discards being added to the cell. will make sure
  that the param thing is one of the 3 appropriate classes.
  @param thing {mixed}: the thing or things to be added to cell
  */
  add(thing){
    var bad = true;
    //determine if it is a object or Array
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
      for (var i = 0; i < occupied.length; i++) {
    if (!(occupied[i] instanceof Living)) {
      throw new Error ("cell.occupied expects at most one mob and one nonmob and was given the Arrsy of length" + occupied[i]);
    }
    if (occupied.length == 2) {
      if((occupied[0] instanceof Mob)&&(occupied[1] instanceof Mob)){
        throw new Error ("Cell.occupied was sent 2 " <mob/nonmob> "s and can only take 1.");
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
  }

  //toString and other overwrights
    }
toString(){
  return this._image;
  }
}
