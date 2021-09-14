'use strict'

/*
Tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt("Introduce un numero", ""));

while(isNaN(numero)){
    numero = parseInt(prompt("Introduce un numero", ""));
}

for(var i = 0; i <= 10; i++){
    console.log(numero+" X "+i+" = "+(numero*i));
}