'use strict'

window.addEventListener('load', () =>{
    //EVENTOS DEL RATON

    var boton = document.querySelector("#boton");

    function cambiarColor(){
        var bg = boton.style.backgroundColor;
        if(bg == "gold"){
            bg = boton.style.background  = "tomato";
        }else{
            bg = boton.style.background = "gold";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc"
        console.log(bg);
    }

    //Evento click
    boton.addEventListener('click', function(){
        cambiarColor();
        this.style.border = "10px solid black";
    });

    //Evento Mouse Over
    boton.addEventListener('mouseover', function(){
        boton.style.background = "blue";
    });

    //Evento Mouse Out
    boton.addEventListener('mouseout', function(){
        boton.style.background = "#ccc";
    });

    //Eventos DEL TECLADO

    var input = document.querySelector("#campo_nombre");

    //Focus
    input.addEventListener('focus', function(){
        console.log("Estas haciendo foco en el input");
    });

    //Blur
    input.addEventListener('blur', function(){
        console.log("Estas fuera del input");
    });

    //Keydown
    input.addEventListener('keydown', function(){
        console.log("Estas pulsando una tecla");
    });

    //Keypress
    input.addEventListener('keypress', function(){
        console.log("Tecla presionada");
    });

    //Keyup
    input.addEventListener('keyup', function(){
        console.log("Has soltado la tecla");
    });
});
