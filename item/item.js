///* class Item(name, icon, desc, value, type="trash")
//The basic item class. Will be extended for other types of items.
//@param name {string} the name of the item
//@param icon {string} the singlr character that shows up on the map
//@param desc {string} the description of the item
//@param value {number} the value of the item
//@param type {string} either the name of the collection the item belings to or trash
//*/
//class Item {
//  constructor(name, icon, desc, value, type="trash", level){
//    this._name = name; //this shows the monsters' name.
//    this._icon = icon; // the single character that shows up on the map
//    this._desc = desc; // the description of the item
//    this._value = value; // this is how many gold coins you would need to pay for this item
//    this._type = type; // this determines what kind the item is. For example, you can see if it is armor, weapon, (vendor trash?) or potions.
//// We added the keys burning, freezing, bleeding, healing, damage, duration, and type to the items.
//// burning: Makes the hero/character lose more hits/turns
//// freezing: Makes the hero/character lose hits/turns
//// bleeding: Makes the hero/character lose life/hp and lose hits/turns
//// healing: Restores the hp/life of the hero/character
//// damage: Makes the hero/character lose hp/life
//// duration: The number of hits the hero/character is missing out after being hit with either freezing, burning, and etc.
//// type: This is the kind of attack/damage done to a hero/character to make the game more interesting. For example: burning, freezing, and etc.
//  }
//  /**************************************** Getter and Setters *********************************/
//  get name(){ return this._name; }
//  set name(name){ this._name = name }
//
//  get icon(){ return "<span class = 'item'>" + this._icon + "</span>"; }
//  set icon(icon){ this._icon = icon; }
//
//  get desc(){ return this._desc; }
//  set (desc){ this._desc = desc; }
//
//  get value(){ return this._value; }
//  set value(value){ this._value = value; }
//
//  get type(){ return this._type; }
//  set type(type){ this._type = type; }
//
//  get level(){ return this._level; }
//
//  set level(){ this._level = level; }
//
//  /*
//  text()
//  returns a user friendly line of text for output to the screen
//  @return {string} text for the output to the screen
//  */
//  text(){
//      var retString = this.name + "<br>";
//      reString += this.desc + "<br>";
//      retString += "This looks like it is worth " + this.value + " gold.<br>";
//      // TODO: add the type once we have it all figured out
//      return retString;
//    }
//  toString(){
//    return this.icon;
//    }
//}
////hi
/* class Item(name, icon, desc, value, type="trash")
The basic item class. Will be extended for other types of items.
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param value {number} the value of the item
@param type {string} either the name of the collection the item belings to or trash
*/
class Item {
  constructor(name, icon, desc, value,level,status = "None", type="trash"){
    this._name = name; //this shows the monsters' name.
    this._icon = icon; // the single character that shows up on the map
    this._desc = desc; // the description of the item
    this._value = value; // this is how many gold coins you would need to pay for this item
    this._type = type; // this determines what kind the item is. For example, you can see if it is armor, weapon, (vendor trash?) or potions.
    this._status = status;
    this._level = level;
  }
  /**************************************** Getter and Setters *********************************/
  get name(){ return this._name; }
  set name(name){ this._name = name }

  get icon(){ return "<spam class = 'item'>" + this._icon + "</spam>"; }
  set icon(icon){ this._icon = icon; }

  get desc(){ return this._desc; }
  set (desc){ this._desc = desc; }

  get value(){ return this._value; }
  set value(value){ this._value = value; }

  get type(){ return this._type; }
  set type(type){ this._type = type; }
  
  get status(){ return this._status; }
  set status(status){ this._status = status; }

  get level(){ return this._level; }
  set level(level){ this._level = level; }

  /*
  text()
  returns a user friendly line of text for output to the screen
  @return {string} text for the output to the screen
  */
  text(){
      var retString = this.name + "<br>";
      reString += this.desc + "<br>";
      retString += "This looks like it is worth " + this.value + " gold.<br>";
      // TODO: add the type once we have it all figured out
      return retString;
    }
  toString(){
    return this.icon;
    }
}
//hi
