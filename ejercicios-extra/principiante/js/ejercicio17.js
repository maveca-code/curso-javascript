'use strict';

/*
Escribe un programa que pida una frase y escriba las vocales 
que aparecen
*/

window.addEventListener('load', () => {

    var cadena = prompt("Escribe una frase", "");
    var vocales = " ";

    //Quitamos los espacios en blanco de los extremos
    cadena.trim();

    //Convertir la cadena en un arreglo y unimos todas las letras
    var nuevaCadena = cadena.split(" ").join("");
    
    
    /*Hacer un bucle que mire todo el contenido del array
    y si concuerda con la letra añadirla a la variable vocales 
    y mostrar resultado*/

    for(let i = 0; i <  nuevaCadena.length; i++){
        if(nuevaCadena[i] == "a" || nuevaCadena[i] == "e" || nuevaCadena[i] == "i" || nuevaCadena[i] == "o" || nuevaCadena[i] == "u"){
            vocales+=nuevaCadena[i]+" ";
        }
    }

    alert("La frase introducida contiene las vocales: "+vocales);
});