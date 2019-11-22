const COMPLETE_LOOT_LIST = [
{name:"Crunched up energy drink",
class: VendorTrash,
value: 2,
desc: "A smashed and abused can of Ketamine-infused energy. There are only droplets left but it is not enough to satisfy your crippling addiction",
icon:"C"},

{name:"Mysterious Arrow",
class: VendorTrash,
value: 100500006,
desc:"Legends say that if you pierce yourself with the Arrow you will achive God-like Powers, or die",
icon:"C"},

{name:"elven wood dish",
class: VendorTrash,
value: 100,
desc:"Wait elves don't use wood for anything. What heresy is this?",
icon:"C"},

{name:"Gomboi SP blue edition",
class: VendorTrash,
value: 299,
desc:"It all started 53 years ago, back when I was a fully grown little boy",
icon:"C"},

{name:"A copy of The Ancient Solitary Reign",
 class: VendorTrash,
 value: 15,
 desc:"A comprehensive guide to the Mating/Breeding habits of Owls disguised as a young adult novel",
 icon:"V"},

{name:"Shopkeeper's fanfiction",
class: VendorTrash,
value: 29,
desc:"A copy of one of the shopkeeper's fanfiction. It is filled with bad grammer, metaphors,and a weird substance",
icon:"V"},

{name:"TekWar",
class: VendorTrash,
value: 20,
desc:"A Copy of TekWar by CapStone: the pinnicle of entertainment software",
icon:"V"},

{name:"dung",
class: VendorTrash,
value: 1,
desc:"What do you think it is?",
icon:"V"},

{name:"The bee movie script",
class: VendorTrash,
value: 5000,
desc: "Yellow Black Yellow Black Yellow Black Yellow Black Ooh Black and Yellow let's shake it up a bit",
icon:"C"},

{name:"toy knife",
class: VendorTrash,
value: 12,
desc: "A normal plastic toy knife. It does no damage yet somehow it was recalled because it could inspire hate or whatever",
icon:"V"},

{name:"Mike's Mouse's trophy",
class:VendorTrash,
value: 1000,
desc:"You did it! you seduced a giant frackin rat, we hope you to have a long married life with lots of inbred human rat hybrids",
icon:"C"},

{name:"The Mona Lisa",
class: VendorTrash,
value: 100000000,
desc:"The first time I saw her with hands on her knee HOW SHOULD I SAY THIS, I had a B@#&!)",
icon:"C"}
]



class VendorTrash{
  constructor(name, value, desc, icon){
    this._name = name;
    this._value = value;
    this._desc = desc;
    this._icon = desc;
  }
  get name(){
    return this._name;
  }
  set name(name){
    this._name = name;
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
  get icon(){
    return this._icon;
  }
  set icon(icon){
    this._icon = icon;
  }
}


const COMPLETE_POTION_LIST = [
  {name:"Molotov Milk", class:Potion, value:20,
desc:"I AM THE MILK MAN. MY MILK IS DELICOUS, SPECIAL DELEVERY TODAY",
icon:"P", selfother:Other, damage:{min:1, mx:15}},

{name:"lemon's aid", class:Potion, value:10,
desc:"A type of soda made specifically for medical purposes not for fun, that means you Jimbo",
icon:"P", selfother:Self, heal:{min:1, mx:20}},

{name:"SS13 Cognac", class:Potion, value:100,
desc:"A form a space beer created in space for the memory of all the brave spessmen and women who gave thier lives on space station thirteen, may their souls protect you", icon:"P", selfother:Self, heal:{min:30, mx:45}},

{name:"Mon-star energy", class:Potion, value:2,
desc:"That's right ladies and gentlemen, we sold out to give you some Zoomer juice", icon:"P", selfother:Self,
heal:{min:2, mx:7}},

{name:"Boingo oingo Botion", class:Potion, value:120,
desc:"A weird rainbow colored concoction that gives of a scent of pure diabetes",icon:"P", selfother:Other,
damage:{min:20, mx:45}},
]
