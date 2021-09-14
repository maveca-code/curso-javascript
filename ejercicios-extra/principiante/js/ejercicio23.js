'use strict';

/*
Escribir un programa que escriba en pantalla los divisores comunes 
de dos numeros dados.
*/

window.addEventListener('load', () => {

    //Pedir numeros por pantalla

    var numero1 = parseInt(prompt("Introduce un numero", ""));
    var numero2 = parseInt(prompt("Introduce otro numero", ""));
    var divisores1  = " ";
    var divisores2  = " ";
    var divisorComun = "";

    //Hallamos los divisores del numero

    for(var i = 1; i <= numero1; i++){
        
        if(numero1 % i === 0){
            divisores1 += i;
        }
    }
   
    for(var i = 1; i <= numero2; i++){
        
        if(numero2 % i === 0){
            divisores2 += i;
        }
    }
    
    //Comparo los divisores comunes
    for(var i = 0; i < divisores1.length; i++){
        for(var j = 0; j < divisores2.length; j++){
            if(divisores1[i] === divisores2[j]){
                divisorComun += divisores2[j]+" ";
                divisorComun.trim();
            }
        }
    }

    document.write("Los divisores comunes de "+numero1+" y "+numero2+" son: "+divisorComun);
});