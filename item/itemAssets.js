const COMPLETE_HEAD_ARMOR_LIST = [
  { name: "Leather Hat",
    type: Head,
    value: 3,
    desc: "A simple hat for the early days",
    icon: "^",
    damageresist: .06,
  },
  { name: "Chain Mail Helmet",
    type: Head,
    value: 7,
    desc: "A strong but light armor that gives slight protection",
    icon: "^",
    damageresist: .16
  },
  { name: "Copper Helmet",
    type: Head,
    value: 7,
    desc: "A good helmet that will serve you well",
    icon: "^",
    damageresist: .26
  },
  { name: "Bronze Helmet",
    type: Head,
    value: 7,
    desc: "Better than Copper",
    icon: "^",
    damageresist: .36
  },
  { name: "Iron Helmet",
    type: Head,
    value: 7,
    desc: "A good quality helmet that will protect your head from arrows",
    icon: "^",
    damageresist: .46
  },
  { name: "Steel Helmet",
    type: Head,
    value: 7,
    desc: "Even better at not letting you die",
    icon: "^",
    damageresist: .56
  },
  { name: "Silver Helmet",
    type: Head,
    value: 7,
    desc: "Almost the best",
    icon: "^",
    damageresist: .36
  },
  { name: "Platinum Helmet",
    type: Head,
    value: 7,
    desc: "The best of the best",
    icon: "^",
    damageresist: .36
  }
]

const COMPLETE_ARMOR_BODY_LIST = [
  {
    name: "Leather Breastplate",
    type: Body,
    value: 5,
    desc: "The most basic level armor that all beginners should have. Moo-moo cows have died for this sole purpose of protecting you!",
    icon: "&",
    damageResist:.1
  },
  {
    name: "Chainmail Breastplate",
    type: Body,
    value: 10,
    desc: "When we designed this unique piece of armor, we thought 'Why not copy Minecraft?'.' Oh yeah, this also protects you better than moo-moo cows, I guess",
    icon: "&",
    damageResist:.2
  },
  {
    name: "Copper Breastplate",
    type: Body,
    value: 15,
    desc: "This was forged the fiery forges of Hephaestus. He's the God of fire and he's good at building stuff I guess. Note: No Hephaestusus was harmed in the process.",
    icon: "&",
    damageResist:.3
  },
  {
    name: "Bronze Breastplate",
    type: Body,
    value: 20,
    desc: "We have two words for you: Copper and Tin. The heavenly blend of these 2 metal elements gives you a more of a luxury to protect yourself. Now you can tell monsters to watch out.",
    icon: "&",
    damageResist:.4
  },
  {
    name: "Iron Breastplate",
    type: Body,
    value: 25,
    desc: "Despite being the most common element on Earth, stronger opponents will cower in fear (at first but then attack you, but you're good since you're using iron. Right?)",
    icon: "&",
    damageResist:.5
  },
  {
    name: "Steel Breastplate",
    type: Body,
    value: 30,
    desc: "Why use steel for swords and weapons when you can use it for armor. Being the capitalists, I mean, innovators that we are, we brought you the best of worlds: Iron and Carbon",
    icon: "&",
    damageResist:.6
  },
  {
    name: "Silver Breastplate",
    type: Body,
    value: 40,
    desc: "Silver is good for trading. But it's also good for flexing on other opponenets your high status when you purchase this. Oh and it's good for defending too.",
    icon: "&",
    damageResist:.7
  },
  {
    name: "Platinum Breastplate",
    type: Body,
    value: 50,
    desc: "We are running out of ideas and metals to exploit so we settled on our last, exciting, better armor. Platinum brings you the highest form of comfort, protection, and durability. Hey kids, don't waste your money on the new iPhone 11. Spend it on this armor!",
    icon: "&",
    damageResist:.8
  }
]

