'use strict'

/*
Definir una funcion que determine si la cadena de texto que se le 
pasa como parametro es un palindromo, es decir, si se lee de la 
misma forma desde la izquierda y desde la derecha. Ejemplo de 
palindromo complejo: "La ruta nos aporto otro paso natural".
*/

var cadena = prompt("Introduce una cadena de texto", "");

function palindromo(cadena){
    //Convierto la cadena a minusculas
    var cadena_minusculas = cadena.toLowerCase();
    
    //Quitamos los espacios de la cadena
    
    //Quitamos los espacios en blanco de los extremos
    cadena_minusculas.trim();
    /*Con split hago un array con las palabras separadas por espacios 
    y con join uno todas las palabras en una cadena*/
    var nueva_cadena = cadena_minusculas.split(" ").join("");

    //Damos la vuelta a la cadena y las comparamos
    
    /*Utilizo los métodos anteriores y el método reverse para 
    invertir el orden del array creado con split */
    var cadena_inversa = cadena_minusculas.split("").reverse().join("");
    var cadena_inversa = cadena_inversa.split(" ").join("");
    
    if(nueva_cadena == cadena_inversa){
        alert("La cadena es un palindromo");
    }else{
        alert("La cadena NO es un palindromo");
    }
    console.log(nueva_cadena);
    console.log(cadena_inversa);
}

palindromo(cadena);