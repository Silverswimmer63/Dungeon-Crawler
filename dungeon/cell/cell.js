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
    //Getters and setters//
    get occupied(){
        return this._occupied;
    }
    get inventory(){
        return this._inventory;
    }
    get open(){
        //This if is to check if the space
        //has a enemy or something obstruction the spot
        if(this._occupied.length > 0){
            this._open = false;
            return this._open;
        }
        else{
            return this._open;
        }
    }
    get image(){return this._image;}
    get type (){return this._type;}
    //Setters
    set inventory(inventory){
        if(this._inventory.length == 0){
            this._inventory = inventory;
        }
        else if(inventory){
            this._inventory = [];
        }
        else{
            throw new Error("Cell.inventory can not be used when the inventory is not empty. Please use Cell.add to add to inventory ");
        }
        
    }
    /*
     Today to start -

find and fix the bug...

step 3 between step 2 and step 1 - if the array has a length of 2
then check to that both are not the same thing if they are, throw
an error to the extent of "Cell.occupied was sent 2 " <mob/nonmob> "s
and can only take 1."

We will make a cell.add
this will check to see if an thing is an item or a mob or a nonmob and react accordingly

     */
    set image(image){this._image = this.image;}
    set type(type){
        if((type == "wall")||(type == "border")){
            this._open = false;
            this._type = type;
        }
        else if((type == "room")||(type == "hall")){
            this._open = true;
            this._type = type;
        }
        else{
            throw new Error("Cell.type expected one of the following:wall, hall, border, or room and got" + type + "."); 
        }
    }
    set occupied(occupied){
this._occHandler(occupied, "Cell.occupied")
}
//internal methods
    //add.occupied will be used to update cycles this will be used to take care of monsters moving in and out od the cell in being added to cells
    //@param thing is one of the param things
    //@param occupied {object} 'thing to be added'
    add(thing){
        var bad = true;
        if(thing instanceof Item){
            thing = [thing];
            bad = false;
        }
        if(thing instanceof Living){
            thing._occHandler(thing,"Cell.add")
            bad = false;
        }
        if(Array.isArray(thing)){
            for(var i=0; i < thing.length;i++ ){
                if(!(thing[i] instanceof Item)){
               throw new Error("Cell.add attempted to add nonItems(s) and Item(s) at the same time");
                }
            }
        }
        bad = false;
        this._inventory = this._inventory.concat(thing);
        //occupied is a string  or an array
        //if its an array all ar either living or they are both items
        //Not one of each this will break the game :(
        //cannot update an item and a monster both at once
        //if(anything is the same type) yeet fire at it and watch it burn //aka:Throw an error//
        if(bad == true){
            throw new Error("Cell.add recieved illegal item");
        }
    
    }
//external methods
    /*this will do all the work in set occupied(occupied)
     *@param {array} occupied   array or single object of the things in a given place cant be more than 2 mobs
     *@param {string} call  Tells what to call for an error
     */
    _occHandler(occupied, call= "Cell._occHandler"){
        for(var i = 0; i < occupied.length;i++){
            if(!Array.isArray(occupied)){
                occupied = [occupied];
            }
            if(occupied.length > 2){
                throw new Error(call + " epects at most one mob and one nonmob and wil give and Array of length " + occupied.length + ".");
            }
                if(occupied.length == 2){
                    if((occupied[0] instanceof Mob)&& (occupied[1] instanceof Mob)){
                        throw new Error( call + " was sent 2 " + "Mob" + "s and can only take 1.");
                    }
                    if((occupied[0] instanceof Nonmob)&&(occupied[1] instanceof Nonmob)){
                        throw new Error( call + " was sent 2 " + "Nonmob" + "s and can only take 1.");                        
                    }
                }
            for(var i = 0; i < occupied.length; i++){
                if(occupied[i] instanceof Living){
                    throw new Error(call + " expects at most on mob and one nonmob and was given " + occupied[i] + ".");
                }
            }
            var mob = false;
            var nonmob = false;
            for(var j = 0; j< this._occupied.length;j++){
                if(this._occupied[j] instanceof Mob){mob = true;}
                if(this._occupied[j] instanceof Nonmob){nonmob = true;}
            }
            //Asumes single item
            if(nonmob == true && occupied[i] instanceof Nonmob){
                throw new Error(call + " - cell already had a mob/nonmob and was given" + occupied[i].name);
            }else if(mob == true && occupied[i] instanceof Mob){
                throw new Error(call + " - cell already had a mob/mob and was given" + occupied[i].name);
            }else{
                this._occupied.push(occupied[i]);
            }
        }
    }
    //tostring overwrights _image
    toString(){
        return this._image;
    }
}