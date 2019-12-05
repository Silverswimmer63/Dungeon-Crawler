class Cowboy extends Inventory{
  constructor(name, type, hp, desc, icon, atackDam, drop){
    super(name, type, hp, desc, icon, attackDam, drop);
  }
}
get name(){ return this._name; }
set name(name){ this._name = name }

get icon(){ return this._icon; }
set icon(icon){ this._icon = icon; }

get desc(){ return this._desc; }
set (desc){ this._desc = desc; }

get hp(){ return this._hp; }
set hp(hp){ this._hp = hp; }

get type(){ return this._type; }
set type(type){ this._type = type; }

get attackDam(){ return this._attackDam; }
set attackDam(attackDam){ this._attackDam = attackDam; }

get drop(){ return this._drop; }
set drop(drop){ this._drop = drop; }
text(){
  var retString = retString += "oh no a " + this.name + " apears what are you gonna do?<br>";
  retString += this.desc + "<br>";
  retString += "This boi has " + this.hp + " HP.<br>";
  retString += "a measly " + this.attackDam + " damage.<br>"
  retString += "He dropped " + this.drop + " you better pick it up!<br>"
  // TODO: add the type once we have it all figured out
  return retString;
}
