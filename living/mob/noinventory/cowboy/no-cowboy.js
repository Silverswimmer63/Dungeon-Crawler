/*Cowboy Inventory
base class for cowboy mob
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param attackDam {int} the value of damage a cowboy does
@param type {string} the type of mob
@param hp {int} the amount of hp a nob has*/
class Nocowboy extends Inventory{
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon, attackDam);
  }
}
