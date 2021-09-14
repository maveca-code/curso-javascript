'use strict'

/*
Calculadora:
- Pida dos numeros por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el 
resultado de sumar, restar, multiplicar y dividir esas dos cifras
*/

var numero1 = parseInt(prompt("Introduce un numero", ""));
var numero2 = parseInt(prompt("Introduce otro numero", ""));

while(isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce un numero", ""));
    numero2 = parseInt(prompt("Introduce otro numero", "")); 
}

document.write("<h2>Los resultados de las operaciones realizadas<h2>");
var resultado = "Suma: "+(numero1+numero2)+"<br>Resta: "+(numero1-numero2)+"<br>Multiplicacion: "+(numero1*numero2)+"<br>Division: "+(numero1/numero2);
var resultadoCMD ="Suma: "+(numero1+numero2)+"\nResta: "+(numero1-numero2)+"\nMultiplicacion: "+(numero1*numero2)+"\nDivision: "+(numero1/numero2)

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD)