'use strict';

/*
A partir de la pagina web proporcionada y utilizando las funciones 
DOM, mostrar por pantalla la siguiente información:
    1. Numero de enlaces de la pagina
    2. Direccion a la que enlaza el penultimo enlace
    3. Numero de enlaces que enlazan a http://prueba
    4. Numero de enlaces del tercer parrafo
*/
window.addEventListener('load', () => {
    //Numero de enlaces de la pagina
    var numero_enlaces = document.getElementsByTagName("a");
    alert("Numero de enlaces en pagina: "+numero_enlaces.length);

    //Direccion a la que enlaza el penultimo enlace
    var penultimo_enlace = numero_enlaces[numero_enlaces.length-2].href;
    alert(penultimo_enlace);

    //Numero de enlaces que enlazan a http://prueba/
    var enlace_prueba = numero_enlaces;
    var numeroEnlacesPrueba = 0;

    for(var i = 0; i <= numero_enlaces.length; i++) {
        if(enlace_prueba[i] == "http://prueba/"){
            numeroEnlacesPrueba++;
        }
    }
    alert("El numero de enlaces que enlazan a http://prueba es: "+numeroEnlacesPrueba);

    //Numero de enlaces del tercer parrafo
    var tercerParrafo = document.getElementsByTagName("p")[2].getElementsByTagName("a");

    alert("El numeor de enlaces en el tercer parrafo es de: "+tercerParrafo.length);
    
});