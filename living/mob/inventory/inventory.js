class Inventory extends Mob{
  constructor(name, type, hp, desc, icon, attackDam, drop){
    super(name, type, hp, desc, icon, attackDam);
    this._inventory = [];
  }
  get inventory() { return this._inventory; }

/* add(item)
 adds an object to the inventory
 @param item {obj} obect that inherits from class item
*/
  add(item){
   this._inventory.push(item);
   if ( Array.isArray(item) == true){
     for (var i = 0; i < item.length; i++) {
        this._inventory.push(item[i]);
     }
   }
   else { this._inventory.push(item)}
   
  }

  /* drop(index)
   removes an item from the Inventory
   @param index {int} index value of the item that needs to be removed
  */

  drop(index){
    return this._inventory.splice(index, 1);
  }



}
