'use strict';

/*
Escribe un programa que pida una frase y escriba cuantas de las 
letras que tiene son vocales.
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
        if(nuevaCadena[i] == "a" || nuevaCadena[i] == "e" || nuevaCadena[i] == "i" || nuevaCadena[i] == "o" || nuevaCadena[i] == "u"){
            contador++;
        }
    }

    alert("La frase introducida contiene : "+contador+" vocales");
});