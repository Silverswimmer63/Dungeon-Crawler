class Mob extends Living{
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon)
    this._alive = true;//to tell if the enemy is alive ore dead

  }
  get alive(){ return this._alive; };
  set alive(alive){ this._alive = true; }

  get range(){ return this._range; }
  set range(range){ this._range = range; }


  /*attackDam()
  @return {int} a number between damage.min and damage.max
  */
  attackDam(){
    if (status = frozen) { return 0; }
    else { return Utils.randMath(this.damage.min, this.damage.max); }
  }

  /*takeDam(damage)
  receives the damage to the object and checks if it is dead
  @param damage {int} a positive whole number
  */
  takeDam(damage){
    this.hp = this.hp - damage;
    if (this.hp <= 0) {
      this.alive = false;
      this.hp = 0;
    }
  }

  /*text()
  returns a user frendly line of text for output to the screen
  @return {string} text for output to the screen
  */
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
