class Mob extends Living{
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon)
    this._alive = true;
  }
  get alive(){ return this._alive; }
  get range(){ return this._range; }
  get mob(){ return "<span class='mob'>" + this._mob + "</span>"}

  set alive(alive){ this._alive = true; }
  set range(range){ this._range = range; }
  set mob(mob){ this._mob = mob; }

  attackDam(){
    return Utils.randMath(this.damage.min, this.damage.max);
  }

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
