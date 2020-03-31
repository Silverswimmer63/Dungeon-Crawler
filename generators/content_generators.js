/*_makeFoe()
it uses allMobs[index] to pick a foe and then retturns all of the things a monster needs in a
return statement wich is a object.
@return object of a random foe */
function _makeFoe(){
  var index = Utils.randMath(0, allMobs.length - 1);
  var mon = allMobs[index];
  var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam, mon.level);

  if (retMon instanceof Inventory) {
    retMon.add(randomItem(mon.level));
  }
  else {
    var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam, mon.level);
  }
  return retMon;
}

/*_makeItem()
it uses alItems[index] to pick a item and then retturns all of the things a item needs in a
return statement wich is a object.
@return object of a random foe */
 function _makeItem(){
  var index = Utils.randMath(0, allItems.length - 1);
  var item = allItems[index];
  var retItem = undefined;

  if ((item.type == Melee)||(item.type == Ranged)) {
    if (item.type == Ranged) {
      retItem = new item.type(item.name,item.icon,item.desc,item.value,item.type,item.damage, item.range, item.level);
    }
    else {
      retItem = new item.type(item.name,item.icon,item.desc,item.value,item.type,item.damage,item.level);
    }
  }
  else if ((item.type == Head)||(item.type == Body)||(item.type == Leg)) {
    retItem = new item.type(item.name,item.icon,item.desc,item.value,item.type,item.damageresist,item.level);
  }
  else if (item.type == Potion) {
    retItem = new item.type(item.name,item.icon,item.desc,item.value,item.type,item.damage,item.level);
  }
  else {
    retItem = new item.type(item.name,item.icon,item.desc,item.value,item.type,item.level);
  }
  return retItem;
}

/*
randomSomething(level, type)
@param level {int}: a number between 0 and X
@param type {string}: a string denoting the type of thing to roll.
@return {array} an array of game objects.
*/
function randomSomthing(level, type){
  var max = level+1;
  var retAry = []; // the items to be returned will go here
  if (Math.random() <= .2) {max = level +2;} // chance of an additional level worth of stuff
  var remains = max;
  while (true) {

    if (retAry.length != 0) {
      for (var i = 0; i < retAry.length; i++) {
        remains -= (retAry[i].level+1);
      }
      if (remains == 0) {return retAry;} //max levels worth of stuff hit
      if (Utils.randMath(0,max) > remains){return retAry;} //chance to return less than max levels of stuff
    }

    var goodItem = false;

    while (!goodItem) {

      if (type == "item") { var item = this._makeItem(); } // add an item if type is item
      else { var item = this._makeFoe(); } // add an NPC if type is not item

      if (item.level+1 <= remains) {
        goodItem = true;
        retAry.push(item);
      }

    }
  }
}

/* a wrapper for making foes */
function randomFoe(level){ return randomSomthing(level, "foe"); }

/* a wrapper for making items */
function randomItem(level){ return randomSomthing(level, "item"); }
