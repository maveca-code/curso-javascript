'use strict';

/*
Escribir un script con un botón para crear una nueva ventana. La 
nueva ventana tendrá a su vez un botón para cerrarla.
*/

window.addEventListener('load', () => {

    var nueva = document.querySelector('#abrirVentana');

    nueva.addEventListener('click', nuevaVentana);
});

function nuevaVentana(){
    
    //Crea la nueva ventana
    var ventana = open("","Nueva Ventana");
    
    //Crea el boton para cerrar la ventana
    ventana.document.write("<button>Cerrar ventana</button>");
    
}