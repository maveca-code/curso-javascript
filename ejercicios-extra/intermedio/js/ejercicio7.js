'use strict';

/*
Realizar un programa que, pidiendo la introdución de un numero, 
averigüe mediante una función, si dicho numero que se le pase es 
positivo, negativo o nulo. Para ello, deberá escribir en pantalla 
en caso positivo, el mensaje "El número es positivo". En el caso 
de ser negativo escribirá "El número es negativo". Si resulta ser 
nulo escribirá "El número es nulo".
*/

window.addEventListener('load', () => {

    var numero = parseInt(prompt("Introduce un número",""));

    tipoNumero(numero);
});

function tipoNumero(numero){

    if(numero > 0){
        alert("El número es positivo");
    }else if(numero < 0){
        alert("El número es negativo");
    }else{
        alert("El número es nulo");
    }
}