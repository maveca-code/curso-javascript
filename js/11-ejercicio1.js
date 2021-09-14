'use strict'

/*
Programa que pida dos numeros y nos diga cual es el mayor, el menor
y si son iguales
PLUS: Si los numeros no son un numero o son menores a cero, nos los 
vuelva a pedir
*/

var numero1 = parseInt(prompt("Introduce un numero", ""));
var numero2 = parseInt(prompt("Introduce otro numero", ""));
console.log(numero1);

while(numero1 < 0 || numero2 < 0 || isNaN(numero1)|| isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce un numero", ""));
    numero2 = parseInt(prompt("Introduce otro numero", ""));  
}

if(numero1 > numero2){
    console.log("El "+numero1+ " es mayor que el "+numero2);
}else if(numero1 < numero2) {
    console.log("El "+numero2+" es mayor que el "+numero1);
}else{
    console.log("Ambos numeros son iguales");
}