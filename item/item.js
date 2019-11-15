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
}


// Think of constructer as the function that makes the object
// for example if my constructor said constructor(name, value, desc)
//theis is the mostly the same thing as having a function foo(name, value, desc)
//so...
//var bar = foo("Mike", 9001, "It's a me, Mike-o");
//bar hatever it returns
//var baz = new Item("Mike", 9001, "It's a me, Mike-o");
//i would have an object of class Item with whatever i had those things doing inside the item
