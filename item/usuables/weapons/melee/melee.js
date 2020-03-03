class Melee extends Weapon {
  constructor (name, icon, desc, value, type, damage, level){
  super (name, icon, desc, value, type, damage, level);
  }

  /*text()
  retruns a user friendly line of text for output
  @return {string} text for output ot the screen
  */
  text(){
    var retString = super.text();
    return retstring + " Is a weapon.";
  }
}
