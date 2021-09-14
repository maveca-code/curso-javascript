'use strict'

//DOM - Document Object Model

//Conseguir elementos con un ID concreto
var caja = document.getElementById("micaja");

console.log(caja);

var cajaContenido = document.getElementById("micaja").innerHTML;

console.log(cajaContenido);

//cambiar valor
caja.innerHTML = "TEXTO EN LA CAJA DESDE JS";
caja.style.background = "tomato";
caja.style.padding = "20px";
caja.className = "nuevaClase";

function cambiaColor(colour){
    caja.style.color = colour;
}

cambiaColor("gold");

//querySelector
var caja = document.querySelector("#micaja");
caja.style.background = "blue";

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

var contenidoTexto = todosLosDivs[2].textContent;
console.log(contenidoTexto);

var nuevoTexto = todosLosDivs[2].innerHTML = "Otro texto para el segundo elemento";
console.log(nuevoTexto);

var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo); 
    }
};

//Conseguir elementos de una clase
var divRojos = document.getElementsByClassName('rojo');
console.log(divRojos);

var div
for(div in divRojos){
    if(divRojos[div].className == "rojo"){
        divRojos[div].style.background = "red"; 
    }
}
console.log(divRojos);

/*
Query selector solo saca el primer elemento de una clase,
para seleccionar varios elementos usamos querySelectorAll
*/
var divAmarillos = document.querySelector(".amarillo");
console.log(divAmarillos);

divAmarillos.style.background = "yellow";
