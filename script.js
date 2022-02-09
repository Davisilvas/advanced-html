/* exemplo mostrando que pode criar uma função dentro do próprio addEventeListener. 
image.addEventListener("click",function(){
    image.setAttribute("src", "./images/thumbs down.png")
})*/

//let image = document.getElementById("like");

//image.setAttribute("cor", "vermelho");


let lista = document.getElementById("lista");

let num = parseInt(lista.getAttribute("data-num"));

console.log(lista.dataset.num);

let conteudo = " ";

for(let i =0; i < num; i++){

    conteudo += "<li>" + i + "</li>"

}

lista.innerHTML = conteudo;