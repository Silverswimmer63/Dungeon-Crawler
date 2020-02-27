class Utils {
  /*randMath
  *@param max {int} the max you can have
  *@param min {int} the min you can have ;
  */
  static randMath(min, max, call="Utils.randMath"){
    min = this.intCheck(min, call);
    max = this.intCheck(max, call);
    if (min > max) {
      throw new Error("min must always be less then max " + call + ".")
    }
   return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static intCheck(item, call="Utils.intCheck.js"){
    if (Number.isInteger(item)) {return item;}
    else {
      throw new Error("The method " + call + " expected an integer and received " + item + ".");
    }
  }
  
  /*@function objCheck(item, call="Utils.objCheck")
  *@param item: {mixed} an item to be checked if is an object
  *@param call: string} the Class/function/method where the check occured
  *@retun {mixed} returns the item unless it is not an object
  */
  static objCheck(item, call="Utils.objCheck"){
    if (( item != null)&&(typeof item == "object")) {
      return item;
    }else {
      throw new Error("The method " + call + " expected an object and received " + item + ".");
    }
  }

  /*keyCheck(item, key, call= Utils.keyCheck)
   *@param item: {mixed} an item to be checked if it is an object
   *@param key: {mixed} a string or array of strings to be checked as keys in item
   *@param call: {string} the Class/function/method where the check occured
   *@retun {mixed} returns the item if object with key(s)
   */
  static keyCheck(item, key, call= "Utils.keyCheck"){
    this.objCheck(item, call);
    if (!Array.isArray(key)) {
      key = [key];
    }
    var badKey = [];
    for (var i = 0; i < key.length; i++) {
      if (!(key[i] in item)) {
        badKey.push(key[i]);
      }
    }
    if (badKey.length == 0) {
      return item;
    }
    var errStr = "The method " + call + " expected an object with the key(s) ";
    for (var i = 0; i < key.length; i++) {
      errStr += key[i];
      if ((key.length > 0)&&(i < key.length - 1)) {
        errStr += ", ";
      }
    }
    errStr += ". It is missing the key(s) ";
    for (var i = 0; i < badKey.length; i++) {
      errStr += badKey[i];
      if ((badKey.length > 0)&&(i < badKey.length - 1)) {
        errStr += ", ";
      }
    }
    throw new Error(errStr+".");
  }
  
  /*listCheck(item, list, call)
   *@param item: {mixed} the thing to be checked
   *@param list: {array} an array of things to check the item against
   *@param call: {text} where to call the error from
   *@return {mixed} The item if no error is thrown
   */
  static listCheck(item, list, call="Utils.listCheck"){
  if (list.includes(item)) {return item;}
   throw new Error(call + "expected one of the following: " + list + " and got " + item + ".")
  }
 
  /*randCoord(xMin, xMax, yMin, yMax)
   *This function will produce an object with the keys of x and y, with values
   *betweem xMin - xMax for the x key, & yMin and yMax for the y key
   *
   *@param xMin {int}: a number between 1 and xMax
   *@param xMax {int}: a number greater than xMin
   *@param yMin {int}: a number between 1 and yMax
   *@param yMax {int}: a number greater than yMin
   *@return {obj}: An obj with x & y keys
   */
  static randCoord(xMin, xMax, yMin, yMax, call="Utils.randCoord"){
   var retObj = {};
    retObj.x = this.randMath(xMin, xMax, call);
    retObj.y = this.randMath(yMin, yMax, call);
    return retObj;
  }

  /*randRoom(width, height, roomMin, roomMax)
   *@returns {array} An array of coordinate objects for a square room.
   *@param {integer} width : width of the room.
   *@param {integer} height : height of the room.
   *@param {integer} roomMin : Min size of the room.
   *@param {integer} roomMax : Max size of the room.
   */
  static randRoom(width, height, roomMin, roomMax){
    roomMin -= 1;
    roomMax -= 1;
      var tpleft = this.randCoord(1,width-roomMin,1,height-roomMin);
      var btright = this.randCoord(tpleft.x+roomMin,Math.min(tpleft.x+roomMax,width),tpleft.y+roomMin,Math.min(tpleft.y+roomMax,height));
      var tpright = {x:btright.x,y:tpleft.y};
      var btleft = {x:tpleft.x,y:btright.y};
      var retAry = [];
      for (var i = tpleft.x; i <= btright.x; i++) {
       for (var j = tpleft.y; j <= btright.y; j++) {
        var obj = {x:i,y:j};
        retAry.push(obj);
       }
      }
    return retAry;
  }

  /*arrayCheck(item, call)
   *@param {mixed} item : any item input for a check
   *@param {string} call : call for the the Error
   *@returns {mixed} An Error or the item;
   */
  static arrayCheck(item, call="Utils.arrayCheck"){
    if ((item != null)&&(Array.isArray(item))) {
      return item;
    }else {
      throw new Error("The method " + call + " expected an array and received " + item + ".");
    }
  }

  /* shuffleIndex(array)
  @param array: {array} an array to shuffle the index of
  @return array: an array of number index (eg: array of length 5 might
  give you a result of [2, 3, 0, 1, 4])
  */
  static shuffleIndex(array){
    var setArray = [];
    var resultArray = [];
   for(var i = 0; i < array; i++){
    setArray.push(i)
   }
   for(var i = 0; i<array;i++){
    var tf = 0;
    var tf2 = 0;
    var randmath = this.randMath(0, array);
     for(var j = 0;j<array;j++){
      if(randmath == setArray[j]){
       setArray[j] = array+1;
       resultArray.push(randmath);
       tf2++;
      }
      else if(setArray[j] == array+1){
      }
      else{
       tf++;
      }
     }
    if(tf >=1 && tf2 !== array){
     i--;
    }
   }
   return resultArray;
  }

  /*hallYstart() and hallXstart()
   *@param {array} roomOne:first room
   *@param {array} roomTwo:second room
   *@returns {array} hallCords:array of coords for the hall points
   *they are the exact same just one is for x start and the other is for y start
   *these need to be updated but because they are long but its fine for now
   */
  static hallYstart(roomOne, roomTwo){
     var heightOne = roomOne[0].y - roomOne[roomOne.length-1].y;
     var widthOne = roomOne[0].x - roomOne[roomOne.length-1].x;
     var heightTwo = roomTwo[0].y - roomTwo[roomTwo.length-1].y;
     var widthTwo = roomTwo[0].x - roomTwo[roomTwo.length-1].x;
     var midOne = {x: Math.ceil(widthOne/2)+roomOne[roomOne.length-1].x, y: Math.ceil(heightOne/2)+roomOne[roomOne.length-1].y};
     var midTwo = {x: Math.ceil(widthTwo/2)+roomTwo[roomTwo.length-1].x, y: Math.ceil(heightTwo/2)+roomTwo[roomTwo.length-1].y};
     var distance = {x: Math.ceil(midOne.x-midTwo.x), y: Math.ceil(midOne.y-midTwo.y)};
     var hallCords = [];
     var hallYmath = 0;
     hallCords.push({x:Math.ceil(midOne.x), y:Math.ceil(midOne.y)});
     for(var i = 1; i < Math.abs(distance.y)+1; i++){
      if(i==1){
       
      }
       if(distance.y > 0){
        if(Math.ceil(midOne.y)-i >= 0){
         var posStatY = Math.ceil(midOne.y)-i;
        }
        hallCords.push({x:Math.ceil(midOne.x),y:Math.abs(posStatY)});
       }
       else if(distance.y < 0){
        var negStatY = Math.ceil(midOne.y)+i;
        hallCords.push({x:Math.ceil(midOne.x),y:Math.abs(negStatY)});
       }
         var hallYmath = hallCords.length - 1;
     }
     for(var j = 1; j < Math.abs(distance.x)+1; j++){
      if(distance.x > 0){
       if(Math.ceil(midOne.x)-j >= 0){
        var posStatX = Math.ceil(midOne.x)-j;
       }
        hallCords.push({x:Math.abs(posStatX), y:hallCords[hallYmath].y});
      }   
      else if(distance.x < 0){
       var negStatX = Math.ceil(midOne.x)+j;
       hallCords.push({x:Math.abs(negStatX), y:hallCords[hallYmath].y});
      }       
     }
     return hallCords;
  }
  static hallXstart(roomOne, roomTwo){
     var heightOne = roomOne[0].y - roomOne[roomOne.length-1].y;
     var widthOne = roomOne[0].x - roomOne[roomOne.length-1].x;
     var heightTwo = roomTwo[0].y - roomTwo[roomTwo.length-1].y;
     var widthTwo = roomTwo[0].x - roomTwo[roomTwo.length-1].x;
     var midOne = {x: Math.ceil(widthOne/2)+roomOne[roomOne.length-1].x, y: Math.ceil(heightOne/2)+roomOne[roomOne.length-1].y};
     var midTwo = {x: Math.ceil(widthTwo/2)+roomTwo[roomTwo.length-1].x, y: Math.ceil(heightTwo/2)+roomTwo[roomTwo.length-1].y};
     var distance = {x: Math.ceil(midOne.x-midTwo.x), y: Math.ceil(midOne.y-midTwo.y)};
     var hallCords = [];
     var hallYmath = 0;
     hallCords.push({x:Math.ceil(midOne.x), y:Math.ceil(midOne.y)});
     for(var i = 1; i < Math.abs(distance.x)+1; i++){
       if(distance.x > 0){
        if(Math.ceil(midOne.x)-i >= 0){
         var posStatX = Math.ceil(midOne.x)-i;
        }
        hallCords.push({x:Math.abs(posStatX),y:Math.ceil(midOne.y)});
       }
       else if(distance.x < 0){
        var negStatX = Math.ceil(midOne.x)+i;
        hallCords.push({x:Math.abs(negStatX),y:Math.ceil(midOne.y)});
       }
         var hallXmath = hallCords.length - 1;
     }
     for(var j = 1; j < Math.abs(distance.y)+1; j++){
      if(distance.y > 0){
       if(Math.ceil(midOne.y)-j >= 0){
        var posStatY = Math.ceil(midOne.y)-j;
       }
       hallCords.push({x:hallCords[hallYmath].x, y:Math.abs(posStatY)});
      }   
      else if(distance.y < 0){
       var negStatY = Math.ceil(midOne.y)+j;
       hallCords.push({x:hallCords[hallYmath].x, y:Math.abs(negStatY)});
      }       
     }
     return hallCords;
  }

  /*removeBorder()
   *@param {array} room:a select room(rooms are made of array of coords)
   *@param {int} width:width of the room
   *@param {int} height:height of the room
   *@param {array} rooms:all the rooms
   */
  static removeBorder(room, width, height){
    let border = room; // make a set of coordinates based on the map constraints
    let smalls = {x:width+1,y:height+1};
    let biggy = {x:0,y:0};
     for (var i = 0; i < border.length; i++) {
       if (border[i].x < smalls.x) {smalls.x = border[i].x;}
       if (border[i].y < smalls.y) {smalls.y = border[i].y;}
       if (border[i].x > biggy.x) {biggy.x = border[i].x;}
       if (border[i].y > biggy.y) {biggy.y = border[i].y;}
     }
     let coords = [];
     for (var i = 0; i < border.length; i++) {
       var isBorder = false;
       if ((border[i].x == biggy.x)||(border[i].y == biggy.y)||(border[i].x == smalls.x)||(border[i].y == smalls.y)) {
         isBorder = true;
       }
       if (!isBorder) {coords.push(border[i]);}
   }
   return coords;
  }

  /* coordCheck(seta, setb)
   *@param {array} seta:first set of coords
   *@param {array} setb:second set of coords
   *@returns {bool} true or false 
   *takes 2 arrays of coordinates and checks them to see if there is a coordinate in one
   *that is this in the other. If so it returns a true, if not, it returns a false.
   */
  static coordCheck(seta, setb){
    for (var i = 0; i < seta.length; i++) {
      for (var j = 0; j < setb.length; j++) {
        if ((seta[i].x == setb[j].x) && (seta[i].y == setb[j].y)) {
          return true;
        }
      }
    }
    return false;
  }

  /*dis()
  *dis is a distance function
  */
  static dis(start, end){
   let num = undefined;
   let max = Math.max(start,end);
   if (start != end) {
     if (max < start) {num = start - max;}
     if (max > start) {num = max - start;}
     if (max < end) {num = end - max;}
     if (max > end){num = max - end;}
     return num;
   }else {
     return start - end;
   }
  }

  static cordline(start, end){
     let xdis = this.dis(start.x, end.x);// these are to add to start and end
     let ydis = this.dis(start.y, end.y);// this one is the same but just y
     let obj = {};
     let retAry = [];
     if (ydis != 0) {
       let addTo = Math.min(start.y, end.y);
       console.log(ydis-2);
       console.log(addTo);
       console.log(end.x);
       for (var i = addTo; i < ydis-2; i++) {
         console.log("fnjius");
         obj = {x:end.x,y:[i]}
         retAry.push(obj);
       }
     }
     if (xdis != 0) {
       let addTo = Math.min(start.y, end.y);
       for (var i = addTo.x; i < xdis-2; i++) {
         addTo.x ++;
       }
     }
     return retAry;
  }
}
