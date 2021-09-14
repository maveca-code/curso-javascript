'use strict';

/*
Escribir un programa que escriba en pantalla los divisores de 
un numero dado.
*/

window.addEventListener('load', () => {

    //Pedir numero por pantalla

    var numero = parseInt(prompt("Introduce un numero", ""));
    var divisores  = " ";

    //Hallamos los divisores del numero

    for(var i = 1; i <= numero; i++){
        
        if(numero % i === 0){
            divisores += i+", ";
        }
    }
    document.write("Los divisores de "+numero+" son: "+divisores);
});