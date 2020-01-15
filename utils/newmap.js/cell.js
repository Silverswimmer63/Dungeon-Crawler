/*
class cell is a individual space on the grid. it can be open or clasedand it can
contain iteams or mobs or the player.
*/
class Cell(){
  constructor(){
    this._image = "#";
    this._type = "wall" //walls, halls, rooms, borders: a wall but its a tag
    this._open = false;//if the cell allows movement
    this._inventory =[];//monsters drop inventory we need to program the drop(items in the cell)
    this._ocupied = [];//for living in the cell

  }
  toString(){
    return this._image;
  }
}
