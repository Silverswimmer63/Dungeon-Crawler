class Mob extends Living{
  constructor(name, type, hp, desc, icon, attackDam, status = "none"){
    super(name, type, hp, desc, icon)
    this._alive = true; // this sets the character/hero as alive
  }
  // name: this shows the monster's name.
  // type: this determines what type of monster it is, either from space, cowboy, or mythological
  // hp: the amount of the life it has.
  // desc: the description of the monster
  // icon: the single character that shows up on the map
  // attackDam: The amount of damage monsters can attack you with.
  // status: To check and see your current situation.
  // damage: Makes the hero/character lose hp/life
  get alive(){ return this._alive; };
  set alive(alive){ this._alive = true; }
  get status(){ return this._status; };
  set status(status){ return this._status }


  /*
  3. Change the method for monsters attacking to check if the status is not equal to none. If it is not, check to see if the status.type is frozen. If it is, then
  return 0;
  4. Go though the various item assets, and for anything that produces damage or healing add a key "type" to their damage object (right now it looks like {min: some
  number, max: some number}). type should be set to one of the following - "damage" (normal damage), "healing", "frozen", or "burning"
  5. if the type is "frozen" or "burning" add another key to the object, this key should be "duration"
  6. Do the same for all the monster assets.
  */
  /*
  Attack methods - should no longer return a number, should return an object
IF the weapon/monsters damage property has a duration, then it should look like:
{damage: *random damage number*, type: type, duration: duration}
Else it should look like:
{damage: *random damage number*, type: type}
-----------------------------
damage taking methods -
Right now these expect to get a number and subtract that, and do some other things.
Now it should expect an object of the type listed above.
If there is a duration, then it should set the status of the monster to an object that looks roughly like: {type: "frozen", duration: 5, damage: 5}

If the type is electric, & the monster has the status frozen, multiply the damage by 1.5
*/
/*
attackDam() *Updated
This will check to see if the object in damage has the key 'duration'. If so, it will not only generate a random number
between damage.min and damage.max, it will also add the key duration and what duration is. if there isn't a duration key
then it will generate a random number and return the keys with damage and type within damage. Plus, it will check to see
if the status is equal to frozen. If it is, then return 0.
@returns {obj}
*/
  attackDam(){
    if (this._status == "frozen") {
      return 0;
      }
      if ("duration" in this.damage){
      var dam = Utils.randMath(this.damage.min, this.damage.max);
      return {damage: dam, type: this.damage.type, duration: this.damage.duration};
    }
    return {damage:dam, type:this.damage.type};
   }

  get range(){ return this._range; }
  set range(range){ this._range = range; }

  /*
  takeDam()
  Receives the damage to the hp and checks to see if you are alive or not.
  It also checks to see if the damage the hero/character is receiving is a combination of electricity and freezing attack. If it is,
  then the damage will be multiplied by 1.5 and the hero/character's hp will lose the damage along with the extra damage when electricity
  and freeze is combined. Furthermore, when the character dies, the hp will be reset to 0 so that it will give us any errors, like come
  back to life. We can make sure it stays dead.
  @param damage {object} a positive whole number
  @return {object} It will either return the keys damage, type, and duration, or return, the keys damage and type.
  */
  takeDam(damage){
      if ((damage.type == "electricity") && (this.status.type == "freezing")) {
      this.hp = this.hp - Math.floor(damage.damage*1.5);
      }else{
      this.hp = this.hp - damage.damage;
      }
      if (this.hp <= 0) {
        this.alive = false;
        this.hp = 0;
      }
      if ("duration" in this.damage){
        var dam = Utils.randMath(this.damage.min, this.damage.max);
        return {damage: dam, type: this.damage.type, duration: this.damage.duration};
      }
    return {damage:dam, type:this.damage.type};
    }

  /*
  text()
  returns a user friendly line of text for output to the screen
  @return {string} text for the output to the screen
  */
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
