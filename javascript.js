/*
 _makeFoe() is a helper function for randomFoe(level)
@returns retMon {object} an object of a monster with its stats
 */
function _makeFoe(){
  var index = Utils.randMath(0, allMobs.length - 1);
  var mon = allMobs[index];
  var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
  if (retMon instanceof Inventory) {
    retMon.add(randomItem());
  }else {
    var retMon = new mon.type(mon.name, mon.type, mon.hp, mon.desc, mon.icon, mon.attackDam);
  }
  return retMon;
}

function randomFoe(level) {
  var max = level+1;
  if (this.inventory instanceof this._makeFoe()) {

  }
}
/*
@function _makeItem()
is a helper function for _makeItem()
@returns {Object} an object of an item's stats and know abouts
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
/*
randomItem(level) is a function that returns one or more items with the help of _makeItem()
@param {Integer} level is the set level used for the items/base level
@returns {object} (an) object(s) of item(s) <with their stats and know abouts>
*/
function randomItem(level){
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
      console.log(remains);
    }
    var goodItem = false;
    while (!goodItem) {
      var item = this._makeItem();
      if (item.level+1 <= remains) {
        retAry.push(item);
        goodItem = true;
      }
    }
  }
}