const COMPLETE_ARMOR_LIST= [
  {
    name: "Leather Legs",
    type: Leg,
    value: 2,
    desc:"Low damege protection",
    icon:"<",
    damageresist:.04 ,
  },
  {
    name: "ChainMail Legs",
    type: Leg,
    value: 5,
    desc:"higher damege protection then Leather",
    icon:"<",
    damageresist:.14,
  },
  {
    name: "Copper Legs",
    type: Leg,
    value: 10,
    desc:"higher damege protection then ChainMail",
    icon:"<",
    damageresist:.24,
  },
  {
    name: "Bronze Legs",
    type: Leg,
    value: 15,
    desc:"higher damege protection then Copper",
    icon:"<",
    damageresist:.34,
  },
  {
    name: "Iron Legs",
    type: Leg,
    value: 20,
    desc:"higher damege protection then Bronze",
    icon:"<",
    damageresist:.44,
  },
  {
    name: "Steel Legs",
    type: Leg,
    value: 25,
    desc:"higher damege protection then Iron",
    icon:"<",
    damageresist:.54,
  },
  {
    name: "Silver Legs",
    type: Leg,
    value: 33,
    desc:"higher damege protection then Steel",
    icon:"<",
    damageresist:.64,
  },
  {
    name: "Platinum Legs",
    type: Leg,
    value: 42,
    desc:"Max damege protection",
    icon:"<",
    damageresist:.74,
  }
  ]

const COMPLETE_MELEE_LIST = [
  {
    name: "Fists",
    type: Melee,
    value: 0,
    desc: "The only weapon a man needs",
    damage: {min:2, max:5, type:"damage"},
    icon: "/"
  },
  {
    name: "Boxing Gloves",
    type: Melee,
    value: 5,
    desc: "Just a littel pertection for the hands",
    damage: {min:4 ,max:10, type:"damage"},
    icon:"/"
  },
  {
    name: "Axe",
    type: Melee,
    value: 50,
    desc: "A powerful weapon, used by those with great strength",
    damage:{min:20, max:50, type:"bleeding",duration:"5"},
    icon: "/"
  },
  {
    name: "Butcher Knife",
    type: Melee,
    value: 14,
    desc: "A small blade, one that can be concealed, but can still inflict lots of damage",
    damage: {min:10, max:15, type:"bleeding", duration:"5"},
    icon:"/"
  },
  {
    name: "Broad Sword",
    type: Melee,
    value: 34,
    desc: "A large blade, only those truely skilled have the ability to weild it properly",
    damage: {min:25, max:40, type:"bleeding", duration:"5"},
    icon:"/"
  },
  {
    name: "Stick",
    type: Melee,
    value: 2,
    desc: "Just a normal stick , that you picked up off the floor, but it'll still hurt when hit by.",
    damage: {min:8, max:12, type:"healing"},
    icon:"/"
  },
  {
    name: "Club",
    type: Melee,
    value: 25,
    desc: "A massive, unweildly weapon that only those with the mightiest strength can hold",
    damage: {min:14, max:32, type:"damage"},
    icon:"/"
  },
  {
    name: "Short Sword",
    type: Melee,
    value: 20,
    desc: "A common blade, one that can be found in most shops, but its sharpness explains its commoness",
    damage: {min:10, max:24, type:"bleeding", duration:"5"},
    icon:"/"
  }
]

