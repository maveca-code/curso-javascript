'use strict';

/*
Escribir un script que simule el lanzamiento de dos dados.  Hacer 
uso de la función Math.random para obtener numeros aleatorios 
entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar 
el resultado de lanzar dos dados y anotar en un array el numero 
de apariciones de dicha suma, repitiendo 36.000 veces esta operación
*/

window.addEventListener('load', () => {

    lanzarDados();

});

//Función que se encargara de lanzar dados

function lanzarDados() {

    //Creacion de variables globales
    var suma = 0;
    var listaResultado = [];

    for (var i = 0; i < 36000; i++) {
        
        //Creamos variables dados
        var dado1 = Math.floor(Math.random() * 6) + 1;
        var dado2 = Math.floor(Math.random() * 6) + 1;
        //Sumamos los valores de cada dado y añadimos a un array
        suma = dado1 + dado2;

        listaResultado.push(suma);
    }
    console.log(listaResultado);
}