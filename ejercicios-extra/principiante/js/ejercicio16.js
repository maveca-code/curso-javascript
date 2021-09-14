'use strict';

/*
Escribe un programa que pida una frase y escriba cuantas veces 
aparece la letra a
*/

window.addEventListener('load', () => {

    var cadena = prompt("Escribe una frase", "");

    var contador = 0;

    //Quitamos los espacios en blanco de los extremos
    cadena.trim();

    //Convertir la cadena en un arreglo y unimos todas las letras
    var nuevaCadena = cadena.split(" ").join("");
    
    
    /*Hacer un bucle que mire todo el contenido del array
    y si concuerda con la letra a sumar 1*/

    for(let i = 0; i <  nuevaCadena.length; i++){
        if(nuevaCadena[i] == "a"){
            contador++;
        }
    }

    alert("La frase introducida contiene: "+contador+" letras a");
});