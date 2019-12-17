/*Mob
base class for mobs
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param attackDam {int} the value of damage a cowboy does
@param type {string} the type of mob
@param hp {int} the amount of hp a nob has*/
class Mob extends Living{
  constructor(name, type, hp, desc, icon, attackDam, status="none"){
    super(name, type, hp, desc, icon)
    this._alive = true;
  }
  get alive(){ return this._alive; }
  get range(){ return this._range; }
  get mob(){ return "<span class='mob'>" + this._mob + "</span>"}
  get status() { return this.status; }

  set alive(alive){ this._alive = true; }
  set range(range){ this._range = range; }
  set mob(mob){ this._mob = mob; }
  set status(status){ this._status = status; }

  /*attackDam
  if any mob has the type frozen then the return is 0
  else it returns a random min and max attack damage*/
  attackDam(){
    if (status.type == "frozen") { return 0; }
    else { return Utils.randMath(this.damage.min, this.damage.max); }
  }

  /*takeDam
  gives the amount of hp and tells if the mob is dead*/
  takeDam(damage){
    this.hp = this.hp - damage;
    if (this.hp <= 0) {
      this.alive = false;
      this.hp = 0;
    }
  }

  text(){
    if (!alive){
      var retString = "Looks like a dead " + this.name + " Its HP is 0 now.<br>";
      return retString;
    }
    var retString = "You see a healthly " + this.name + ".<br>";
    retString += " It does " + this.damage + " damage.<br>";
    retString += " Watchout! It has " + this.hp + "helth.<br>"
    return retString;
  }
}
