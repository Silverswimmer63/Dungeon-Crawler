class Item {
  constructor(name, icon, value, desc) {
    this._name = name;// the this keywodr means thet it is something the class owns
    this._icon = icon;
    this._value = value;
    this._desc = desc;
  }
  get name() {
    return this._name
  }
  set name(name) {
    this._name = name;
  }
  get icon(){
    return this._icon;
  }
  set icon(icon){
    this._icon = icon;
  }
  get value(){
    return this._value;
  }
  set value(value){
    this._value = value;
  }
  get desc(){
    return this._desc;
  }
  set desc(desc){
    this._desc = desc;
  }
  toString(){
    var retStr = "You see a " + this.name + ". It is worth " + this.value + ".";
    retStr += "It can br described as: " + this.desc;
    return retStr;
  }
}


// Think of constructer as the function that makes the object
// for example if my constructor said constructor(name, value, desc)
//theis is the mostly the same thing as having a function foo(name, value, desc)
//so...
//var bar = foo("Mike", 9001, "It's a me, Mike-o");
//bar hatever it returns
//var baz = new Item("Mike", 9001, "It's a me, Mike-o");
//i would have an object of class Item with whatever i had those things doing inside the item

/*make an armor class in a new file called armor.js that extends item.
Have it add 2 new properties, _damageSoak and _location and getters and setters for those properties.
*/
class Armor extends Item {
  constructor(name, icon, value, damageSoak, location, desc) {
    super(name, icon, value, desc);
    this._damageSoak = damageSoak;
    this._location = location;
  }
  get damageSoak(){
    return this._damageSoak;
  }
  set damageSoak(damageSoak){
    this._damageSoak = damageSoak;
  }
  get location(){
    return this._location;
  }
  set location(location){
    this._location = location;
  }
}


/*
*/
