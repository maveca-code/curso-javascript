'use strict';

/*
Completar el codigo JavaScript proporcionado para que se 
añadan nuevos elementos a la lista cada vez que se pulsa sobre 
el boton. Utilizar las funciones DOM para crear nuevos nodos y 
añadirlos a la lista existente. Al igual que sucede en el ejercicio 
anterior, la acción de pinchar sobre un botón forma parte de los 
"Eventos" de JavaScript que se ven en el siguiente capitulo. En 
este ejercicio, solo se debe saber que al pinchar sobre el boton, 
se ejecuta la funcion llamada anade().
*/

function anade(){
    var lu = document.getElementById("lista");
    var nuevoNodo = document.createElement("li");
    var contenido = document.createTextNode("Nuevo nodo");

    nuevoNodo.appendChild(contenido);
    lu.appendChild(nuevoNodo);
}
