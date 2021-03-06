const COMPLETE_MYTHOLOGICAL_IN_LIST= [
  {
    name: "Chinese guardian lion",
    type: Mythological,
    hp: 20,
    desc:"Stone Lion",
    icon:"M",
    attackDam: {min: 10, max: 15, type:"damage"} ,
    drop: "Leather Armor",
    level: 0
  },
  {
    name: "Girimehkala",
    type: Mythological,
    hp: 20,
    desc:"Elephant that has powers",
    icon:"M",
    attackDam: {min: 10, max: 15, type:"damage"},
    drop: "Chainmail Armor",
    level: 0
  },
  {
    name: "Cenetur",
    type: Mythological,
    hp: 20,
    desc:"Half-man, half horse creatures.",
    icon:"M",
    attackDam: {min: 10, max: 15,type:"damage"},
    drop: "Bronze Armor",
    range: 0,
    level: 0
  }
]

const COMPLETE_NO_MYTHOLOGICAL_IN_LIST= [
  {
    name:"Gremlin",
    hp: 10,
    attackDam:{min:5, max:10, type:"damage"},
    icon:"m",
    desc: "little green monsters as common as rats in the city honestly mostly just an annoyance more than anything",
    type: NoMythological,
    level: 0
  },
  {
    name:"lemures",
    hp:10,
    attackDam:{min:5, max:10, type:"damage"},
    icon:"m",
    desc:"dark spirits that look like ghost emmos",
    type:NoMythological,
    range: 0,
    level: 0
  },
  {
    name:"Azeban",
    hp: 10,
    attackDam:{min:5, max:10, type:"damage"},
    icon:"m",
    desc:"imagine rocket from guardians of the galaxy but as a poor theff",
    type:NoMythological,
    level: 0
  }
]

const COMPLETE_COWBOY_LIST = [
  {
    name: "Bandit",
    type: Cowboy,
    hp: 40,
    desc: "He wants to take all of you possessions: your money, your clothes, and your mouse",
    icon: "T",
    attackDam: {max: 30, min:20, type:"damage"},
    drop: "Leather Armor",
    range: 0,
    level: 1
  },
  {
    name: "Drunk Man",
    type: Cowboy,
    hp: 40,
    desc: "He may be drunk but he can still kill you because the strength of drunk people is unmatched",
    icon: "T",
    attackDam: {max: 30, min:20, type:"damage"},
    drop: "Chainmail Armor",
    level: 1
  },
  {
    name: "Outlaw",
    type: Cowboy,
    hp: 40,
    desc: "Will do anything to get anything",
    icon: "T",
    attackDam: {max: 30, min:20, type:"damage"},
    drop: "Bronze Armor",
    level: 1
  }
]

const COMPLETE_NO_COWBOY_LIST = [
  {
    name:"Kactis Karen",
    type:Nocowboy,
    hp:30,
    desc:"She's come to take the kids,but you don't have kids so she wants to speak with you're manager, but youre also not imployed so she wants to kill you instead",
    icon:"M",
    attackDam: {min: 15, max: 30, type:"damage"},
    range: 0,
    level: 1
  },
  {
    name:"snek",
    type:Nocowboy,
    hp:30,
    desc:"I hate sneks",
    icon:"M",
    attackDam: {min: 15, max: 30,type:"damage"},
    level: 1
  },
  {
    name:"Angry cow",
    type:Nocowboy,
    hp:30,
    desc:"(A series of angry moos that corilate unto one word)...Moo!",
    attackDam: {min: 15, max: 30, type:"damage"},
    icon:"M",
    level: 1
  }
]

const COMPLETE_INVENTORY_SPACE_LIST = [
  {
    name: "Robots",
    type: Space,
    hp: 60,
    desc: "All generic futuristic space video games have untamable robots, so why we do the same thing. These are deadly bois that are fun to fight.",
    icon: "$",
    attackDam: {min: 40, max: 50, type:"damage"},
    drop: "Chainmail Armor",
    level: 2
  },
  {
    name: "Knife Roomba",
    type: Space,
    hp: 60,
    desc: "In this world, Roombas are tired of cleaning up things that humans are too lazy to do. Now these bloodthirsty are ready to spill your blood and then clean it up.",
    icon: "$",
    attackDam: {min: 40, max: 50, type:"damage"},
    drop: "Copper Armor",
    level: 2
  },
  {
    name: "Self-Driving Cars",
    type: Space,
    hp: 60,
    desc: "That classic, beloved Vroom-Vroom noise becomes the stuff of nightmares in this dystopian universe. You better watch out since they're stopping for no one.",
    icon: "$",
    attackDam: {min: 40, max: 50, type:"damage"},
    drop: "Bronze Armor",
    level: 2
  }
  ]

const COMPLETE_NO_SPACE_LIST = [
  {
    name: "Androids",
    type: Nospace,
    hp: 50,
    desc: "Dudes that look like terminator, but not as buff.",
    icon: "$",
    attackDam: {min: 35, max:45, type:"damage"},
    range: 0,
    level: 2
  },
  {
    name: "Rouge Alexa",
    type: Nospace,
    hp: 50,
    desc: "I knew that Alexa would become the supreme leaders someday.",
    icon: "$",
    attackDam: {min: 35, max:45, type:"damage"},
    range: 0,
    level: 2
  },
  {
    name: "Cyber Bully",
    type: Nospace,
    hp: 50,
    desc: "I imagined him to be a lot bigger in person.",
    icon: "$",
    attackDam: {min: 35, max: 45, type:"damage"},
    range: 0,
    level: 2
  },
]

const COMPLETE_INVENTORY_BOSS_LIST = [
  {
    name: "Steve Jobs", type: Space,
    hp: 160,
    desc: "Our beloved iPhone and Windows creator is bringing back something more than a new line of the same iPhone and Windows tech support: vengeance and an unquenchable thirst for blood. But mostly vengeance since you're not buying his insanely high priced iPhones or install the Windows 10 when we clearly ask you to update and restart your computer without closing the computer.",
    icon: "$",
    attackDam: {min: 75, max: 80, type:"damage"},
    drop: "Silver Armor"
  },
  {
    name: "Tech Support",
    type: Space,
    hp: 130,
    desc: "Cannot actually help you, just keeps you on hold for an hour.",
    icon: "$",
    attackDam: {min: 35, max: 45, type:"damage"}
  },
  {
    name: "Sherif",
    type: Cowboy,
    hp: 100,
    desc: "One day from retirment and his first day on the job",
    icon: "T",
    attackDam: {max: 30, min:20, type:"damage"},
    drop: "",
  },
  {
    name: "Oil tycoon",
    type: Cowboy,
    hp: 130,
    desc: "Big business can aford big guns.",
    icon: "T",
    attackDam: {max: 30, min:20, type:"damage"},
    drop: "",
  },
  {
    name:"Minitar",
    hp: 70,
    attackDam:{min:20, max:40, type:"damage"},
    icon:"M",
    desc:"He's a sweetheart if you get to know him",
    type:Mythological,
  },
  {
    name:"Areas",
    hp: 100,
    attackDam:{min:30, max:54, type:"damage"},
    icon:"A",
    desc:"He's always mad because he has daddy issues",
    type:Mythological
  }
]
//can you see this?


var allMobs = [];
allMobs = allMobs.concat(COMPLETE_MYTHOLOGICAL_IN_LIST, COMPLETE_NO_MYTHOLOGICAL_IN_LIST, COMPLETE_COWBOY_LIST, COMPLETE_NO_COWBOY_LIST, COMPLETE_INVENTORY_SPACE_LIST, COMPLETE_NO_SPACE_LIST)
