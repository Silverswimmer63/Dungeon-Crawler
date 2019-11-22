class Melee extends Weapon{
  constructor(name, icon, desc, value, type="trash"){
    super (name, icon, desc, value, type="trash")
  this._name = name;
  this._desc = desc;
  this._damage = damage;
  this._value = value;
  this._icon = icon;
 }
/****************************Getters and Setters*******************************/
get name() { return this._name; }
set name(name) { this._name = name; }

get desc() { return this._desc; }
set desc(desc) { this._desc = desc;}

get damage() { return this._damage; }
set damage(damage) { this._damage = damage; }

get value() { return this._value; }
set value(value) { this._value = value; }

get icon() { return this._icon; }
set icon(icon) { this._icon = icon; }
}


const COMPLETE_Melee_LIST = [
  {name: "Fists",
  type: Melee,
  value: 0,
  desc: "The only weapon a man needs",
  damage: {min:2, max:5},
  icon: "/"},

  {name: "Boxing Gloves",
  type: Melee,
  value: 5,
  desc: "Just a littel pertection for the hands",
  damage: {min:4 ,max:10},
  icon:"/"},

  {name: "Axe",
  type: Melee,
  value: 50,
  desc: "A powerful weapon, used by those with great strength",
  damage:{min:20, max:50},
  icon: "/"},

  {name: "Butcher Knife",
  type: Melee,
  value: 14,
  desc: "A small blade, one that can be concealed, but can still inflict lots of damage",
  damage: {min:10, max:15},
  icon:"/"},

  {name: "Broad Sword",
  type: Melee,
  value: 34,
  desc: "A large blade, only those truely skilled have the ability to weild it properly",
  damage: {min:25, max:40},
  icon:"/"},

  {name: "Stick",
  type: Melee,
  value: 2,
  desc: "Just a normal stick , that you picked up off the floor, but it'll still hurt whe hit by.",
  damage: {min:8, max:12},
  icon:"/"},

  {name: "Club",
  type: Melee,
  value: 25,
  desc: "A massive, unweildly weapon that only those with the mightiest strength can hold",
  damage: {min:14, max:32},
  icon:"/"},

  {name: "Short Sword",
  type: Melee,
  value: 20,
  desc: "A common blade, one that can be found in most shops, but its sharpness explains its commoness",
  damage: {min:10, max:24},
  icon:"/"}
]
