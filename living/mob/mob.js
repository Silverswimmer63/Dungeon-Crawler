
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
<<<<<<< HEAD
    this._alive = true;//to tell if the enemy is alive ore dead

=======
    this._alive = true; // this sets the character/hero as alive
>>>>>>> master
  }
  get alive(){ return this._alive;}
  set alive(alive){ this._alive = true; }
  get range(){ return this._range; }
  set range(range){ this._range = range; }

  /*attackDam()
  @return {int} a number between damage.min and damage.max*/

  get range(){ return this._range; }
  set range(range){ this._range = range; }


  /*attackDam()
  @return {int} a number between damage.min and damage.max
  */
  attackDam(){
<<<<<<< HEAD
    if (this.status == "frozen") { return 0; }
    if ("duration" in this.damage){
      var dam = Utils.randMath(this.damage.min, this.damage.max);
      return {damage:dam, type:this.damage.type, duration:this.damage.duration};
    }
    return {damage:dam, type:this.damage.type};
  }

  /*takeDam(damage)
  receives the damage to the object and checks if it is dead
  @param damage {int} a positive whole number
  */
  takeDam(damage){
    /*if there is a duration, then it should set the status of the monster to an
    object that looks roughly like: {type: "frozen", duraion: 5, damage: 5}*/
    if ((damage.type == "electric") && (this.status.type == "frozen")) {
      this.hp = this.hp - Math.floor(damage*1.5);//damage is now an object
    }else {
      this.hp = this.hp - damage.damage;
    }
    if ("duration" in damage) {
      this._status = damage;
    }
=======
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
>>>>>>> master
    if (this.hp <= 0) {
      this.alive = false;
      this.hp = 0;
    }
  }

  /*text()
<<<<<<< HEAD
  returns a user frendly line of text for output to the screen
  @return {string} text for output to the screen
  */
=======
  retturns a user friendly line of text for output to the screen
  @return {string} text for output to the screen*/
>>>>>>> master
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
