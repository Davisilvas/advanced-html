let player = document.getElementById("player")

let initialX = 0;
let initialY = 0;

function movePlayerTo(x,y){

    let posX = x + "px";
    let posY = y + "px";

    player.style.top = posX;
    player.style.left = posY;
}


setInterval(function(){

    movePlayerTo(initialX++, initialY++);

},10);