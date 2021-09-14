'use strict'

/*
A partir del siguiente array que se proporciona:
var valores = [true, 5, false, "hola", "adios", 2];
    1. Determinar cual de los dos elementos de texto es mayor
    2. Utilizando exclusivamente los dos valores booleanos del 
    array , determinar los operadores necesarios para obtener un 
    resultado true y el otro resultado false
    3. Determinar el resultado de las cinco operaciones matematicas
    realizadas con los elementos numericos
*/

var valores = [true, 5, false, "hola", "adios", 2];

//Determinar que elemento de texto es mayor
if (valores[3].length > valores[4].length) {
    alert("El texto " + valores[3] + " es mayor que el texto " + valores[4]);
} else if (valores[3].length < valores[4].length) {
    alert("El texto " + valores[4] + " es mayor que el texto " + valores[3]);
} else {
    alert("Ambos texto son igual de grandes");
}

//Obtenemos un resultado true y false con los valores booleanos

alert(valores[0] || valores[2]);

alert(valores[2] && valores[0]);


//Operaciones matematicas
var suma = valores[1] + valores[5];
var resta = valores[1] - valores[5];
var multiplicacion = valores[1] * valores[5];
var division = valores[1] / valores[5];
var division_resto = valores[1] % valores[5];

alert("El resultado de la suma es: " + suma);
alert("El resultado de la resta es: " + resta);
alert("El resultado de la multiplicación es: " + multiplicacion);
alert("El resultado de la division es " + division + " y el resto de la division es " + division_resto);
