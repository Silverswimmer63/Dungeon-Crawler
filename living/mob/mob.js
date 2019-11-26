class Mob extends Living{
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon)
    this._attackDam = attackDam;
  }
  get attackDam(){ return this._attackDam; }
  set attackDam(attackDam){ this._attackDam = attackDam; }
}
