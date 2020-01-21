/*
class cell is a individual space on the grid. it can be open or clasedand it can
contain iteams or mobs or the player.
*/
class Cell(){
  constructor(){
    this._image = "#";
    this._type = "wall" //walls, halls, rooms, borders: a wall but its a tag
    this._open = false;//if the cell allows movement
    this._inventory =[];//monsters drop inventory we need to program the drop(items in the cell)
    this._ocupied = [];//for living in the cell

  }
get image (){return this._image}
get type(){return this._type}
get open(){if (this._occupied.length > 0) {return false;}else {return this._open;}}
get inventory(){ return this.inventory;}
get ocupied(){return this.ocupied}
set image(image){this._image = this.image}
/*
for the occupied setter-
if there is a nonmob in the cell do not allow another nonmob
if there is a mob in the cell do not allow annother mob
if we try to add things we cant, throw an error that reads
"Cell.occupied - cell already had a mob/nonmob and was given" + thing
*/
set ocupied (ocupied){
  for (var i = 0; i < ; i++) {
    if (ocupied.length > 2) {
      throw new Error "cell.ocupied expects at mos one mob and one more"
    }
  var mob = false;
  var notmob = false;
  for (var i = 0; i < this.ocupied.length; i++) {
  }
  if (this.ocupied[i] instanceof Mob) {mob == true;}
  if (this.ocupied[i] instanceof Mob){notmob == true:}
    }
  }
if (!(ocupied[i]instanceof Living)) {
  throw new Error ("call.ocupied something or another" + ocupied + ".";)
}
   if (nonMob == true && ocupied instanceof nonmob) {
    throw new Error("Cell.occupied - cell already had a mob/nonmob and was given" + thing + ".";

  }else if(mob == false && ocupied instanceof mob){
    throw new Error ("Cell.occupied - cell already had a mob/nonmob and was given" + thing + ".";)
  }
  else {
    this.ocupied.push(ocupied[i]);
  }
}
}
add(thing){
  var bad = true;
  if (thing instanceof Item){
    thing = [thing];
    bad = false;
  }
  if (thing instanceof Living) {
    this._ocHandler
  }
}
/*
add a setter for inventory that does the following:
if inventory is empty, allows you to set the inventory
if inventory is not empty then have the following error:
"Cell.inventory can not be used when the inventory is not empty. Please use Cell.add to add to inventory."
*/
set inventory(inventory){
  else if (inventory) {

  }else {
    throw new Error("cell.inventory can not be used when the inventory is not empty. please use cell.add to add to inventory")
  }
}
set type(type)
this._type = type;
{if (type == "wall"||type == "borders") {
  this._open = false;
}else if (type =="room" ||type == "hall") {
this._type = type;
    this._open = false;
}else {
  throw new Error "cell.type expected one of the following: wall, hall, border, or room and got:" + type + ".";
}
{

  }
}

  toString(){
    return this._image;
  }
}
