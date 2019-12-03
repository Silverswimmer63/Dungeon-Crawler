class Potion extends Item {
  constructor(name, icon, desc, value, type, damage){
    super(name, icon, desc, value, type);
    this._damage = damage;
  }
  get damage(){ return this._damage; }
  set damage(damage){ this._damage = damage; }

//returns a number between damage.min and damage.max
  attackDam(){

  }
}
