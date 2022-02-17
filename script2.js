let screen = document.getElementById("screen");

let ctx = screen.getContext("2d");

//CRIA UM RETÂNGULO PREENCHIDO E AZUL
//ctx.fillStyle = "blue";
//ctx.fillRect(10, 10, 100, 200);

//CRIA UM RETÂNGULO VAZIO E VERMELHO
//ctx.strokeStyle = "red";
//ctx.strokeRect(10, 10, 100, 200);


//CRIANDO UM RETÂNGULO COM BORDA VERMELHA E PREENCHIMENTO AZUL!
ctx.rect(10, 10, 100, 200);
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.fillStyle = "blue";
ctx.fill();
ctx.stroke();

ctx.clearRect(20, 20, 30, 30);
