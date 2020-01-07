/*Weapon
the basis for all weapons, splits to ranged and melee
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param value {int} the value of the item
@param type {string} either the name of the collection the item belings to or trash
@param damage {int} the value of damage a weapon does*/
class Weapon extends Item{
<<<<<<< HEAD
  constructor(name, icon, desc, value, type, level, damage){
    super(name, icon, desc, value, type, level)
    this._damage = damage;//gives a damage value
=======
  constructor(name, icon, desc, value, type, damage, level){
    super(name, icon, desc, value, type, level)
    this._damage = damage;
>>>>>>> master
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
