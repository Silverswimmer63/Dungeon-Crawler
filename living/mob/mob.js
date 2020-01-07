 class Mob extends Living{
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon)
    this._alive = true;
  }
  get alive(){ return this._alive; };
  set alive(alive){ this._alive = true; }

  attackDam(){
    /*return Utils.randMath(this.damage.min, this.damage.max);*/
    if (this._status == "frozen"){
      return 0;
    }
    if ("duration" in this.damage){
      var dam = Utils.randMath(this.damage.min, this.damage.max);
      return{damage:dam,  type:this.damage.type, duration:this.damage.duration};
    }
    return {damage:dam,  type:this.damage.type};
  }

    get range(){ return this._range; }
    set range(range){ this._range = range; }

  takeDam(damage){
    if (damage.type == "electric")&&(this.status.type == "frozen")) {
      this.hp = this.hp - damage;
    }
    else {
      this.hp = this.hp - Math.floor(damage.damage*1.5);
    }
    if ("durantion" in damage) {
      this._status = damage;
    }
    if (this.hp <= 0) {
      this.alive = false;
      this.hp = 0;
    }
  }
  /*receaves the dammage to the object and check if it is dead @ param danmage {int}*/
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
