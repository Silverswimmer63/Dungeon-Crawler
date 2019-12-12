class Weapon extends Item{
  constructor(name, icon, desc, value, type, damage){
    super(name, icon, desc, value, type)
    this._damage = damage;
  }

  get damage() { return this._damage; }
  set damage(damage) { this._damage = damage; }

  /*attackDam()
  @return {int} a number between damage.min and damage.max*/
  attackDam(){ return Utils.randMath(this.damage.min, this.damage.max); }

  /*text()
  retturns a user friendly line of text for output to the screen
  @return {string} text for output to the screen*/
  text(){
    var retString = super.text();
    return retString;
  }
}
