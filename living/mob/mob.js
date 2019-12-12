class Mob extends Living{
  constructor(name, type, hp, desc, icon, attackDam){ //also the attackDam lets makes a random value for the attack damage
    super(name, type, hp, desc, icon)
    this._alive = true; // this sets the character/hero as alive
  }
  get alive(){ return this._alive; };
  set alive(alive){ this._alive = true; }


  /*
  attackDam()
  @returns {int} a number between damage.min and max
  */
  attackDam(){
    return Utils.randMath(this.damage.min, this.damage.max);
  }

  get range(){ return this._range; }
  set range(range){ this._range = range; }


  /*
  takeDam() receives the damage to the hp and checks to see if you are alive or not.
  @param damage {int} a positive whole number
  */
  takeDam(damage){
    this.hp = this.hp - damage;
    if (this.hp <= 0) {
      this.alive = false;
      this.hp = 0;
    }
  }

  /*
  text()
  returns a user friendly line of text for output to the screen
  @return {string} text for the output to the screen
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
