'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de 
la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga 
si lo encuentra y su indice
(Se valorará el uso de funciones)
*/

var numeros = [];

while(numeros.length <= 5){
    var numero = parseInt(prompt("Introduce un numero", ""));
    numeros.push(numero);
    
}

function mostrarArray(arr, texto="Los datos introducidos en el array son:"){
    console.log(arr);
    document.write("<h2>"+texto+"</h2><h3>"+arr+" y tiene "+numeros.length+" elementos</h3>");
}

function ordenarArray(arr, texto="Los datos ordenados en el array son:"){
    arr.sort();
    mostrarArray(arr, texto);
}

function invertirArray(arr, texto="Los datos invertidos en el array son:"){
    arr.reverse();
    mostrarArray(arr, texto);
}

function busquedaArray(arr){
    var palabraBuscada = prompt("¿Que valor buscas?", 0);
    var busqueda = arr.some(numero => numero == palabraBuscada);
    var busquedaIndice = arr.findIndex(numero => numero == palabraBuscada);
    if(busqueda == true){
        document.write("El valor que buscas esta en el indice "+busquedaIndice);
    }else{
        document.write("El valor que buscas NO ESTA en el array");
    }
    
}

mostrarArray(numeros);
ordenarArray(numeros);
invertirArray(numeros);
busquedaArray(numeros);