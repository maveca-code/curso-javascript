'use strict'

//Arrays, arreglos, matrices
//Las dos formas de hacer un array

var array  = ["Mario", "Juan", "Nerea","Maria Jose", 12, 56,true];

var lenguajes = new Array("PHP","JS","Go","Java","C#", "C");

console.log(array.length);
console.log(lenguajes);
console.log(array[2]);

/*var elemento = parseInt(prompt("¿Que elemento del array quieres?", 0));

if(elemento >= array.length){
    alert("Introduce el numero correcto menor que "+array.length);
}else{
    alert(array[elemento]);
}*/

//Mostrar todos los elementos del array por pantalla
document.write("<h1>Lenguajes de programación del 2018</h1>");
/*for(var i = 0; i<=lenguajes.length-1; i++){
    document.write(lenguajes[i]+"<br>");
}*/

//Metodo forEach para recorrer arrays
lenguajes.forEach((elemento, index, data) =>{//los parametros index, data son opcionales
    console.log(data);
    document.write(index+" - "+elemento+"<br>");
});

//Metodo for in para recorrer array
for(let lenguaje in lenguajes){
    document.write(lenguajes[lenguaje]+"<br>");
}

//Busquedas dentro de un array
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});

//Es la misma funcion que la de arriba solo que de tipo flecha
var busqueda2 = lenguajes.find(lenguaje => lenguaje == "PHP7");

console.log(busqueda);
console.log(busqueda2);

//Busca el indice en el que se encuentra lo que buscamos
var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
console.log(busqueda2);

//Encuentra si existen valores de un tipo
var precios = [10,20,50,80,12];

var busqueda2 = lenguajes.some(lenguaje => lenguaje == "PHP");
var busqueda_precio = precios.some(precio => precio > "80");
console.log(busqueda2);
console.log(busqueda_precios);

