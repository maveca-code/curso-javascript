'use strict';

/*
Escribir un programa que nos diga si un numero dado es primo 
(no es divisible por ningun otro numero que no sea el mismo 
o la unidad).
*/

window.addEventListener('load', () => {

    //Pedimos numero al usuario

    var numero = parseInt(prompt("Introduce un numero", ""));
    var numeros = [];

    /*Sacamos los divisores del numero introducido y los 
    introducimos en un array*/

    for(var i = 1; i <= numero; i++){
        if(numero % i === 0){
            numeros.push(i);
        }
    }

    /*Comprobamos si el numero es primo, comprobando la longitud
    del array. Si el array tiene mas de dos posiciones no es un 
    numero primo */
    if(numeros.length == 2){
        alert("El numero "+numero+" es un numero primo");
    }
    
});