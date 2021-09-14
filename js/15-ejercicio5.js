'use strict'

/*
Muestra todos los numeros divisores de un numero 
introducidos por pantalla
*/

var numero = parseInt(prompt("Introduce un numero", ""));
var contador = 1;

while(contador <= numero){
    if(numero%contador == 0){
        console.log(contador);
    }
    contador++;
}