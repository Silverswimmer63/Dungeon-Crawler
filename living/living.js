/*
Class Living
@param Name: is name of mob or enemy
@param type: is type of the mob
@param hp: health of the mob
@param desc: description of the enemy/mob
@param icon: is the icon of the enemy*/
class Living {
  constructor(name, type, hp, desc, icon, status){
    this._name = name;
    this._type = type;
    this._hp = hp;
    this._maxHp = hp;
    this._desc = desc;
    this._icon = icon;
    this._status = "none";
  }
  get name(){ return this._name; }
  set name(name){ this._name = name; }

  get type(){ return this._type; }
  set type(type){ this._type = type;}

  get hp(){ return this._hp; }
  set hp(hp){ this._hp = hp; }

  get desc(){ return this._desc; }
  set desc(desc){ this._desc = desc; }

  get icon(){ return "<spam class = 'mob'>" + this._icon + "</spam>"; }
  set icon(icon){ this._icon = icon; }

  get maxHp(){ return this._maxHp; }
  set maxHp(maxHp){ this._maxHp = maxHp; }

  get status(){return this._status;}
  set status(status){return this._status}

  /*text()
  retruns a user friendly line of text for output
  @return {string} text for output ot the screen
  */
  text(){

  text(){
    return this.desc + "<br>";
  }
  toString(){
    return this.desc;
  }
}
