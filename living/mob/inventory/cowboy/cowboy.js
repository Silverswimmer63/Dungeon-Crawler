class Cowboy extends Inventory{
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon, attackDam);
  }
}
// name: this shows the monster's name.
// type: this determines what type of monster it is, either from space, cowboy, or mythological
// hp: the amount of the life it has.
// desc: the description of the monster
// icon: the single character that shows up on the map
// attackDam: The amount of damage monsters can attack you with.
