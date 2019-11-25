class Living {
  constructor(name, type, hp, desc, icon, attackDam){
    this._name = name;
    this._type = type;
    this._hp = hp;
    this._desc = desc;
    this._icon = icon;
    this._attackDam = attackDam;
  }
  get name(){ return this._name; }
  set name(name){ this._name = name; }

  get type(){ return this._type; }
  set type(type){ this._type = type}

  get hp(){ return this._hp; }
  set hp(hp){ this._hp = hp; }

  get desc(){ return this._desc; }
  set desc(desc){ this._desc = desc; }

  get icon(){ return this._icon; }
  set icon(icon){ this._icon = icon; }

  get attackDam(){ return this._attackDam; }
  set attackDam(attackDam){ this._attackDam = attackDam; }
}
