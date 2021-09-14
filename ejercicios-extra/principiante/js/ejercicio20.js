'use strict';

/*
Escribe un programa que pida un numero y nos diga si es divisible 
por 2, 3, 5 o 7(solo hay que comprobar si lo es por uno de los 
cuatro).
*/

window.addEventListener('load', () => {

    //Pedir numero al usuario

    var numero = parseInt(prompt("Introduce un numero", ""));

    //Comprobar si es divisible por 2, 3, 5 o 7

    if(numero % 2 === 0){
        alert("El numero "+numero+" es divisible por 2");
    }else if(numero % 3 === 0){
        alert("El numero "+numero+" es divisible por 3");
    }else if(numero % 5 === 0){
        alert("El numero "+numero+" es divisible por 5");
    }else if(numero % 7 === 0){
        alert("El numero "+numero+" es divisible por 7");
    }else{
        alert("El numero "+numero+" NO es divisible por 2, 3, 5 o 7");
    }
});