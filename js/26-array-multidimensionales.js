'use strict'

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

var cine = [categorias, peliculas];
console.log(cine[0][1]);//accede a la categoria terror
console.log(cine[1][2]);//accede a la pelicula Gran Torino

//Añadir elemento a un array
peliculas.push("Batman"); //añade al final del array
peliculas.unshift("Los vengadores");//añade al inicio del array
console.log(peliculas);

//Eliminar elementos de un array
peliculas.pop();//elimina el ultimo elemento
peliculas.shift();//elimina el primer elemento
console.log(peliculas);

//Convertir array a un string separado por comas
var peliculas_string = peliculas.join();
console.log(peliculas_string);

//Convertir un string en un array
var cadena = "Texto1, texto2, texto3";
var cadena_array = cadena.split(", ");//indicamos por donde tiene que separar
console.log(cadena_array);

//Ordenar arrays
peliculas.sort();//Ordena por orden alfabetico
console.log(peliculas);

peliculas.reverse();//Da la vuelta al array
console.log(peliculas);
