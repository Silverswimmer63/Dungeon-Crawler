class Potion extends Item {
  constructor(name, icon, desc, value, type, damage){
    super(name, icon, desc, value, type);
    this._damage = damage;

  }
  get damage(){ return this._damage; }
  set damage(damage){ this._damage = damage; }

  /*attackDam()
  @return {int} a number between damage.min and damage.max
  */
  attackDam(){
    return Utils.randMath(this.damage.min, this.damage.max);
  }
  toString(){
    var retStr = " you see a " + this.name + ". It is worth" + this.value + ".";
    retStr += "It can be described as: " + this.desc; + this.class + "it's a"
    return retStr
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
