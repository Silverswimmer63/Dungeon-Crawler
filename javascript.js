/*
_makeItem()
randomly generates an item from melee, ranged, armor, potion
@return retItem {object}
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

/*
randomItem()

@param {integer}
@return {array}
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
