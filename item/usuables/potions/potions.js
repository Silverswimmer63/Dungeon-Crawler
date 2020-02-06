class Potion extends Item {
  constructor(name, type, value, desc, icon, damage, level){
    super(name, type, value, desc, icon, damage, level);
    this._damage = damage;

  }
  get damage(){ return this._damage; }
  set damage(damage){ this._damage = damage; }


  /* attackDam()
  @return {int} a number between damage.min and damage.max
  */
  attackDam(){
    return Utils.randMath(this.damage.min, this.damage.max);
  }
}
/*
function rollDice(numDice, numSides){
var retVar = 0;
var rollDice = 0;
while (rollDice <= numDice) {
  var thing = Math.floor(Math.random()*numSides)+1;
  retVar += thing;
  rollDice++;
}
return retVar
}
*/
