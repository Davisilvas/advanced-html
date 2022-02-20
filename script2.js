let screen = document.getElementById("screen");

let ctx = screen.getContext("2d");

let x = 250;
let y = 250;
let raio = 100;
let inicio = 0;
let fim = 2 * Math.PI;

ctx.beginPath();
ctx.strokeStyle = "brown";

ctx.arc(x, y, raio, inicio, fim);

ctx.stroke();