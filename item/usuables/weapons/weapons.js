class Weapon extends Item{
  constructor(name, icon, desc, value, type, damage, text){
    super(name, icon, desc, value, type, text)
    this._damage = damage;
  }
  get damage() { return this._damage; }
  set damage(damage) { this._damage = damage; }

  attackDam(){ return Utils.randMath(this.damage.min, this.damage.max); }

  
}
