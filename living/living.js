class Living {
  constructor(name, type, hp, desc, icon){
    this._name = name;
    this._type = type;
    this._hp = hp;
    this._maxHp = hp;
    this._desc = desc;
    this._icon = icon;
  }
  get name(){ return this._name; }
  set name(name){ this._name = name; }

  get type(){ return this._type; }
  set type(type){ this._type = type}

  get hp(){ return this._hp; }
  set hp(hp){ this._hp = hp; }

  get desc(){ return this._desc; }
  set desc(desc){ this._desc = desc; }

  get icon(){ return "<span class='mob'>" + this._icon + "</span>"; }
  set icon(icon){ this._icon = icon; }

  get maxHp(){ return this._maxHp; }
  set maxHp(maxHp){ this._maxHp = maxHp; }

  /*text()
  returns a user frendly line of text for output to the screen
  @return {string} text for output to the screen
  */
  text(){
    return this.desc + "<br>";
  }
  toString(){
    return this.desc;
  }
}
