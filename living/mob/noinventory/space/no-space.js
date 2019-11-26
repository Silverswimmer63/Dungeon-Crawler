class Nospace extends Noinventory {
constructor(name, type, hp, desc, icon, attackDam){
  super(name, type, hp, desc, icon, attackDam);
}
}

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
