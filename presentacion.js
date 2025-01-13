let nav = document.querySelector(".contenedor-listas");
let abrir = document.querySelector("#btn-abrir");
let cerrar = document.querySelector("#btn-cerrar");


abrir. addEventListener("click", ()=>{
    console.log("Abrir");
    nav.classList.add("visible");

});

cerrar. addEventListener("click", ()=>{
    console.log("Cerrar");
    nav.classList.remove("visible");

});