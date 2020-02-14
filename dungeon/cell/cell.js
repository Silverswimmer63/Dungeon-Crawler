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
    type = Utils.listCheck(type,["wall","room","hall"], "Cell.type");
    this._type = type;
    this._open = ["room","hall"].includes(type);
    if (this._open == true) {
      this.image = " ";
    }
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

    if ((nonMob == true) && (occupied[i] instanceof Nonmob)) {
      throw new Error(call + " - cell already had a nonmob and was given " + occupied[i].name)
    }else if ((mob == true) && (occupied[i] instanceof Mob)) {
      throw new Error(call + " - cell already had a mob and was given " + occupied[i].name)
    }else {
      this._occupied.push(occupied[i]);
    }
  }
}

//toString and other overwrights
//let arr = [inventory[i]];

toString(){
  let image = this._image;
  var arr = [];
  if (this.inventory.length > 0) {this.image = this.inventory[0].icon;}
  if (this.inventory.length > 1) {
    for (var i = 0; i < inventory.length; i++) {
    for (var j = 0; i < .length; j++) {
      for (var k = 0; k < .length; k++) {
        if (inventory[i] instanceof Weapon) {
          arr.push(inventory[i]);
        }
      }
    }
    for (var j = 0; j < .length; j++) {
      for (var k = 0; k < .length; k++) {
        if (inventory[i] instanceof Armor) {
          arr.push(inventory[i]);
        }
      }
    }
    for (var j = 0; j < .length; j++) {
      for (var k = 0; k < .length; k++) {
        if (inventory[i] instanceof Potion) {
          arr.push(inventory[i]);
        }
      }
    }
    for (var j = 0; j < .length; j++) {
      for (var k = 0; k < .length; k++) {
        if (inventory[i] instanceof VendorTrash) {
          arr.push(inventory[i]);
        }
      }
    }
  }
      if (this.occupied.length == 1) {image = this.occupied[0].icon}
      if (this.occupied.length == 2) {
        if (this.occupied[0] instanceof Mob) {
        image = this.occupied[0].icon;
        }else {
          image = this.occupied[1].icon;
        }
      }
    }
  }
/*
set the toSting in the cell to check to see if there is anything in inventory or
occupied. If there is something in either, have the cell use the toString for
those items. the order of importance for now should just be occupied (mob) > occupied
(nonMob) > inventory (we will change that later to deal with open and unopened
doors, types of items, and so on.*/
  //toString and other overwrights
  toString(){
    let image = this._image;
    if (this.inventory.length > 0) {image = this.inventory[0].icon;}
    if (this.inventory.length > 1) {
      let check = [Item, Potion, Armor, Weapon];
      let item = [];
      let hit = 0;
      for (var i = 0; i < check.length; i++) {
        for (var j = 0; j < this.inventory.length; j++) {
          if (this.inventory[j] instanceof check[i]) {
            if (i > hit) {
              hit = i;
              item = [];
            }
            item.push(this.inventory[j]);
            for (var k = 0; k < item.length; k++) {
            let best = item[0];
              if (best.value < item[k].value) {
                best = item[k];
                }
                image = best.icon;
              }
              for (var l = 0; l < item.length; l++) {
              let best = item[0];
                if (best.level < item[l].level) {
                  best = item[l];
                  }
                  image = best.icon;
                }
              }
            }
          }
        }
    if (this.occupied.length == 1) {image = this.occupied[0].icon;}
    if (this.occupied.length == 2) {
      if (this.occupied[0] instanceof Mob) {
        image = this.occupied[0].icon;
      }else {
        image = this.occupied[1].icon;
      }
    }
    return "" + image;
  }

}


for inventory{
  for class in [Item, Potion, Armor, Weapon]{
  //store [i] track the i if it is higher than for what is current, reset
    for(jwbd) level
    for(ndkas) value
}

}


*/
