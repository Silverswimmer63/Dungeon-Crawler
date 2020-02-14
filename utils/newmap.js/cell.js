/*
class cell is a individual space on the grid. it can be open or clasedand it can
contain iteams or mobs or the player.
6. We will work on cell. -
A. remove references to borders, we don't need those.
B. set it so that if the cell is set to open, than the cell image is set to " "
C. set the toSting in the cell to check to see if there is anything in inventory
or occupied. If there is something in either, have the cell use the toString for
those items the order of importance for now should just be
occupied (mob) > occupied (nonMob) > inventory (we will change that later to deal
with open and unopened doors, types of items, and so on.
D. alter addRoom to deal not change the cell image anymore.
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
type = Utils.listCheck(type,["wall","border","room","hall"], "cell.type");
this._type = type;
if (type == "wall" || type == "border") {
  this._open = ["room", "hall"].includes(type);
}
/*
for the occupied setter-
if there is a nonmob in the cell do not allow another nonmob
if there is a mob in the cell do not allow annother mob
if we try to add things we cant, throw an error that reads
"Cell.occupied - cell already had a mob/nonmob and was given" + thing
*/
get occupied(){return this._occupied}

set image(image){this._image = open}
set type(type){
  type = Utils.listCheck(type,["wall","border","room","hall"], "Cell.type");
  this._type = type;
  this._open = ["room","hall"].includes(type);
}
set open(open){throw new Error("Open status should only be set by the cell type.")}
set open (open){this._open = " "}
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
/* remove(index)
remove will either remove the item from the cell inventory that exist at index
or if index = "mob" it will remove the monster
@param index {mixed}: either the index value of the item or the word "mob"
@return {object}: the item or mob
*/
remove(idex){
  if (index == "mob") {
    //go through ocupied and find if there is a mob, useinstanceof. if we find something,, we want to slice or splice it out then return
num = i;
  for (var i = 0; i < this.ocupied.length; i++) {
    if (this.ocupied[i] instanceof Mob; {
      varmnum = i;
    }
  }
if (num == NaN) {
  throw new Error("Cell.remove attempted to remove a mob that does not exist.")
}
}
  return this.ocupied.splice();
  }
  if (Number.isInterger(index)){
    if ((this.inventory.length == 0)||(index >= this.inventory.length)){
      throw new Error ("Cell.remove attempted to remove a Item that does not exist")
    }
return this.inventory.splice(index,1);
}
throw new Error ("Cell.remove expected a number or mob and recive " + index + " .")
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

set open(open){throw new Error("Open status should be set by the cell type")}
/*
Friday -
deal with the issue of how to display when there is more than 1 item in
the inventory.
order of display: most important - weapons, armor, potions, other -least
order of display part 2: most important - level, value, index -least
*/
toString(){
  if (this.inventory.length > 0) {this.image = this.inventory[0].icon;}
  if (this.occupied.lenght == 1) {this.image = this.occupied[0].icon}
  if (this.occupied.lenght == 2) {
    if (this.occupied[0] instanceof Mob) {
      this._image = this.occupied[0].icon;
    }else {
      this._image = this.occupied[1].icon;
    }
  }
  return this._image;
}
var itemOrder = new Array(Weapon, Armor, Potion, VendorTrash);{
var itemStat = new Array(Level, Value, Index){
  var arr = [];
for (var j = 0; j < this.value.length; j++) {
  for (var k = 0; k < array.length; k++) {
  if (inventory[i] instanceof Weapon) {
    let arr = [inventory[i]]
  }
}
}
for (var j = 0; j < this.value.length; j++) {
  for (var k = 0; k < array.length; k++) {
  if (inventory[i] instanceof Armor) {
    this._image = Armor.icon;
  }
}
}
for (var j = 0; j < this.value.length; j++) {
  for (var k = 0; k < array.length; k++) {
  if (inventory[i] instanceof Potion) {
    this._image = Potion.icon;
  }
}
}
for (var j = 0; j < this.value.length; j++) {
  for (var k = 0; k < array.length; k++) {
  if (inventory[i] instanceof VenderTrash) {
    this._image = VenderTrash.icon;
  }
}
}
}
for (var i = 0; i < this.value.length; i++) {

}
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


/*
for allthe things ||class
if(blah){
for (blerg) level
for (borog) value
} times 4

for inventory(
for class in [item, potion, weapon]{ [i]
track the i if it is higher then what it is current, reset
for (blerg) level
for (borog) value
}
)

for inventory{
thing = undefined
thing = this._helperfunctionyoucomewithnameof(this.inventory, Item)
thing = this._helperfunctionyoucomewithnameof(this.inventory, potion)
thing = this._helperfunctionyoucomewithnameof(this.inventory, armor)
thing = this._helperfunctionyoucomewithnameof(this.inventory, Item)
helper function:
let otherthing = undiffined;
for inventory
if(inventory[i] instanceof 2nd parameter)
for (blerg) level
for (borog) value
if otherthing !== undiffined
return otherthing
else
  return string
}
}
*/
