const COMPLETE_MythologicalIN_LIST= [
  {
    name: "Chinese guardian lion",
    type: Mythological,
    hp: 20,
    desc:"Stone Lion",
    icon:"M",
    attackDam: {min: 10, max: 15} ,
  },
  {
    name: "Girimehkala",
    type: Mythological,
    hp: 20,
    desc:"Elephant that has powers",
    icon:"M",
    attackDam: {min: 10, max: 15},
  },
  {
    name: "Cenetur",
    type: Mythological,
    hp: 20,
    desc:"Half-man, half horse creatures.",
    icon:"M",
    attackDam: {min: 10, max: 15},
  },
]

const COMPLETE_No_MythologicalIN_LIST= [
  {name:"Gremlin",
  hp: 10,
  attackDam:{min:5, max:10},
  icon:"m",
  desc: "little green monsters as common as rats in the city honestly mostly just an annoyance more than anything",
  type: NoMythological,
},
{name:"lemures",
hp:10,
attackDam:{min:5, max:10},
icon:"m",
desc:"dark spirits that look like ghost emmos",
type:NoMythological,
},
{name:"Azeban",
hp: 10,
attackDam:{min:5, max:10},
icon:"m",
desc:"imagine rocket from guardians of the galaxy but as a poor theff",
type:NoMythological,
},
{name:"Minitar",
hp: 70,
attackDam:{min:20, max:40},
icon:"M",
desc:"He's a sweetheart if you get to know him",
type:NoMythological,
},
{name:"Areas",
hp: 100,
attackDam:{min:30, max:54},
icon:"A",
desc:"He's always mad because he has daddy issues",
type:NoMythological,
}
]

const COMPLETE_Cowboy_LIST = [
  {
    name: "Bandit",
    type: Cowboy,
    hp: 40,
    desc: "He wants to take all of you possessions: your money, your clothes, and your mouse",
    icon: "T",
    attackDam: {max: 30, min:20},
  },
  {
    name: "Drunk Man",
    type: Cowboy,
    hp: 40,
    desc: "He may be drunk but he can still kill you because the strength of drunk people is unmatched",
    icon: "T",
    attackDam: {max: 30, min:20},
  },
  {
    name: "Outlaw",
    type: Cowboy,
    hp: 40,
    desc: "Will do anything to get anything",
    icon: "T",
    attackDam: {max: 30, min:20},
  }
]



  const COMPLETE_Inventory_SPACE_LIST = [
    {name: "Robots",
    type: Space,
    hp: 60,
    desc: "All generic futuristic space video games have untamable robots, so why we do the same thing. These are deadly bois that are fun to fight.",
    icon: "$",
    attackDam: 50,
    drop: "Chainmail Armor"
  },
    {name: "Knife Roomba",
    type: Space,
    hp: 60,
    desc: "In this world, Roombas are tired of cleaning up things that humans are too lazy to do. Now these bloodthirsty are ready to spill your blood and then clean it up.",
    icon: "$",
    attackDam: 50,
    drop: "Copper Armor"
  },
    {name: "Self-Driving Cars",
    type: Space,
    hp: 60,
    desc: "That classic, beloved Vroom-Vroom noise becomes the stuff of nightmares in this dystopian universe. You better watch out since they're stopping for no one.",
    icon: "$",
    attackDam: 50,
    drop: "Bronze Armor"
  },
    {name: "Steve Jobs", type: Space,
    hp: 160,
    desc: "Our beloved iPhone and Windows creator is bringing back something more than a new line of the same iPhone and Windows tech support: vengeance and an unquenchable thirst for blood. But mostly vengeance since you're not buying his insanely high priced iPhones or install the Windows 10 when we clearly ask you to update and restart your computer without closing the computer.",
    icon: "$",
    attackDam: 80,
    drop: "Silver Armor"
    }
  ]

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
