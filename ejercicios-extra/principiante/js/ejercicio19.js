'use strict';

/*
Escribe un programa que pida una frase y escriba cuantas veces 
aparecen cada una de las vocales.
*/

window.addEventListener('load', () => {

    var cadena = prompt("Escribe una frase", "");
    var contador_a = 0;
    var contador_e = 0;
    var contador_i = 0;
    var contador_o = 0;
    var contador_u = 0;



    //Quitamos los espacios en blanco de los extremos
    cadena.trim();

    //Convertir la cadena en un arreglo y unimos todas las letras
    var nuevaCadena = cadena.split(" ").join("");
    
    
    /*Hacer un bucle que mire todo el contenido del array
    y si concuerda con la letra a sumar 1*/

    for(let i = 0; i <  nuevaCadena.length; i++){
        
        switch(nuevaCadena[i]){
            case 'a':
                contador_a++;
                break;
            case 'e':
                contador_e++;
                break;
            case 'i':
                contador_i++;
                break;
            case 'o':
                contador_o++;
                break;
            case 'u':
                contador_u++;
                break;
        }
    }

    alert("La vocal a: "+contador_a+"\nLa vocal e: "+contador_e+"\nLa vocal i: "+contador_i+"\nLa vocal o: "+contador_o+ "\nLa vocal u: "+contador_u);
});