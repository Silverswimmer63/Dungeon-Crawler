const COMPLETE_ARMOR_LIST= [
  {
    name: "Leather Legs",
    type: Item,
    value: 2,
    desc:"Low damege protection",
    icon:"<",
    damageresist:.04 ,
  },
  {
  name: "ChainMail Legs",
    type: Item,
    value: 5,
    desc:"higher damege protection then Leather",
    icon:"<",
      damageresist:.14,
  },
  {
    name: "Copper Legs",
  type: Item,
  value: 10,
  desc:"higher damege protection then ChainMail",
  icon:"<",
    damageresist:.24,
},
{
  name: "Bronze Legs",
type: Item,
value: 15,
desc:"higher damege protection then Copper",
icon:"<",
  damageresist:.34,
},
{
  name: "Iron Legs",
type: Item,
value: 20,
desc:"higher damege protection then Bronze",
icon:"<",
  damageresist:.44,
},
{
  name: "Steel Legs",
type: Item,
value: 25,
desc:"higher damege protection then Iron",
icon:"<",
  damageresist:.54,
},
{
  name: "Silver Legs",
type: Item,
value: 33,
desc:"higher damege protection then Steel",
icon:"<",
  damageresist:.64,
},
{
  name: "Platinum Legs",
type: Item,
value: 42,
desc:"Max damege protection",
icon:"<",
  damageresist:.74,
}
]


class Item {
  constructor(name, type, icon, value, desc, damageresist) {
   (name, icon, value, desc)
    this._name = name;// the this keywodr means thet it is something the class owns
    this._icon = icon;
    this._value = value;
    this._desc = desc;
  }
  get name() {
    return this._name
  }
  set name(name) {
    this._name = name;
  }
  get icon(){
    return this._icon;
  }
  set icon(icon){
    this._icon = icon;
  }
  get value(){
    return this._value;
  }
  set value(value){
    this._value = value;
  }
  get desc(){
    return this._desc;
  }
  set desc(desc){
    this._desc = desc;
  }
  get damageresist(){
    return this._damageresist;
  }
  set damageresist(damageresist){
    this._damageresist = damageresist;
  }
  toString(){
    var retStr = "You see a " + this.name + ". It is worth " + this.value + ".";
    retStr += "It can br described as: " + this.desc;
    return retStr;
  }
}
