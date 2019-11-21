class Weapon extends Item {
  constructor(name, icon, value, damage, desc, range) {
    super(name, icon, value, desc);
    this._type = Ranged;
this._name = name;
this._value = value;
this._icon = icon;
this._value = value;
this._damage = damage;
this._desc = desc;
this._range = range;
  }
  get name(){return this._name; }
  set name(name) {this._name = name; }


  get value(){  return this._value;
  }
  get icon(){     return this._icon;
  }
  get damage(){    return this._damage;
  }
  get desc(){    return this._desc;
  }
    get range(){    return this._range;
    }
  set type(Ranged){
    this._type = Ranged;
  }
  set type(Ranged){  this._name = name;
  }
    set type(Ranged){  this._value = value;
    }
      set type(Ranged){ this._icon = icon;
      }
        set type(Ranged){  this._damage = damage;
        }
          set type(Ranged){  this._desc = desc;
          }
            set type(Ranged){  this._range = range;
            }
}

class Weapon extends Item {
  constructor(name, icon, value, damage, desc, range) {
    super(name, icon, value, desc);
    this._type = Both;
    this._name = name;
    this._value = value;
    this._icon = icon;
    this._value = value;
    this._damage = damage;
    this._desc = desc;
    this._range = range;
  }
  get type(){
    return this._type;
  }
  get name(){  return this._name;
  }
  get value(){  return this._value;
  }
  get icon(){     return this._icon;
  }
  get damage(){    return this._damage;
  }
  get desc(){    return this._desc;
  }
    get range(){    return this._range;
    }
  set type(Both){
    this._type = Both;
  }
  set type(Both){  this._name = name;
  }
    set type(Both){  this._value = value;
    }
      set type(Both){ this._icon = icon;
      }
        set type(Both){  this._damage = damage;
        }
          set type(Both){  this._desc = desc;
          }
            set type(Both){  this._range = range;
            }
}