const COMPLETE_RANGED_LIST = [
  {
    name: "Throwing stones",
    type: Ranged,
    value: 1,
    desc: "Just rocks... literaly just rocks",
    icon: "L",
    range: 4,
    damage: {min:2, max:5,type:"damage"}
  },
  {
    name: "Fireworks",
    type: Ranged,
    value: 5,
    desc: "whoshhhh................... BANG!",
    icon: "L",
    range: 6,
    damage: {min:3, max:8, type:"fire", duration:"3"}
  },
  {
    name: "Greek Bow",
    type: Ranged,
    value: 12,
    desc: "It's problly at least 20 times older than you",
    icon: "L",
    range: 5,
    damage: {min:6, max:8, type:"bleeding"}
  },
  {
    name: "Trained Falcon",
    type: Ranged,
    value: 10,
    desc: "I guess he likes you",
    icon: "L",
    range: 5,
    damage: {min:5, max:6, type:"bleeding"}
  },
  {
    name: "Magnetic Rocks",
    type: Ranged,
    value: 8,
    desc: "There cool… fun to play with… hurts when someone throws them at you",
    icon: "L",
    range: 4,
    damage: {min:3, max:6, type:"damage"}
  },
  {
    name: "Rusty Revolver",
    type: Ranged,
    value: 20,
    desc: "Please just sell it, its unsafe to use every time you pull the trigger there a good chance you'll just blow your hand off",
    icon: "L",
    range: 6,
    damage: {min:8, max:12, type:"damage"}
  },
  {
    name: "Throwing Axe",
    type: Ranged,
    value: 24,
    desc: "while normal throwing axes are a quarter size of a regular axe but these are the size of a full on battle axe",
    icon: "L",
    range: 2,
    damage: {min:16, max:24, type:"bleeding", duration:"5"}
  },
  {
    name: "Shootgun",
    type: Ranged,
    value: 26,
    desc: "A shotgun but longer",
    icon: "L",
    range: 4,
    damage: {min:20, max:26, type:"damage"},
  },
  {
    name: "Snake Lasso",
    type: Ranged,
    value: 30,
    desc: "Unfortunately he's been defanged but he still has some bite",
    icon: "L",
    range: 5,
    damage: {min:24, max:26, type:"damage"},
  },
  {
    name: "Money Bag",
    type: Ranged,
    value: 36,
    desc: "A bag of gold tied to your hand kratos style",
    icon: "L",
    range: 4,
    damage: {min:26, max:28, type:"fire", duration:"3"}
  },
  {
    name: "Laser Pointer",
    type: Ranged,
    value: 40,
    desc: "Aim for the eye for maximum effect",
    icon: "L",
    range: 10,
    damage: {min:28, max:34, type:"fire", duration:"3"}
  },
  {
    name: "Hacking Laptop",
    type: Ranged,
    value: 50,
    desc: "Smashing hands on keyboard... iM iN (use sunglasses for max effect)",
    icon: "L",
    range: 6,
    damage: {min:30, max:32, type:"electricity"}
  },
  {
    name: "Ray Gun",
    type: Ranged,
    value: 55,
    desc: "Orginated from the body of a very mad man crawling around yelling about need a revive after being knocked down by a disgruntled man in a torn Nazi uniform",
    icon: "L",
    range: 6,
    damage: {min:28, max:34, type:"fire", duration:"3"}
  },
  {
    name: "Fancy Future Rifle",
    type: Ranged,
    value: 50,
    desc: "This rifle is clearly just an AK-47 with a ton of RGB lighting everywhere",
    icon: "L",
    range: 8,
    damage: {min:34, max:36, type:"damage"}
  },
  {
    name: "Serrated Fedora",
    type: Ranged,
    value: 40,
    desc: "For those reddit users who watched a little too much James Bond",
    icon: "L",
    range: 3,
    damage: {min:30, max:32, type:"healing"}
  },
  {
    name: "Replica Mouse",
    type: Ranged,
    value: 100,
    desc: "A replica of A fabled mouse one that shakes the strongest, boldest, and bravest men to the core. this is but a recreation of mikes computer mouse",
    icon: "L",
    range: 10,
    damage: {min:40, max:60, type:"electricity"}
  },
  {
    name: "Mikes Controller",
    type: Ranged,
    value: 99999999999999,
    desc: "The only thing powerful enough to even give you a chance at killing the beast",
    icon: "C",
    range: 16,
    damage: {min:200, max:250, type:"frozen", duration:"4"}
  }
]

