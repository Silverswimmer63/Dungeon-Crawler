/*This is not actually part of the monster thing*/
/*make an armor class in a new file called armor.js that extends item.
Have it add 2 new properties, _damageSoak and _location and getters and setters for those properties.
*/
class Armor extends Item {
  constructor(name, icon, value, damageSoak, location, desc) {
    super(name, icon, value, desc);
    this._damageSoak = damageSoak;
    this._location = location;
  }
  get damageSoak(){
    return this._damageSoak;
  }
  set damageSoak(damageSoak){
    this._damageSoak = damageSoak;
  }
  get location(){
    return this._location;
  }
  set location(location){
    this._location = location;
  }
}
