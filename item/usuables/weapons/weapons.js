class Weapon extends Item{
  constructor(name, icon, desc, value, type, damage, level){
    super(name, icon, desc, value, type, level)
    this._damage = damage;
  }

  get damage() { return this._damage; }
  set damage(damage) { this._damage = damage; }

  attackDam(){ return Utils.randMath(this.damage.min, this.damage.max); }

  text(){
    var retString = super.text();
    return retString;
  }
}
