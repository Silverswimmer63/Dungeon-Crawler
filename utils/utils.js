class Utils {

  static randMath(min, max, call="Utils.randMath"){
    min = this.intCheck(min,call);
    max = this.intCheck(min,call);
    if(min >= max){
      throw new Error("Min must always be less than max in " + call + ".")
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


static intCheck(item, call="Utils.intCheck.js"){
    if(Number.isInteger(item)){return item;}
      else{throw new Error( "The method " + call + "and recived " + item + "." )}

    }
 }
