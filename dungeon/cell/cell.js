/* class cell is a initializer that make puts the items and the enemies as well as the playrr

 */
class Cell{
    constructor(){
        this._image = "#";
        this._type = "wall";//walls,rooms,borders: help confine the space that can be used for rooms and hallways.
        this._open = false;//this will tell if th space is allowed to be moved to.
        this._inventory = [];//list of the items in the cell.
        this._occupied = [];//for things in a cell (items enemies and objects:like doors).
    }
    toString(){
        return this._image;
    }
}