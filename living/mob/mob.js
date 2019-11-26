class Mob{
  constructor(name, type, hp, desc, icon){
    super(name, type, hp, desc, icon, attackDam)
    this._attackDam = attackDam;
  }
  get attackDam(){ return this._attackDam; }
  set attackDam(attackDam){ this._attackDam = attackDam; }
