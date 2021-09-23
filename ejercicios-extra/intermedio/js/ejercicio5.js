'use strict';

/*
Realizar un programa que simule, mediante una funcion denominada 
cuenta, como el ordenador cuenta por pantalla, desde 0 hasta un 
numero a determinar por el usuario. Dicho numero se pide en la 
funcion principal y se envia a la funcion cuenta por valor, donde 
se iran imprimiendo,
*/

window.addEventListener('load', () => {

    var numero = parseInt(prompt("Introduce un numero",""));

    cuenta(numero);
});

function cuenta(numero){

    for(var i = 0; i<=numero; i++){
        alert(i);
    }
}