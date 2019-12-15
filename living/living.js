class Living {
  constructor(name, type, hp, desc, icon){
    this._name = name; //this shows the monsters' name.
    this._type = type; // this determines what kind the item is. For example, you can see if it is armor, weapon, (cvendor trash?) or potions.
    this._hp = hp; //this gives the life of the hero
    this._maxHp = hp; // this gives the maximum life for the hero
    this._desc = desc; //the description of the item
    this._icon = icon; //the single character that shows up on the map
  }
  get name(){ return this._name; }
  set name(name){ this._name = name; }

  get type(){ return this._type; }
  set type(type){ this._type = type}

  get hp(){ return this._hp; }
  set hp(hp){ this._hp = hp; }

  get desc(){ return this._desc; }
  set desc(desc){ this._desc = desc; }

  get icon(){ return "<span class = 'item'>" + this._icon + "</span>"; }
  set icon(icon){ this._icon = icon; }

  get maxHp(){ return this._maxHp; }
  set maxHp(maxHp){ this._maxHp = maxHp; }

  /*
  text()
  returns a user friendly line of text for output to the screen
  @return {string} text for the output to the screen
  */
  text(){
    return this.desc + "<br>";
  }
  toString(){
    return this.desc;
  }
}
