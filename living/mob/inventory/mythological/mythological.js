class Mythological extends Inventory{
  constructor(name, type, hp, desc, icon, attackDam, level){
    super(name, type, hp, desc, icon, attackDam, level);
  }

  /*text()
  retruns a user friendly line of text for output
  @return {string} text for output ot the screen
  */
  text(){
    var retString = super.text();
    return retString;
  }
}
