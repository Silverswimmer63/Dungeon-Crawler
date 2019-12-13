/*Mythological Inventory
base class for Mythological mob
@param name {string} the name of the item
@param icon {string} the singlr character that shows up on the map
@param desc {string} the description of the item
@param attackDam {int} the value of damage a Mythological does
@param type {string} the type of mob
@param hp {int} the amount of hp a nob has*/
class NoMythological extends Noinventory{
  constructor(name, type, hp, desc, icon, attackDam){
    super(name, type, hp, desc, icon, attackDam);
  }
}
