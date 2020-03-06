class Character{
    constructor(name = "Player", type = "Hero", hp = 100, desc = "You play this guy", icon = "H", baseDamage = 5){
        this._hp = hp;
        this._baseDamage = baseDamage;
        this._inventory = [];
        this._icon = icon;
        this._position = [];
        this._positionB = [];
        this._equiped = [];
        this._dem = [];
    }
    get icon(){
        return this._icon;
    }
    set icon(icon){
        this._icon = icon;
    }
    get position(){
        return this._position;
    }
    set position(position){
        this._position = position;
    }
    //That I know of this isnt going to be really easy its going to be extremely hard
    _changeEquiped(){
        
    }
    //Easy to do because of utils helper functions
    //I could just make this make itself but I dont want to so :)
    _inventory(){
        
    }

      toString(){
    return "<span style=\"color:Blue\">"+ this.icon +"</span>"
  }
    
}
var characterNew = new Character("Player", "Hero", 100, "You play this guy", "H", 5);
