class Melee extends Weapon {
  constructor (name, type, value, desc, damage, icon, level){
  super (name, type, value, desc, damage, icon, level);
  }
  /* text()
  returns a user friendly line of text output to the screen
  @return {string} text for output to the screen
  */

  text(){
    var retString = super.text();
    return retstring + " Is a weapon.";
  }
}
