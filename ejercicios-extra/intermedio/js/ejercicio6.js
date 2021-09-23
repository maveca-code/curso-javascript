'use strict';

/*
Realizar un programa que una vez que solicita dos numeros por 
teclado, los pasa a una función donde se calcula la suma de estos. 
La funcion devolverá dicho resultado, pero en el caso de que salga 
negativo, deberá cambiarle el signo antes de devolverlo. Imprimir 
el resultado en la función principal.
*/

window.addEventListener('load', () => {

    var n1 = parseInt(prompt("Introduce un numero", ""));
    var n2 = parseInt(prompt("Introduce otro numero", ""));

    suma(n1, n2);
});

function suma(n1, n2){

    let resultado = n1 + n2;

    if(resultado < 0 ){
        resultado *= -1;
    }

    alert("El resultado de la suma es: "+resultado);
}