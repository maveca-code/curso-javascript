'use strict'

//Parametro Rest
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Sandia", "Pera","Melon","Coco");

//Parametro SPREAD
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas,"Sandia", "Pera","Melon","Coco");