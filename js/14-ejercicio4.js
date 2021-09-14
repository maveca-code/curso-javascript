'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros 
introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce un numero", ""));
var numero2 = parseInt(prompt("Introduce otro numero", ""));

while(isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce un numero", ""));
    numero2 = parseInt(prompt("Introduce otro numero", ""));
}

if(numero1 < numero2){
    for(var i = numero1; i <= numero2; i++){
        if(i%2!=0){
            console.log(i);   
        }
    }
}else if(numero1 > numero2){
    for(var i = numero2; i <= numero1; i++){
        if(i%2!=0){
            console.log(i);   
        }
    }
}else{
    console.log("Ambos numeros son iguales");
}