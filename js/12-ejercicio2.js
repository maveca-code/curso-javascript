'use strict'

/*
Utilizando un bucle mostrar la suma y la media de los numeros introducidos 
hasta introducir un numero negativo y ahí mostrar el resultado
*/
var numero = parseInt(prompt("Introduce un numero", ""));
var suma = 0;
var media = 0;
var contador = 0;

while(numero > 0 || !isNaN(numero)){
    
    contador++;
    suma += numero;
    numero = parseInt(prompt("Introduce otro numero", ""));
    media = suma/contador;   
    
}
console.log("La suma de los valores introducidos es "+suma+ " y la media es: "+media);