'use strict';

/*
A partir de la pagina web proporcionada, completar el codigo 
JavaScript para que: 
    1.Cuando se pinche sobre el primer enlace, se oculte su sección 
    relacionada.
    2.Cuando se vuelva a pinchar sobre el mismo enlace, se muestre 
    otra vez esa sección de contenidos.
    3.Completar el resto de enlaces de la pagina para que su 
    comportamiento sea idéntico al del primer enlace
    4.Cuando una seccion se oculte, debe cambiar el mensaje 
    del enlace asociado(pista: propiedad innerHTML).
*/

window.addEventListener('load',()=>{

    var enlace_1 = document.querySelector("#enlace_1");
    var enlace_2 = document.querySelector("#enlace_2");
    var enlace_3 = document.querySelector("#enlace_3");

    enlace_1.addEventListener('click', mostrarOcultarParrafo1);
    enlace_2.addEventListener('click', mostrarOcultarParrafo2);
    enlace_3.addEventListener('click', mostrarOcultarParrafo3);

});

function mostrarOcultarParrafo1(){
    var contenido = document.querySelector('#contenidos_1');

    if(contenido.style.display == " " || contenido.style.display == "block"){
        contenido.style.display = "none";
        enlace_1.innerHTML = "Mostrar contenidos";
    }else{
        contenido.style.display = "block";
        enlace_1.innerHTML = "Ocultar contenidos";
    }
}

function mostrarOcultarParrafo2(){
    var contenido = document.querySelector('#contenidos_2');

    if(contenido.style.display == " " || contenido.style.display == "block"){
        contenido.style.display = "none";
        enlace_2.innerHTML = "Mostrar contenidos";
    }else{
        contenido.style.display = "block";
        enlace_2.innerHTML = "Ocultar contenidos";
    }
}

function mostrarOcultarParrafo3(){
    var contenido = document.querySelector('#contenidos_3');

    if(contenido.style.display == " " || contenido.style.display == "block"){
        contenido.style.display = "none";
        enlace_3.innerHTML = "Mostrar contenidos";
    }else{
        contenido.style.display = "block";
        enlace_3.innerHTML = "Ocultar contenidos";
    }
}