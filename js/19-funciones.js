'use strict'

//Funciones
//Una función es una agrupación reutilizable de un conjunto de instrucciones

function calculadora(){
    //Conjunto de instrucciones
    console.log("Hola soy la calculadora");
    console.log("Si soy yo");

    return "Mensaje del return";
}

console.log(calculadora(), calculadora());

//Invocar o llamar a la función
calculadora();
calculadora();

//Funcion con parametros
function calculadoraParametros(numero1, numero2, mostrar=false){
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1+numero2));
    console.log("Multiplicación: "+(numero1*numero2));
    console.log("División: "+(numero1+numero2));
    console.log("Parametro opcional: "+mostrar);
}

calculadoraParametros(4,4);
calculadoraParametros(5,3,true);