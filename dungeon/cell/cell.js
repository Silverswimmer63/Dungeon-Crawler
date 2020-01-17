
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
   }else if (inventory) {
     this._inventory = [];
   }else {
     throw new Error("Cell.inventory can not be used when the inventory is not empty. Please use Cell.add to add to inventory.");
   }
 }

 get occupied(){return this._occupied}

 //add(thing)
 //add will be used to update the cell when we do update cycles for the game
 //this will be used for monsters moving in and out of the cell and loot drops landing
 //in the cell
 //@param will make sure the param thing will be the apprate class

 add(thing){
   //determain if it is an object or an array
   if(Array.isArray(thing)){
     for (var i = 0; i < thing.length; i++) {
       if (!(thing[i] instanceof Item)){
         //if its an array check to see if all are living or all are objects
         //add tracker flags, toss an error if both  ARE HIT.
         throw new Error("Cell.add attempted to add living(s) and item(s) at the same time");
       }
     }
   }

   //track which

 }



 set occupied(occupied){this._ocHandler(occupied,"Cell.occupied")}



 //Cell._ocHandler
 //will do all the
 //@param (occupied) object or array
 _ocHandler(occupied){
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
   if (occupied.length == 2) {
     if(occupied[0] instanceof Mob && occupied[1] instanceof Mob){
       throw new Error("Cell.occupied was set to 2" + "Mob" + ".")
     }
     if(occupied[0] instanceof nonMob && occupied[1] instanceof Nomob)
      throw new Error("Cell.occupied was set to 2" + "Mob" + ".")

   }
 }
}
//toString and other overwrites
 toString(){
   return this._image;
 }
}
