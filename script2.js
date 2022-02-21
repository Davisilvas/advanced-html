let screen = document.getElementById("screen");

let ctx = screen.getContext("2d");

let circle = {
    x:  250,
    y:  250,
    raio: 100,
    inicio: 0,
    fim: 0 * Math.PI,
    backwards: true,
}

function drawCircle(c){

    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fillStyle = "beige";
    ctx.fill();
    
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "brown";
    ctx.fillStyle = "blue";
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.backwards);
    ctx.fill();
    ctx.stroke();
}

setInterval(function(){

    if (circle.fim < 2 * Math.PI){
        circle.fim += 0.3;
        //circle.x -= 3;
        circle.x += 3;

    }

    drawCircle(circle);


}, 30)