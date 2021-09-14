'use strict'

//BOM -Browser Object Model

//Ver tamaño de la ventana
console.log(window.innerHeight);//altura
console.log(window.innerWidth);//anchura
console.log(screen.height);//saca la altura completa de la pantalla
console.log(screen.width);

//Var URL
console.log(window.location);
console.log(window.location.href);

//Abrir ventana
function abrirVentana(url){
    window.open(url, "width=400, height=300");
}

abrirVentana("https://google.com");