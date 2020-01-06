class Mob extends Living{
  constructor(name, type, hp, desc, icon, attackDam, status){
    super(name, type, hp, desc, icon)
    this._alive = true;
    this._status = none;
}
  get status(){ return this._status; }


  get icon(){ return "<span class='mob'>" + this._icon; + "</span>" }
  set icon(icon){ this._icon = icon; }

  get alive(){ return this._alive; }
  set alive(alive){ this._alive = true; }

  get range(){ return this._range; }
  set range(range){ this._range = range; }

  /*  attackDam()
  takes the monters damages and durations
  @return {int} a number between damage.min and damage.max
  */

  attackDam(){
    if (status.type == "frozen") {
      return 0;
      }
      if( "duration" in this.damage){
        var dam = Utils.ranMath(this.damage.mon, this.damage.min);
        return {damage:dam, type:this.damage.type, duration:this.damage.duration};
    }
    return {damage:dam, type:this.damage.type};
  }

/* takeDam()
receives the damage to the object and checks if it is alive
@param damage {} a positive number
*/
  takeDam(damage){
    if ((damage.type == "electricity")&&(this.status.type == "frozen")) {
      this.hp = this.hp - Math.floor(damage.damage*1.5);
    }else {
      this.hp = this.hp - damage.damage;
    }
    if ("duration" in damage) {
      this._status = damage;
    }
    if (this.hp <= 0) {
      this.alive = false;
      this.hp = 0;
    }
  }

  /* text()
  returns a user friendly line of text output to the screen
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
