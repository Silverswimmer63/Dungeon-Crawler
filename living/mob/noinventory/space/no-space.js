class Nospace extends Living {
constructor(name, type, hp, desc, icon, attackDam){
  super(name, type, hp, desc, icon, attackDam);
}
}
/*  this._name = name;
  this._type = type;
  this._hp = hp; // all hp is 50
  this._desc = desc;
  this._icon = icon; // $ will be the icon
  this._attackDam = attackDam // min: 35, max:45
 }

 /****************************** Getters & Setters ****************************

get name() { return this.name; }
set name(name) { this._name = name; }

get type() { return this._type; }
set type(type) { this._type = type; }

get hp() { return this._hp; }
set hp(hp) { this._hp = hp; }

get desc() { return this._desc; }
set desc(desc) { this._desc = desc; }

get icon() { return this._icon; }
set icon() { this._icon = icon; }

get attackDam() { return this._attackDam; }
set attackDam(attackDam) {this._attackDam = attackDam; }
} */

const COMPLETE_Nospace_LIST = [
  {name: "Androids",
  type: Nospace,
  hp: 50,
  desc: "Dudes that look like terminator, but not as buff.",
  icon: "$",
  attackDam: {min: 35, max:45},
},
  {name: "Rouge Alexa",
  type: Nospace,
  hp: 50,
  desc: "I knew that Alexa would become the supreme leaders someday.",
  icon: "$",
  attackDam: {min: 35, max:45},
},

  {name: "Cyber Bully",
  type: Nospace,
  hp: 50,
  desc: "I imagined him to be a lot bigger in person.",
  icon: "$",
  attackDam: {min: 35, max: 45},
},

  {name: "Tech Support",
  type: Nospace,
  hp: 130,
  desc: "Cannot actually help you, just keeps you on hold for an hour.",
  icon: "$",
  attackDam: {min: 35, max: 45},
}

]
