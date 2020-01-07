class Melee extends Weapon {
  constructor (name, icon, desc, value, damage){
  super (name, icon, desc, value, damage);
  }
  text(){
    var retString = super.text();
    return retstring + " Is a weapon.";
  }
}
