/*randomItem()
produces a random item
adds the aprppriate prameters to the item
@return an item with the correct parameters
*/
function randomItem(){
    var index = Utils.randMath(0, allItems.length - 1);
    var item = allItems[index];
    if (item.type instanceof Armor) { var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damageresist) }//inherits off; Armor will check all o them. INHERITANCE
    if (item.type instanceof Ranged) { var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damage, item.range) }
    if (item.type instanceof Melee) { var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damage) }
    if (item.type instanceof Potion) { var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon, item.damage) }
    else{ var retItem = new item.type(item.name, item.type, item.value, item.desc, item.icon) }
    return retItem;
}

/*_makeFoe()
produces a random foe
adds the correct parameters to the enemy
@return the foe with the correct parameters
*/
function _makeFoe(){
  var index = Utils.randMath(0, allMobs.length - 1);
  var mon = allMobs[index];
  var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam, mon.level);
  if (retMon instanceof Inventory) {
    retMon.add(randomItem(mon.level));
  }else {
    var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam, mon.level);
  }
  return retMon;
}

/*_makeItem()
takes the randomitem created by randomItem
it gives ecah item type the of parameter that is specific to that class
@return item with all of its parameters
*/
 function _makeItem(){
  var index = Utils.randMath(0, allItems.length - 1);
  var item = allItems[index];
  var retItem = undefined;
  if ((item.type == Melee)||(item.type == Ranged)) {
    if (item.type == Ranged) {
      retItem = new item.type(item.name,item.icon,item.desc,item.value,item.type,item.damage, item.range, item.level);
    }else {
      retItem = new item.type(item.name,item.icon,item.desc,item.value,item.type,item.damage,item.level);
    }
  }
  else if ((item.type == Head)||(item.type == Body)||(item.type == Leg)) {
    retItem = new item.type(item.name,item.icon,item.desc,item.value,item.type,item.damageresist,item.level);
  }
  else if (item.type == Potion) {
    retItem = new item.type(item.name,item.icon,item.desc,item.value,item.type,item.damage,item.level);
  }else {
    retItem = new item.type(item.name,item.icon,item.desc,item.value,item.type,item.level);
  }
  return retItem;
}

/*randomItem(level)
adds a level to a random item
adds the levels of the items up to the level of a monsters inventory level
fills the inventory up to the level of the mob it is in
*/
function randomStuff(level, type){
  var max = level+1;
  var retAry = [];
  if (Math.random() <= .2) {max = level +2;}
  var remains = max;
  while (true) {
    if (retAry.length != 0) {
      for (var i = 0; i < retAry.length; i++) {
        remains -= (retAry[i].level+1);
      }
      if (remains == 0) {return retAry;}
      if (Utils.randMath(0,max) > remains){return retAry;}
    }
    var goodItem = false;
    while (!goodItem) {
      if(type == "item"){
      var item = this._makeItem();
    }else {
      var item = this._makeFoe();
    }
      if (item.level+1 <= remains) {
        retAry.push(item);
        goodItem = true;
      }
    }
  }
}

function randomItem(level){
  return randomStuff(level, "item");
}

function randomFoe(level) {
  return randomStuff(level, "foe");
}
