class Mob extends Living{
  constructor(name, type, hp, desc, icon, attackDam, level){
    super(name, type, hp, desc, icon, level)
    this._alive = true;
    this._level = level;
  }
  get alive(){ return this._alive; };
  set alive(alive){ this._alive = alive; }

  get level(){ return this._level; };
  set level(level){ this._level = level; }
  /* attackDam()
  @return {int} a number between damage.min and damage.max
  */
  attackDam(){
      if (this._status == "frozen") {
        return 0;
      }
      if ("duration" in this.damage) {
        var dam = Utils.randMath(this.damage.min, this.damage.max);
        return {damage:dam, type:this.damage.type, duration:this.damage.duration};
      }
      return {damage:dam, type:this.damage.type};
  }

    get range(){ return this._range; }
    set range(range){ this._range = range; }

  /*takeDam(damage)
  recieves the damage to the object and checks if it is dead
  @param damage {int} a positive number
  */
  takeDam(damage){
  /*  If there is a duration, then it should set the status of the monster to an
    object that looks roughly like: {type: "frozen", duration: 5, damage: 5}*/
    if ((damage.type == "electric")&&(this.status.type == "frozen")) {
      this.hp = this.hp - Math.floor(damage.damage*1.5);
    }else {
      this.hp = this.hp - damage;
    }
    if ("duration" in damage) {
      this._status = damage;
    }
    if (this.hp <= 0) {
      this.alive = false;
      this.hp = 0;
    }
  }

  /*text()
  retruns a user friendly line of text for output
  @return {string} text for output ot the screen
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

  toString(){
    return "<span style=\"color:red\">"+ this.icon +"</span>"
  }
}
