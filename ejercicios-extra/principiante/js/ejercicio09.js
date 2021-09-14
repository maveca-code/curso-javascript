'use strict';

/*
Definir una funcion que muestre información sobre una cadena de 
texto que se le pasa como argumentro. A partir de la cadena que se 
le pasa, la funcion determina si esa cadena esta formada solo por 
mayusculas, solo por minusculas o por una mezcla de ambas.
*/

var cadena = prompt("Introduce una cadena de texto", "");

function infoCadena(cadena){
    if(cadena === cadena.toUpperCase()){
        alert("La cadena esta formada solo por mayúsculas");
    }else if(cadena === cadena.toLowerCase()){
        alert("La cadena esta formada solo por minúsculas");
    }else{
        alert("La cadena esta formada por mayúsculas y minúsculas");
    }
}

infoCadena(cadena);