class Map{
  constructor(width, height){
    this._width = width;
    this._height = height;
    this._fill = "#";
    this._map = {};
  }
  //getters
  get width(){ return this._width; }
  get height(){ return this._height; }
  get fill(){ return this._fill; }
  get map(){ return this._map; }
}
