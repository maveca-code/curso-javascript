'use strict'

var texto = "Hola Mundo soy una variable global";

function holaMundo(texto){
    var hola_mundo = "texto dentro de funcion";
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

var numero = 12;
holaMundo(texto);
//console.log(hola_mundo); //dara error porque es una variable local de la funcion
