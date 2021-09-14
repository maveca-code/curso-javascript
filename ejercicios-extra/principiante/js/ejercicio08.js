'use strict';

/*
Escribir el codigo de una funcion a la que se pasa como parametro 
un numero entero y devuelve como resultado una cadena de texto 
que indica si el numero es par o impar. Mostrar por pantalla el 
resultado devuelto.
*/

var number = parseInt(prompt("Introduce un numero", ""));

function parImpar(number){
    if(number % 2 == 0){
        return "par";
    }else{
        return "impar"
    }
}

alert("El número introducido es: " +parImpar(number));