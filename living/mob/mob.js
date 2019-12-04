class Mob extends Living{
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon)
    this._alive = true;
  }
  get alive(){ return this._alive; };
  set alive(alive){ this._alive = true; }

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
}
