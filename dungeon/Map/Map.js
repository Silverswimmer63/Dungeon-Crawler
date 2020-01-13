// 5 Inside this file make a new class: Map.
//6. The map's constructor should only take the parameters width and height, these should be integers.
//7. The map should have the props _width, _height, _fill, and _map, _width and
// _height should take the correct props, _fill should equal the string # for now, and _mapshould equal an empty object {}
//8. make getters (NOT SETTERS) for all of the props of the class. We will make the setters later
//(for reasons that will become apparent.
/*
Class map
This class is used to create and generate display of two dimwnsional maps.
@param height(int): height if the map(map y cord)*/
class Map{
  constructor(with, height){
    this._width = width;
    this._height = height;
    this._fill = "#";
    this._map = {};
  }
  get width(){ return this._width;}
  get height(){return this._height;}
  get fill(){return this._fill;}
  get map(){return this._map}
}
