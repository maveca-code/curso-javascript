'use strict';

/*
Utiliza el objeto screen para obtener la dimensión de la pantalla 
y abre una nueva ventana en el centro de la pantalla.
*/

window.addEventListener('load', () => {
   
    alert("La dimension de la pantalla son "
    +screen.width+" X "+screen.height);

    window.open("","Nueva Ventana","width=600, height=400");
});