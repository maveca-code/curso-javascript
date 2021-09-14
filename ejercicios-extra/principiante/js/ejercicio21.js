'use strict';

/*
Añadir al ejercicio anterior que nos diga cual de los cuatro es 
divisible (hay que decir todos por los que es divisible).
*/

window.addEventListener('load', () => {

    //Pedir numero al usuario

    var numero = parseInt(prompt("Introduce un numero", ""));

    //Comprobar si es divisible por 2, 3, 5 o 7

    if(numero % 2 === 0){
        alert("El numero "+numero+" es divisible por 2");
    }
    
    if(numero % 3 === 0){
        alert("El numero "+numero+" es divisible por 3");
    } 
    
    if(numero % 5 === 0){
        alert("El numero "+numero+" es divisible por 5");
    } 
    
    if(numero % 7 === 0){
        alert("El numero "+numero+" es divisible por 7");
    }
    
    if(numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0 && numero % 7 !== 0){
        alert("El numero "+numero+" NO es divisible por 2, 3, 5 o 7");
    }
    
});