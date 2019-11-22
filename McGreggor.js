

<<<<<<< HEAD
const COMPLETE_LOOT_LIST = [
{name:"Crunched up energy drink",
class: Vendortrash,
value:2,
desc: "A smashed and abused can of Ketamine-infused energy. There are only droplets left but it is not enough to satisfy your crippling addiction",
icon:"C"},

{name:"Mysterious Arrow", class: Collectible, value: 100500006,
desc:"Legends say that if you pierce yourself with the Arrow you will achive God-like Powers, or die", icon:"C"},
=======
const COMPLETE_LOOT_LIST + [
{name:"Crunched up energy drink", class: VenderTrash, value:2,
desc:"A smashed and abused can of Ketamine-infused energy. There are
only droplets left but it is not enough to satisfy your crippling addiction",
icon:"V"}

{name:"Mysterious Arrow", class: Collectible, value: 100500006,
desc:"Legends say that if you pierce yourself with the Arrow you will achive God-like Powers,
or die", icon:"C"}
>>>>>>> 49a6bb4766bfdf02288c17222fd8e0b690186ee1

{name:"elven wood dish", class: Collectible, value: 100,
desc:"Wait elves don't use wood for anything. What heresy is this?",
icon:"C"}

 {name:"Gomboi SP blue edition", class: Collectible, value:299,
desc:"It all started 53 years ago, back when I was a fully grown little boy",
icon:"C"}

{name:"A copy of The Ancient Solitary Reign", class: Vendortrash, value:15,
desc:"A comprehensive guide to the Mating/Breeding habits of Owls disguised as a young adult novel",
icon:"V"}

{name:"Shopkeeper's fanfiction", class: Vendortrash, value:29,
desc:"A copy of one of the shopkeeper's fanfiction. It is filled with bad grammer, metaphors,and a weird substance",
icon:"V"}

{name:"TekWar", class: Vendortrash, value:20,
desc:"A Copy of TekWar by CapStone: the pinnicle of entertainment software",
icon:"V"}

{name:"dung", class: Vendortrash, value:1,
desc:"What do you think it is?",
icon:"V"}

{name:"The bee movie script",
class: Collectible,
value: 5000,
desc: "Yellow Black Yellow Black Yellow Black Yellow Black Ooh Black and Yellow let's shake it up a bit",
icon:"C"}

<<<<<<< HEAD
{name:"toy knife",
class: Vendortrash,
value:12,
desc: "A normal plastic toy knife. It does no damage yet somehow it was recalled because it could inspire hate or whatever", icon:"V"},

{name:"Mike's Mouse's trophy",
class:Vendortrash,
vlaue:384107401847017409308758173587130870775014,
desc:"You did it! you seduced a giant frackin rat, we hope you to have a long married life with lots of inbred human rat hybrids", icon:"C"},

{name:"The Mona Lisa",
class: Collectible,
value: 100000000,
desc:"The first time I saw her with hands on her knee HOW SHOULD I SAY THIS, I had a B@#&!)",
icon:"C"}
=======
{name:"toy knife",class: VenderTrash, value:12,
desc: "A normal plastic toy knife. It does no damage yet somehow it was recalled because it could
inspire hate or whatever", icon:"V"}

{name:"Mike's Mouse's trophy", class:Endgame Collectible, vlaue:384107401847017409308758173587130870775014,
desc:"You did it! you seduced a giant frackin rat, we hope you to have a long married life with lots of
inbred human rat hybrids", icon:"C"}

{name:"The Mona Lisa", class: Collectible, value: 100000000000,
desc:"The first time I saw her with hands on her knee HOW SHOULD I SAY THIS, I had a B@#&!)",
icon:"C"}



class VenderTrash{
  constructor(name, value, desc, icon){
    this._name = name;
    this._value = value;
    this._desc = desc;
    this._icon = desc;
  }
  get name(){
    return this._name;
  }
  set name(){
    this._name = name;
  }
  get value(){
    return this._value;
  }
  set value(){
    this._value = value;
  }
  get desc(){
    return this._desc;
  }
  set desc(){
    this._desc = desc;
  }
  get icon(){
    return this._icon;
  }
  set icon(){
    this._icon = icon;
  }
}
]
class Collectible{
  constructor(name, value, dsec, icon){
    this._name = name;
    this._value = value;
    this._desc = desc;
    this._icon = icon;
  }
  get name(){
    return this._name;
  }
  set name(){
    this._name = name;
  }
  get name(){
    return this._name;
  }
}







>>>>>>> 49a6bb4766bfdf02288c17222fd8e0b690186ee1
]
