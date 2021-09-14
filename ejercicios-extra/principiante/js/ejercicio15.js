'use strict'

/*
Completar el codigo JavaScript proporcionado para que:
    
    1.Al mover el raton en cualquier punto de la ventana del 
    navegador, se muestre la posicion del puntero respecto del 
    navegador y respecto de la pagina: 

        Ratón
        Navegador [326, 432]
        Pagina [326, 88]

    Para mostrar los mensajes, utilizar la funcion 
    muestraInformacion() deduciendo su funcionamiento a partir 
    de su codigo fuente.

    2.Al pulsar cualquier tecla, el mensaje mostrado debe cambiar 
    para indicar el nuevo evento y su informacion asociada: 

        Teclado
        Caracter [a]
        Codigo [97]

    3. Añadir la siguiente caracteristica al script: cuando se 
    pulsa un boton del raton, el color de fondo del cuadro de 
    mensaje debe ser amarillo (#FFFFCC) y cuando se pulsa una 
    tecla, el color de fondo debe ser azul (#CCE6FF). Al mover 
    el ratón, el color de fondo vuelve a ser blanco.
*/

window.addEventListener('load', () => {

    var cuerpo = document.body;
    cuerpo.addEventListener('mousemove', muestraInformacion);
    cuerpo.addEventListener('keypress', muestraInformacion);
});

//Funcion que muestra la información del raton
function muestraInformacion(evento) {

    var info = document.querySelector("#info");
    
    switch (evento.type) {
        case 'mousemove':
            //Coordenadas al mover el mouse
            var coordenadaNavigatorX = document.body.value = evento.screenX;
            var coordenadaNavigatorY = document.body.value = evento.screenY;
            var coordenadaPageX = document.body.value = evento.pageX;
            var coordenadaPageY = document.body.value = evento.pageY;

            //Crear nodos y elementos
            var cajaRaton = document.createElement("div");
            var tituloRaton = document.createElement("h1");
            var parrafo1Coordenada = document.createElement("p");
            var parrafo2Coordenada = document.createElement("p");
            var textoCoordenadaNavegador = document.createTextNode("Navegador [" + coordenadaNavigatorX + "," + coordenadaNavigatorY + "]");
            var textoCoordenadaPage = document.createTextNode("Pagina [" + coordenadaPageX + "," + coordenadaPageY + "]");
            var textoRaton = document.createTextNode("Ratón");


            //Mostrar por pantalla
            tituloRaton.appendChild(textoRaton);
            parrafo1Coordenada.appendChild(textoCoordenadaNavegador);
            parrafo2Coordenada.appendChild(textoCoordenadaPage);
            info.appendChild(cajaRaton);
            cajaRaton.appendChild(tituloRaton);
            cajaRaton.appendChild(parrafo1Coordenada);
            cajaRaton.appendChild(parrafo2Coordenada);
            cajaRaton.style.background = "#FFFFCC";
            cajaRaton.style.width = "150px";

            break;

        case 'keypress':

            //Sacamos el caracter y el codigo del caracter
            var caracter = document.body.value = evento.charCode;
            var letra = String.fromCharCode(caracter);//convierte el codigo en un string
            var codigoCaracter = document.body.value = evento.keyCode;

            //Crear nodos y elementos
            var cajaTeclado = document.createElement("div");
            var tituloTeclado = document.createElement("h1");
            var parrafoCaracter = document.createElement("p");
            var parrafoCodigoCaracter = document.createElement("p");
            var textoCaracter = document.createTextNode("Caracter [" + letra + "]");
            var textoCodigoCaracter = document.createTextNode("Codigo [" + codigoCaracter + "]");
            var textoTeclado = document.createTextNode("Teclado");

            //Mostramos por pantalla
            tituloTeclado.appendChild(textoTeclado);
            parrafoCaracter.appendChild(textoCaracter);
            parrafoCodigoCaracter.appendChild(textoCodigoCaracter);
            info.appendChild(cajaTeclado)
            cajaTeclado.appendChild(tituloTeclado);
            cajaTeclado.appendChild(parrafoCaracter);
            cajaTeclado.appendChild(parrafoCodigoCaracter);
            cajaTeclado.style.background = "#CCE6FF";
            cajaTeclado.style.width = "150px";

            break;
    }

}