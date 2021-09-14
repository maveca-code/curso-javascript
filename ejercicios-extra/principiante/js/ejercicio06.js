'use strict'

/*
El cálculo de la letra del Documento Nacional de Identidad (DNI) 
es un proceso matemático sencillo que se basa en obtener el resto 
de la división entera del número de DNI y el número 23. 
A partir del resto de la división, se obtiene la letra 
seleccionándola dentro de un array de letras.

El array de letras es:

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

Por tanto si el resto de la división es 0, la letra del DNI 
es la T y si el resto es 3 la letra es la A. 
Con estos datos, elaborar un pequeño script que:

    1. Almacene en una variable el número de DNI indicado por el 
    usuario y en otra variable la letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario que indique su número y su letra, se puede utilizar la función prompt())
    2.En primer lugar (y en una sola instrucción) se debe comprobar 
    si el número es menor que 0 o mayor que 99999999. 
    Si ese es el caso, se muestra un mensaje al usuario indicando 
    que el número proporcionado no es válido y el programa no 
    muestra más mensajes.
    3.Si el número es válido, se calcula la letra que le corresponde 
    según el método explicado anteriormente.
    4.Una vez calculada la letra, se debe comparar con la letra 
    indicada por el usuario. Si no coinciden, se muestra un mensaje 
    al usuario diciéndole que la letra que ha indicado no es 
    correcta. En otro caso, se muestra un mensaje indicando que el 
    número y la letra de DNI son correctos.

*/

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
    'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero_dni = parseInt(prompt("Indique su numero de DNI", ""));
var letra_dni = prompt("Indique su letra de DNI","");


if(numero_dni < 0 || numero_dni > 99999999){
    alert("El numero proporcionado no es valido");
}else{
    var resultado = numero_dni % 23;
    
    //Comparo el resultado con la posicion de la letra en el array
    if(letras[resultado] != letra_dni.toUpperCase()){
        alert("La letra indicada NO es correcta");
    }else{
        alert("El numero y la letra de DNI son correctos");
    }
}