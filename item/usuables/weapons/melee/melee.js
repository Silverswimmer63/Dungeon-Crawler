class Melee extends Weapon {
  constructor (name, icon, value, desc, damage){
  super (name, icon, value, desc, damage);
  }
  text(){
    var retString = super.text();
    return retstring + " Is a weapon.";
  }
}
