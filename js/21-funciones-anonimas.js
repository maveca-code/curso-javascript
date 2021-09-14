'use strict'

//Funciones anonimas
//Es una función que no tiene nombre

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 +numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

//callbacks
sumame(5,7, function(dato){
    console.log("La suma es: "+dato);    
},
function(dato){
    console.log("La suma por dos es: "+(dato*2));
});

//funcion de flecha
sumame(5,7, dato => {
    console.log("*************************\nFución de flecha")
    console.log("La suma es: "+dato);    
},
dato => {
    console.log("La suma por dos es: "+(dato*2));
});