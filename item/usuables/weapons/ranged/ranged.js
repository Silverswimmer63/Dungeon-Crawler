
class Ranged extends Weapon {
  constructor (name, icon, value, desc, damage, range){
  super (name, icon, value, desc, damage);
    this._range = range;
  }
  get range(){ return this._range; }
  set range(range){ this._range = range}

  text(){
    var retString = super.text();
    return retstring; 
  }
  toString(){
  var retStr = " you see a " + this.name + ". It is worth" + this.value + ".";
  retStr += "It can be described as: " + this.desc; + this.class + "it's a";
  return retStr;
}

}
