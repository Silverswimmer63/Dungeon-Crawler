
/* class Item(name, icon, desc, value, type="trash")
The basic item class. Will be extended for other types of items.
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param value {number} the value of the item
@param type {string} either the name of the collection the item belings to or trash
*/
class Item {
  constructor(name, icon, desc, value, type="trash", level){
    this._name = name;
    this._icon = icon; // the single character that shows up on the map
    this._desc = desc; // the description of the item
    this._value = value;
    this._type = type; // if the item is in a collection or trash
    this._level = level;// a integer for the level

  }
  /**************************************** Getter and Setters *********************************/
  get name(){ return this._name; }
  set name(name){ this._name = name }

  get icon(){ return "<spam class = 'item'>" + this._icon + "</spam>"; }
  set icon(icon){ this._icon = icon; }

  get desc(){ return this._desc; }
  set desc(desc){ this._desc = desc; }

  get value(){ return this._value; }
  set value(value){ this._value = value; }

  get type(){ return this._type; }
  set type(type){ this._type = type; }

  get level(){return this._level; }
  set level(level){this._level = level; }

  /*text()
  retruns a user friendly line of text for output
  @return {string} text for output ot the screen
  */
  text(){
      var retString = this.name + "<br>";
      reString += this.desc + "<br>";
      retString += "This looks like it is worth " + this.value + " gold.<br>";
      // TODO: add the type once we have it all figured out
      return retString;
    }
  toString(){
    return "<span style=\"color:purple\">"+ this.icon +"</span>";
    }
}
//hi
