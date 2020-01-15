/*class Cell is a individual space on the grid
it can be open or closed and it can contain items
or mobs or the player
*/
class Cell{
  constructor(){
    this._image = "#";
    this._type = "wall";//wall, hall, rooms, border: a wall but a tag
    this._open = false;//if the cell allows movement
    this._inventory = [];//item is the cell
    this._occupied = null;// fro living in the cell
  }
  toString(){
    return this._imgae
  }
}
