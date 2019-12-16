
/*
Class Mob
@param Name {str}: is name of mob or enemy
@param type {str}: is type of the mob
@param hp {int}: health of the mob
@param desc {str}: description of the enemy/mob
@param icon {str}: is the icon of the enemy
@param attackDam {int}: the damage that the enemy/mob does
*/
class Mob extends Living{
  constructor(name, type, hp, desc, icon, attackDam){ //also the attackDam lets makes a random value for the attack damage
    super(name, type, hp, desc, icon)
    this._alive = true; // this sets the character/hero as alive
  }
  get alive(){ return this._alive;}
  set alive(alive){ this._alive = true; }
  get range(){ return this._range; }
  set range(range){ this._range = range; }

  /*attackDam()
  @return {int} a number between damage.min and damage.max*/

  attackDam(){
    return Utils.randMath(this.damage.min, this.damage.max);
    }
  /*
   takeDam() receives the damage to the ghp and checks to see if you are alive or not
   @param damage {int} pos whole # 
   @return {int} 
    */
  takeDam(damage){
    if(status !== none){
      
    }
    else if(status == "frozen"){
      return 0;
    }
    this.hp = this.hp - damage;
    if (this.hp <= 0) {
      this.alive = false;
      this.hp = 0;
    }
  }

  /*text()
  retturns a user friendly line of text for output to the screen
  @return {string} text for output to the screen*/
  text(){
    if (!alive){
      var retString = "Looks like a dead " + this.name + " Its HP is 0 now.<br>";
      return retString;
    }
    var retString = "You see a healthly " + this.name + ".<br>";
    retString += " It does " + this.damage + " damage.<br>";
    retString += " Watchout! It has " + this.hp + "helth.<br>"
    return retString;
  }
}
