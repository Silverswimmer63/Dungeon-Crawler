class Weapon extends Item{
  constructor(name, type, value, desc, icon, damage, level){
    super(name, type, value, desc, icon, level)
    this._damage = damage;
  }

  get damage() { return this._damage; }
  set damage(damage) { this._damage = damage; }

  /* attackDam()
  @return {int} a number between damage.min and damage.max
  */
  attackDam(){ return Utils.randMath(this.damage.min, this.damage.max); }

  /*text()
  retruns a user friendly line of text for output
  @return {string} text for output ot the screen
  */
  text(){
    var retString = super.text();
    return retString;
  }
}
