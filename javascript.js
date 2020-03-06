//defult javascript generated text for the map
document.getElementById("map").innerHTML = "Map Selected";
var demo = new Map(70,40);//90,50 works well for a bigger map
document.getElementById("map").innerHTML = demo.map;
document.getElementById("drwbtn").onclick = setInterval(function(){ document.getElementById("map").innerHTML = demo.map; }, 1);
        demo._setBeginningPos();
        demo._character = characterNew;
        demo._generateMap(undefined);
document.addEventListener('keyup', keyPress);
function keyPress(e){
    var direct = undefined;
        if(e.key == "a" || e.key == "A"){
            direct = "West";
            return demo._changePosition(direct);
        }
        if(e.key == "d" || e.key == "D"){
            direct = "East";
            return demo._changePosition(direct);
        }
        if(e.key == "w" || e.key == "W"){
            direct = "North";
            return demo._changePosition(direct);
        }
        if(e.key == "s" || e.key == "S"){
            direct = "South";
            return demo._changePosition(direct);
        }
}