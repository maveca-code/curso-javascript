'use strict';

/*
El factorial de un numero entero n es una operación matematica 
que consiste en multiplicar todos los factores n x (n-1) x (n-2) 
x ... x 1. Asi, el factorial de 5 (escrito como 5!) es igual a: 
5! = 5 x 4 x 3 x 2 x 1 = 120 

Utilizando la estructura for, crear un script que calcule el 
factorial de un numero entero.
*/
var factorial = 1;
var numero = parseInt(prompt("Introduce un numero", ""));
//Incremento el numero introducido en 1 para que al restar uno se quede los factores de ese numero
numero++;

//Bucle for para sacar el factorial
for(var i = 1; i < numero; i++){
    
    //Sacamos los factores del numero y los multiplicamos
    var factor = (numero-i);
    factorial *= factor;

    console.log(factorial);
}

alert("El factorial del número introducido es: "+factorial);