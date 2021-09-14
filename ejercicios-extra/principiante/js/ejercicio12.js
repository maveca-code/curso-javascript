'use strict'

/*
Completar el codigo JavaScript proporcionado para que cuando se 
pinche sobre el enlace se muestre completo el contenido de texto. 
Ademas , el enlace debe dejar de mostrarse despues de pulsarlo 
por primera vez. La accion de pinchar sobre un enlace forma parte 
de los "Eventos" de JavaScript que se ven en el siguiente capitulo. 
En este ejercicio, solo se debe saber que al pinchar sobre el enlace, 
se ejecuta la funcion llamada muestra().
*/

window.addEventListener('load', ()  => {
    
    //Ocultamos parte del texto
    var oculto = document.querySelector(".oculto").style.display = "none";
});

function muestra(){
    document.querySelector(".oculto").style.display = "block";

    document.getElementById("enlace").style.display = "none";
}
    