class Melee extends Weapon {
  constructor (name, icon, value, desc, damage){
  super (name, icon, value, desc, damage);
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
