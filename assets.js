
// This is the basic set of assets for the game

/*Example
const COMPLETE_LOOT_LIST = [
  {name: "Plumbus",
  class: Item,
  value: 10000000000,
  desc: "Just a regular old Plumbus",
  icon: "p"
  }
  {name: "Shamwow",
  class: Item,
  value: 5,
  desc: "Hay camera guy, you with me?",
  icon: "w"
  }
  {name: "BFG9000",
  class: Ranged, // ranged exteds weapon extends useable extends items
  value: 64351564831,
  decs: "A BFG, from Doom, how retro",
  icon: "L",
  range: 10,
  damage: {min: 4, mx: 30}, // foo.damage.max to call
  dropoff: .1
  }
]

class Ranged {
  constructor(name, value, desc, icon) {
    this._name = name;
  }
  getDamage(){
    return Math.floor(Math.random()*(this.damage.max - this.damage.min));
  }
}
*/
const COMPLETE_LOOT_LIST = [
  
]