const COMPLETE_LOOT_LIST = [
  {
    name:"Crunched up energy drink",
    type: VendorTrash,
    value: 2,
    desc: "A smashed and abused can of Ketamine-infused energy. There are only droplets left but it is not enough to satisfy your crippling addiction",
    icon:"V"
  },
  {
    name:"Mysterious Arrow",
    type: VendorTrash,
    value: 15,
    desc:"Legends say that if you pierce yourself with the Arrow you will achive God-like Powers, or die",
    icon:"V"
  },
  {
    name:"elven wood dish",
    type: VendorTrash,
    value: 10,
    desc:"Wait elves don't use wood for anything. What heresy is this?",
    icon:"V"
  },
  {
    name:"Gomboi SP blue edition",
    type: VendorTrash,
    value: 20,
    desc:"It all started 53 years ago, back when I was a fully grown little boy",
    icon:"V"
  },
  {
    name:"A copy of The Ancient Solitary Reign",
    type: VendorTrash,
    value: 15,
    desc:"A comprehensive guide to the Mating/Breeding habits of Owls disguised as a young adult novel",
    icon:"V"
  },
  {
    name:"Shopkeeper's fanfiction",
    type: VendorTrash,
    value: 29,
    desc:"A copy of one of the shopkeeper's fanfiction. It is filled with bad grammer, metaphors,and a weird substance",
    icon:"V"
  },
  {
    name:"TekWar",
    type: VendorTrash,
    value: 20,
    desc:"A Copy of TekWar by CapStone: the pinnicle of entertainment software",
    icon:"V"
  },
  {
    name:"dung",
    type: VendorTrash,
    value: 1,
    desc:"What do you think it is?",
    icon:"V"
  },
  {
    name:"The bee movie script",
    type: VendorTrash,
    value: 50,
    desc: "Yellow Black Yellow Black Yellow Black Yellow Black Ooh Black and Yellow let's shake it up a bit",
    icon:"V"
  },
  {
    name:"toy knife",
    type: VendorTrash,
    value: 12,
    desc: "A normal plastic toy knife. It does no damage yet somehow it was recalled because it could inspire hate or whatever",
    icon:"V"
  },
  {
    name:"Mike's Mouse's trophy",
    type:VendorTrash,
    value: 100,
    desc:"You did it! you seduced a giant frackin rat, we hope you to have a long married life with lots of inbred human rat hybrids",
    icon:"V"
  },
  {
    name:"The Mona Lisa",
    type: VendorTrash,
    value: 30,
    desc:"The first time I saw her with hands on her knee HOW SHOULD I SAY THIS, I had a B@#&!)",
    icon:"V"
  },
  {name:"H  O  N  K",
 type: VendorTrash,
 value:12,
 desc:"The Honk-Mother sees all, May the Admin Gods Show mercy",
 icon:"V"
},
]

