'use strict'

//Transformación de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso de Victor Robles";
var texto2 = "es Muy buen Curso";

var dato = numero.toString();//convierte el numero en un string
var datoMayusculas = texto1.toUpperCase();
var datoMinusculas = texto2.toLowerCase(); 
console.log(typeof(dato));
console.log(datoMayusculas);
console.log(datoMinusculas);

//Calcular longitud
var nombre = "Mario";
var nombres = ["Mario", "Nerea"];

console.log(nombre.length);
console.log(nombres.length);

//Concatenar textos
var textoTotal = texto1 +" "+texto2;
console.log(textoTotal);

var textoConcatenado = texto2.concat(" "+texto1);
console.log(textoConcatenado);

//Metodos de busqueda
var busqueda = texto1.indexOf("curso");//busca primera coincidencia
console.log(busqueda);
var busqueda = texto1.lastIndexOf("curso");//busca la ultima coincidencia
console.log(busqueda);
var busqueda = texto1.search("curso");//parecido a indexOf
console.log(busqueda);
var busqueda = texto1.match(/curso/g);//devuelve un array de los objetos que encuentre
console.log(busqueda);
var busqueda = texto1.substr(14,5);//Indicamos desde que caracter empezar la busqueda y que numero de caracteres mostrar
console.log(busqueda);
var busqueda = texto1.charAt(44);//Indicamos la letra que deseamos sacar
console.log(busqueda);
var busqueda = texto1.startsWith("Bienvenido al curso");//Indica true o false si el string empieza por el texto elegido
console.log(busqueda);
var busqueda = texto1.includes(Victor);//Indica si la palabra existe en el string
console.log(busqueda);

//Funciones de reemplazo
var busqueda = texto1.replace("JavaScript", "Angular");//Reemplaza una palabra por otra
console.log(busqueda);
var busqueda = texto1.slice(14, 22);//Devuelve un string a partir del caracter indicado, se puede añadir un segundo parametro que indica la longitud que deseamos
console.log(busqueda);
var busqueda = texto1.splite(" ");//Introduce el string en un array. Tambien podemos indicar el separador del array
console.log(busqueda);
var busqueda = texto1.trim();//Quita los espacios que tiene la cadena de texto por detras y por delante
console.log(busqueda);
