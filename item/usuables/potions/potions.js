/*Potions
the basis for all potions
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param value {int} the value of the item
@param type {string} either the name of the collection the item belings to or trash
@param damage {int} the value of damage a potion does*/
class Potion extends Item {
  constructor(name, icon, desc, value, type, damage){
    super(name, icon, desc, value, type);
    this._damage = damage;

  }

  // name: this shows the monsters' name.
  // icon: the single character that shows up on the map
  // desc: the description of the item
  // type: this determines what kind the item is. For example, you can see if it is armor, weapon, (vendor trash?) or potions.
  // value: the amount of gold pieces that you need to pay for an item.
  // damage: The amount of damage the potion attack can deal on an enemy.

  get damage(){ return this._damage; }
  set damage(damage){ this._damage = damage; }

<<<<<<< HEAD
  /*attackDam()
  @return {int} a number between damage.min and damage.max*/
=======
/*
attackDam()
@returns {int} a number between damage.min and max
*/
>>>>>>> Bowen
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