const COMPLETE_POTION_LIST = [
  {
    name: "Bandaid",
    type:Potion,
    value:20,
    desc:"a basic bandaid with a lipstick smug and a message saying LOVE MOM... I love you mom",
    icon:"P",
    damage: {min:1, max:20, type:"heal"}
  },
  {
    name: "Thoughts and prayers",
    type:Potion,
    value:15,
    desc:"while this tecnecly dose nothing it somehow bolsters your spirits and heals you... I would have prefured a heath kit",
    icon:"P",
    damage:{min:5, max:5, type:"heal"}
  },
  {
    name: "Heath kit",
    type:Potion,
    value:50,
    desc:"a basic bandaid with a lipstick smug and a message saying LOVE MOM",
    icon:"P",
    damage:{min:10, max:40, type:"heal"}
  },
  {
    name:"Molotov",
    type:Potion,
    value:20,
    desc:"you would think its cheap but these babys are made with premium botttles",
    icon:"P",
    damage:{min:5, max:20, type:"fire"},
  },
  /*
  {
    name:"Defence potion",
    type:Potion,
    value:30,
    desc:"you recive thicc skin so you can shrug off attcks but you now increadable sensitive to harsh words now",
    icon:"P",
    defence:1.5
  },
  {
    name:"Potion of Buff",
    type:Potion,
    value:30,
    desc:"you become increadably strong at the experce of your literacy, you will forget how to read if you use this... but thats for nerds anyways",
    icon:"P",
  },
  */
  {
    name:"Freeze potion",
    type:Potion,
    value:35,
    desc:"Yo, VIP, let's kick it! Ice ice baby Ice ice baby All right stop Collaborate and listen Ice is back with my brand new invention Something grabs a hold of me tightly Then I flow that a harpoon daily and nightly Will it ever stop? Yo, I don't know Turn off the lights and I'll glow To the extreme, I rock a mic like a vandal Light up a stage and wax a chump like a candle Dance Bum rush the speaker that booms I'm killin' your brain like a poisonous mushroom Deadly, when I play a dope melody Anything less that the best is a felony Love it or leave it You better gain way You better hit bull's eye The kid don't play If there was a problem Yo, I'll solve it Check out the hook while my DJ revolves it Ice ice baby Vanilla Ice ice baby Vanilla Ice ice baby Vanilla Ice ice baby Vanilla Now that the party is jumping With the bass kicked in, the fingers are pumpin' Quick to the point, to the point no faking I'm cooking MC's like a pound of bacon Burning them if they're not quick and nimble I go crazy when I hear a cymbal And a hi hat with a souped up tempo I'm on a roll and it's time to go solo Rollin in my 5.0 With my ragtop down so my hair can blow The girlies on standby Waving just to say hi Did you stop? No, I just drove by Kept on pursuing to the next stop I busted a left and I'm heading to the next block That block was dead Yo so I continued to a1a Beachfront Ave Girls were hot wearing less than bikinis Rock man lovers driving Lamborghini Jealous 'cause I'm out getting mine Shay with a gauge and Vanilla with a nine Ready for the chumps on the wall The chumps are acting ill because they're so full of eight balls Gunshots ranged out like a bell I grabbed my nine All I heard were shells Fallin' on the concrete real fast Jumped in my car, slammed on the gas Bumper to bumper the avenue's packed I'm tryin' to get away before the jackers jack Police on the scene You know what I mean They passed me up, confronted all the dope fiends If there was a problem Yo, I'll solve it Check out the hook while my DJ revolves it Ice ice baby Vanilla Ice ice baby Vanilla Ice ice baby Vanilla Ice ice baby Vanilla Take heed, 'cause I'm a lyrical poet Miami's on the scene just in case you didn't know it My town, that created all the bass sound Enough to shake and kick holes in the ground 'Cause my style's like a chemical spill Feasible rhymes that you can vision and feel Conducted and formed This is a hell of a concept We make it hype and you want to step with this Shay plays on the fade, slice it like a ninja Cut like a razor blade so fast Other DJ's say, damn If my rhyme was a drug I'd sell it by the gram Keep my composure when it's time to get loose Magnetized by the mic while I kick my juice If there was a problem Yo, I'll solve it! Check out the hook while my DJ revolves it Ice ice baby Vanilla Ice ice baby Vanilla Ice ice baby Vanilla Ice ice baby Vanilla Yo man, let's get out of here Word to your mother Ice ice baby Too cold Ice ice baby Too cold too cold Ice ice baby Too cold too cold Ice ice baby Too cold too cold",
    icon:"P",
    freeze: {min:3, max:5, type:"ice"}
  },
  {
    name:"lightning",
    type:Potion,
    value:35,
    desc:"Now I am become Death, the destroyer of the 7/11 bathroom-homeless man in NYC",
    icon:"P",
    damage:{min:15, max:35, type:"electricity"}
  },
  /*
  {
    name:"Gold potion",
    type:Potion,
    value:80,
    desc:"makes everything better because being rich solves all your problems",
    icon:"P",
    deffence:2.,
    attack:2.
  }
  */

]

var allItems = [];
allItems = allItems.concat(COMPLETE_HEAD_ARMOR_LIST, COMPLETE_ARMOR_BODY_LIST, COMPLETE_ARMOR_LIST, COMPLETE_MELEE_LIST, COMPLETE_RANGED_LIST, COMPLETE_LOOT_LIST, COMPLETE_POTION_LIST)
