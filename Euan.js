const COMPLETE_HEAD_ARMOR_LIST = [
  { name: "Leather Hat",
    type: Item,
    value: 3,
    desc: "A simple hat for the early days",
    icon: "^",
    damageresist: .06,
  },
  { name: "Chain Mail Helmet",
    type: Item,
    value: 7,
    desc: "A strong but light armor that gives slight protection",
    icon: "^",
    damageresist: .16
  },
  { name: "Copper Helmet",
    type: Item,
    value: 7,
    desc: "A good helmet that will serve you well",
    icon: "^",
    damageresist: .26
  },
  { name: "Bronze Helmet",
    type: Item,
    value: 7,
    desc: "Better than Copper",
    icon: "^",
    damageresist: .36
  },
  { name: "Iron Helmet",
    type: Item,
    value: 7,
    desc: "A good quality helmet that will protect your head from arrows",
    icon: "^",
    damageresist: .46
  },
  { name: "Steel Helmet",
    type: Item,
    value: 7,
    desc: "Even better at not letting you die",
    icon: "^",
    damageresist: .56
  },
  { name: "Silver Helmet",
    type: Item,
    value: 7,
    desc: "Almost the best",
    icon: "^",
    damageresist: .36
  },
  { name: "Platinum Helmet",
    type: Item,
    value: 7,
    desc: "The best of the best",
    icon: "^",
    damageresist: .36
  }
]

class Item {
  constructor(name, icon, desc, value, type="trash"){
    this._name = name;
    this._icon = icon; // the singlr character that shows up on the map
    this._desc = desc; // the description of the item
    this._value = value;
    this._type = type; // if the item is in a collection or trash
    this._damageresist = damageresist;
  }
  /********************************* Getter and Setters *********************************/
  get name(){ return this._name; }
  set name(name){ this._name = name }

  get icon(){ return this._icon; }
  set icon(icon){ this._icon = icon; }

  get desc(){ return this._desc; }
  set (desc){ this._desc = desc; }

  get value(){ return this._value; }
  set value(value){ this._value = value; }

  get type(){ return this._value; }
  set type(type){ this._type = type; }

  get damageresist(){ return this._damageresist; }
  set damageresist(damageresist){ this._damageresist = damageresist ;}

  toString(){
    var retString = this.name + "<br>";
    retString += this.desc + "<br>";
    retString += "This looks like it is worth " + this.value + "<br>";
    // TODO: add the type once we have it all figured out
    return retString;
  }
}
