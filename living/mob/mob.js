class Mob extends Living{
/*  function parameter_status
{type: "frozen", duration: 5, damage: {min: 3, max: 5}} {
  if (y === "none") {
    y = 0;
  }
}
*/
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon)
    this._alive = true;
  }
  get alive(){ return this._alive; };
  set alive(alive){ this._alive = true; }

  attackDam(){
    return Utils.randMath(this.damage.min, this.damage.max);
  }

    get range(){ return this._range; }
    set range(range){ this._range = range; }

/* takeDam(damage)
recives the damage to the object and checks if it is Deadly
@param damage{obj}a positive whole number*/
  takeDam(damage){
    /*If there is a duration, then it should set the status of the monster to an object that looks roughly
     like: {type: "frozen", duration: 5, damage: 5}*/
    if ((damage.type == "electric")&&(this.status.type== "frozen")) {
      this.hp = this.hp - Math.floor(damage.damage*1.5);
    } else {
      this.hp = this.hp - damage.damage;
    }
    if ("duration" in damage) {
      this._status = damage;

    }
    if (this.hp <= 0) {
      this.alive = false;
      this.hp = 0;
    }
  }


  attackDam(){
    if (this._status == "frozen"){
      return 0;
    }
    if ("duration"in this.damage){
      var dam= Utils.random(this.damage.mon, this.damage.min);
      return {damage: dam, type:this.damage.type, duration: this.damage.duration}
  }
  return{damage:dam, type:this.damage.type}
}
  /*text()
  return a user friendly line
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
/*
1. Add a parameter_status to the parent class of all monsters. Set this to "none" by default.
This will be "none" or it will be an object with the keys type, duration, damage
(for example {type: "frozen", duration: 5, damage: {min: 3, max: 5}}
2. Add a getter for status
3. Change the method for monsters attacking to check if the status is not equal to none.
If it is not, check to see if the status.type is frozen. If it is, then return 0;
4. Go though the various item assets, and for anything that produces damage or healing add
a key "type" to their damage object (right now it looks like {min: some number, max: some number}).
type should be set to one of the following - "damage" (normal damage), "healing", "frozen", or "burning"
5. if the type is "frozen" or "burning" add another key to the object, this key should be "duration"
6. Do the same for all the monster assets.
*/
/*
We will be working on making changes for all the parts of the monsters and items that need to be in
place to add back in DoT and 2ndary effects to combat in the next few days.
A. We will be changing how things give and take damage so that those are objects
and can convey the type of damage and the duration, if need be
B. We will start our update method for monsters, initially this will be used simply
to count down any duration timers, (and apply any DoT damage) but will do more when we have more of a game.
C. We will turn _status into an array, and will have to change attack method and update to support this
 (so yeah, we can have freezing & burning monsters all at the same time, fun)
*/
