let screen = document.getElementById("screen");

let ctx = screen.getContext("2d");
ctx.moveTo(0 , 0);
ctx.lineTo(250, 250);
ctx.lineTo(500, 0);
ctx.lineWidth = 6;
ctx.strokeStyle = "#ccff00";
ctx.stroke();