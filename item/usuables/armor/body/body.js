console.log("Bowen.js linked");
//Body Body list
const COMPLETE_Body_BODY_LIST = [
  {name: "Leather",
  type: Body,
  value: 5,
  desc: "This body Body protects you from basic, low damage attacks",
  icon: "&",
  damageResist:.1
},
  {name: "Chainmail",
  type: Body,
  value: 10,
  desc: "A better suit of Body that protects you slightly more from attacks.",
  icon: "&",
  damageResist:.2
  },
  {name: "Copper",
  type: Body,
  value: 15,
  desc: "This is a stronger upgrade and is better at resisting small weapona attacks",
  icon: "&",
  damageResist:.3
  },
  {name: "Bronze",
  type: Body,
  value: 20,
  desc: "The better version than the last one. What did you expect?",
  icon: "&",
  damageResist:.4
  },
  {name: "Iron",
  type: Body,
  value: 25,
  desc: "This protects you from medium-level attacks",
  icon: "&",
  damageResist:.5
  },
  {name: "Steel",
  type: Body,
  value: 30,
  desc: "A better upgrade that protects you from aggressive attacks",
  icon: "&",
  damageResist:.6
  },
  {name: "Silver",
  type: Body,
  value: 40,
  desc: "A better upgrade that protects you for heavy aggressive attacks",
  icon: "&",
  damageResist:.7
  },
  {name: "Platinum",
  type: Body,
  value: 50,
  desc: "This is the best suit of Body on the market that you can buy/get",
  icon: "&",
  damageResist:.8
  }
]

class Body extends Armor {
  constructor(name, icon, value, desc, damageResist) {
    this._name = name;// the this keywodr means thet it is something the class owns
    this._icon = icon;
    this._value = value;
    this._desc = desc;
    this._damageResist = damageResist;//it is a number value for resistance
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
