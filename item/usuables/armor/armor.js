class Armor extends Item {
  constructor (name, icon, value, desc, damageresist) {
    super (name, icon, value, desc);
    this._damageresist = damageresist;
  }
  get damageresist(){ return this._damageresist; }
  set damageresist(damageresist){ this._damageresist = damageresist; }

  text(){
    var retString = super.text();
    return "You see some armor on the ground.<br> It is " + retString + "It has a damage resist of " + this._damageresist;
  }
  

}
