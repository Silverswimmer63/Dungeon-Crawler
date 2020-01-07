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
<<<<<<< HEAD
    this._type = type;//if the creature is mythological, cowboy, or space
    this._hp = hp;//the health of the enemy
    this._maxHp = hp;//the maximum amout of hp an enemy can have
    this._desc = desc;//description of the enemy
    this._icon = icon;//the single character that shows up on the map
    this._status = "none";

=======
    this._type = type;
    this._hp = hp;
    this._maxHp = hp;
    this._desc = desc;
    this._icon = icon;
    this._status = status;
>>>>>>> master
  }
  get name(){ return this._name; }
  set name(name){ this._name = name; }

  get type(){ return this._type; }
  set type(type){ this._type = type;}

  get hp(){ return this._hp; }
  set hp(hp){ this._hp = hp; }

  get desc(){ return this._desc; }
  set desc(desc){ this._desc = desc; }

<<<<<<< HEAD
  get icon(){ return "<span class='mob'>" + this._icon + "</span>"; }
=======
  get icon(){ return "<spam class = 'mob'>" + this._icon + "</spam>"; }
>>>>>>> master
  set icon(icon){ this._icon = icon; }

  get maxHp(){ return this._maxHp; }
  set maxHp(maxHp){ this._maxHp = maxHp; }

<<<<<<< HEAD
  get status(){ return this._status; }
  set status(status){ this._status = status; }

  /*text()
  returns a user frendly line of text for output to the screen
  @return {string} text for output to the screen
  */
=======
  get status(){return this._status;}
  set status(status){this._status = status;}
    /*
  text()
  returns a user friendly line of text for output to the screen
  @return {string} text for the output to the screen
  */

>>>>>>> master
  text(){
    return this.desc + "<br>";
  }
  toString(){
    return this.desc;
  }
}
