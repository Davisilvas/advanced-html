let screen = document.getElementById("screen");

let ctx = screen.getContext("2d");

let img = new Image();
img.src = "./assets/images/mordekai.png"

img.onload = drawImg;

/*function drawImg(){
    ctx.drawImage(this, 20, 20);
}*/

function drawImg(){
    ctx.drawImage(this, 20, 20, this.naturalWidth/2, this.naturalHeight /2);
}