<<<<<<< HEAD
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
  get inventory(){return this._inventory}
  get occupied(){return this._occupied}

  //setters
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
=======
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
>>>>>>> origin/JAKE
    }else if (inventory) {
      this._inventory = [];
    }else {
      throw new Error("Cell.inventory can not be used when the inventory is not empty. Please use Cell.add to add to inventory.");
    }
  }
<<<<<<< HEAD
}
/*  for the occupied setter-
if there is a nonmob in the cell do not allow another nonmob
if there is a mob in the cell do not allow annother mob
if we try to add things we cant, throw an error that reads
"Cell.occupied - cell already had a mob/nonmob and was given" + thing*/

  set occupied(occupied){
    for (var i = 0; i < occupied.length; i++) {
      if (!Array.isArray(thing)){thing = [thing]}; {
        occupied = [occupied];
      }
      if (occupied.length > 2) {
        throw new Error("Cell.occupied expects at most one mob and one nonmob and was given the Arrsy of length" + occupied.length + ".");
      }
      for (var i = 0; i < occupied.length; i++) {
    if (!(occupied[i] instanceof Living)) {
      throw new Error ("cell.occupied expects at most one mob and one nonmob and was given the Arrsy of length" + occupied[i]);
    }
    if (occupied.length == 2) {
      if((occupied[0] instanceof Mob)&&(occupied[1] instanceof Mob)){
        throw new Error ("Cell.occupied was sent 2 " <mob/nonmob> "s and can only take 1.");
      }
      if ((occupied[0]instanceof Nonmob)&&(occupied[1] instanceof Nonmob)){
        throw new Error("Cell.occupied was sent 2 " <mob/nonmob> "s and can only take 1.");
      }
      }
    var mob = false;
    var nonMob = false;
    for (var i = 0; i < this._occupied.length; i++) {
      if (this._occupied[j] instanceof Mob) {mob = true}
      if (this._occupied[j] instanceof Nonmob) {nonMob = true}
    }
      if (nonMob == true && occupied[j] instanceof Nonmob) {
      throw new Error("Cell.occupied - cell already had a nonmob and was given" + occupied.name);
    }
    else if (mob == true && occupied[j] instanceof Nonmob) {
      throw new Error("Cell.occupied - cell already had a mob and was given" + occupied.name);
    }else {
  this._occupied.push(occupied[j]);
    }
   }
  }
}  
  toString(){
    return this._image;
  }
=======

  get occupied(){return this._occupied}
  set occupied(occupied){
    if (!Array.isArray(occupied)) {
      occupied = [occupied];
    }
    if (occupied.length > 2) {
      throw new Error("Cell.occupied expects at most one mob and one nonmob and was given the Array of length " + occupied.length + ".")
    }
    for (var i = 0; i < occupied.length; i++) {
      if (!(occupied[i] instanceof Living)) {
        throw new Error("Cell.occupied expects at most one mob and one not mon and was given " + occupied[i] + ".")
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
        throw new Error("Cell.occupied - cell already had a nonmob and was given " + occupied[i].name)
      }else if (mob == true && occupied[i] instanceof Mob) {
        throw new Error("Cell.occupied - cell already had a mob and was given " + occupied[i].name)
      }else {
        this._occupied.push(occupied[i]);
    }
  }
}

  toString(){
    return this._image;
  }
}
>>>>>>> origin/JAKE
