class Potion extends Item {
  constructor(name, icon, desc, value, type, damage){
    super(name, icon, desc, value, type);
    this._damage = damage;

  }
  get damage(){ return this._damage; }
  set damage(damage){ this._damage = damage; }

//returns a number between damage.min and damage.max
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
