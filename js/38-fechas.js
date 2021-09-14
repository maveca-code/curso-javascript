'use strict'

var fecha = new Date();
console.log(fecha);

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();


var textoHora = `
    El año es: ${year}
    El mes es: ${mes} (mes empieza a contar en 0)
    El dia es: ${dia}
    La hora es: ${hora}
`;

console.log(textoHora);

//Funciones matematicas
//numero aleatorio
var aleatorio = Math.random()*10;
console.log(aleatorio);
//redondear numero aleatorio
console.log(Math.ceil(aleatorio));