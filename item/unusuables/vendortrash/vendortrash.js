class VendorTrash extends Item {
  constructor(name, icon, desc, value, type){
    super(name, icon, desc, value, type);
  }
  toString(){
    var retStr = " you see a " + this.name + ". It is worth" + this.value + ".";
    retStr += "It can be described as: " + this.desc; + this.class + "it's a"
    return retStr
  }
}
