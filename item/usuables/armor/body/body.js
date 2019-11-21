console.log("body.js linked");
//Armor Armor list
const COMPLETE_Armor_Armor_LIST = [
  {name: "Leather",
  type: Armor,
  value: 5,
  desc: "This Armor Armor protects you from basic, low damage attacks",
  icon: "&",
  damageResist:.1
},
  {name: "Chainmail",
  type: Armor,
  value: 10,
  desc: "A better suit of Armor that protects you slightly more from attacks.",
  icon: "&",
  damageResist:.2
  },
  {name: "Copper",
  type: Armor,
  value: 15,
  desc: "This is a stronger upgrade and is better at resisting small weapona attacks",
  icon: "&",
  damageResist:.3
  },
  {name: "Bronze",
  type: Armor,
  value: 20,
  desc: "The better version than the last one. What did you expect?",
  icon: "&",
  damageResist:.4
  },
  {name: "Iron",
  type: Armor,
  value: 25,
  desc: "This protects you from medium-level attacks",
  icon: "&",
  damageResist:.5
  },
  {name: "Steel",
  type: Armor,
  value: 30,
  desc: "A better upgrade that protects you from aggressive attacks",
  icon: "&",
  damageResist:.6
  },
  {name: "Silver",
  type: Armor,
  value: 40,
  desc: "A better upgrade that protects you for heavy aggressive attacks",
  icon: "&",
  damageResist:.7
  },
  {name: "Platinum",
  type: Armor,
  value: 50,
  desc: "This is the best suit of Armor on the market that you can buy/get",
  icon: "&",
  damageResist:.8
  }
]

class Body extends Armor {
  constructor(name, icon, value, desc, damageResist) {
    super(name, icon, value, desc, damageResist);
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
  get damageResist(){
    return this._damageResist;
  }
  set damageResist(damageResist){
    this._damageResist = damageResist;
  }

  toString(){
    var retStr = "You see a " + this.name + ". It is worth " + this.value +  "and the damage resistance value is: " + this.damageResist +".";
    retStr += "It can be described as: " + this.desc;
    retStr += ""
    return retStr;
  }
}
